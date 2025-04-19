import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Solo acepta solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  const { to, subject, text } = req.body;

  // Validación de datos
  if (!to || !subject || !text) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  try {

      // Verificar las variables de entorno
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
  
    // Configuración del transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Puedes cambiarlo según tu proveedor de correo
        auth: {
            user: process.env.EMAIL_USER, // Correo desde variables de entorno
            pass: process.env.EMAIL_PASS, // Clave desde variables de entorno
        },
    });

    // Configuración del correo
    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // Dirección del remitente
        to, // Dirección del destinatario
        subject, // Asunto del correo
        text, // Contenido del correo
    });

    console.log('Mensaje enviado:', info.messageId);
    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
} catch (error) {
    // Aquí va el bloque `catch` actualizado
    console.error('Error al enviar el correo:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ success: false, message: 'Error al enviar el correo', error: error.message });
}
