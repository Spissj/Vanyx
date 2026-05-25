import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json();

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos obligatorios (nombre, email, mensaje).' },
        { status: 400 }
      );
    }

    // Usamos FormSubmit.co para enviar el correo directamente a vanyx.ia@gmail.com sin contraseñas
    const payload = {
      Nombre: name,
      Email: email,
      Empresa: company || 'No especificada',
      Servicio: service || 'No especificado',
      Mensaje: message,
      _subject: `🔥 Nuevo Contacto de ${name} — VANYX`,
      _honey: '', // Campo trampa anti-spam
    };

    const response = await fetch('https://formsubmit.co/ajax/vanyx.ia@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success === 'true') {
      return NextResponse.json({ success: true, message: 'Formulario enviado con éxito.' });
    } else {
      console.error('❌ Error devuelto por FormSubmit:', result);
      return NextResponse.json(
        { error: 'Error al procesar el envío a través del servicio de correos.' },
        { status: 502 }
      );
    }
  } catch (error: any) {
    console.error('❌ Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar el envío del formulario.' },
      { status: 500 }
    );
  }
}
