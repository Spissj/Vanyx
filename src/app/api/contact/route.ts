import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos obligatorios (nombre, email, mensaje).' },
        { status: 400 }
      )
    }

    // Configuración de SMTP (preferiblemente Gmail)
    const smtpUser = process.env.SMTP_USER || 'vanyx.ia@gmail.com';
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      console.warn('⚠️ SMTP_PASS no está configurado en las variables de entorno (.env.local).');
      // Si no hay contraseña de aplicación, simulamos un envío correcto en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.log('📬 Envío simulado (sin credenciales):', { name, email, company, service, message });
        return NextResponse.json({ success: true, message: 'Simulado con éxito.' });
      }
      return NextResponse.json(
        { error: 'El servidor de correo no está configurado. Por favor configure SMTP_PASS.' },
        { status: 500 }
      );
    }

    // Transmisor nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass, // Contraseña de aplicación de Gmail (16 letras)
      },
    });

    // Diseño premium del correo electrónico HTML
    const mailHtml = `
      <div style="background-color: #030303; color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.06);">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px; text-align: center;">
          <h2 style="color: #00D9FF; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">VANYX — NUEVO CONTACTO</h2>
          <p style="color: #5A5A68; font-size: 13px; margin: 5px 0 0 0;">Se ha recibido una nueva solicitud a través del sitio web.</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tr>
            <td style="padding: 10px 0; color: #5A5A68; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase;">Nombre:</td>
            <td style="padding: 10px 0; color: #f5f5f5; font-size: 15px; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #5A5A68; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</td>
            <td style="padding: 10px 0; color: #00D9FF; font-size: 15px; font-weight: 500;">
              <a href="mailto:${email}" style="color: #00D9FF; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #5A5A68; font-size: 13px; font-weight: 600; text-transform: uppercase;">Empresa:</td>
            <td style="padding: 10px 0; color: #f5f5f5; font-size: 15px;">${company || '<em>No especificada</em>'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #5A5A68; font-size: 13px; font-weight: 600; text-transform: uppercase;">Servicio:</td>
            <td style="padding: 10px 0; color: #f5f5f5; font-size: 15px; font-weight: 600; color: #00D9FF;">${service || '<em>No seleccionado</em>'}</td>
          </tr>
        </table>
        
        <div style="background-color: rgba(255,255,255,0.02); border-left: 3px solid #00D9FF; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
          <h4 style="margin: 0 0 10px 0; font-size: 12px; color: #5A5A68; text-transform: uppercase; letter-spacing: 0.05em;">Mensaje:</h4>
          <p style="margin: 0; color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: center; color: #4B4B57; font-size: 11px;">
          <p style="margin: 0;">Este es un mensaje automático enviado desde el formulario de contacto de VANYX.</p>
        </div>
      </div>
    `;

    // Parámetros de envío
    const mailOptions = {
      from: `"VANYX Web" <${smtpUser}>`,
      to: 'vanyx.ia@gmail.com', // Correo destino solicitado
      replyTo: email,
      subject: ` Nuevo Contacto de ${name} — VANYX`,
      html: mailHtml,
    };

    // Envío real
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Correo enviado con éxito.' });
  } catch (error: any) {
    console.error('❌ Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar el envío del correo electrónico.' },
      { status: 500 }
    );
  }
}
