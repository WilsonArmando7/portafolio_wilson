// Importamos los tipos necesarios desde Next.js para manejar solicitudes y respuestas
import {NextApiRequest, NextApiResponse} from "next";

// Importamos la librería Nodemailer para enviar correos electrónicos
import nodemailer from "nodemailer";

// Esta es la función principal del endpoint. Se ejecuta cuando se hace una solicitud a /api/send-email
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // 🔒 Validamos que el método HTTP sea POST (el único que aceptamos para enviar correos)
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido", // Código 405 = Method Not Allowed
        });
    }

    // ✉️ Extraemos los datos del cuerpo de la solicitud (el JSON que nos envían)
    const {to, subject, text} = req.body;

    // 🧪 Verificamos que todos los campos necesarios estén presentes
    if (!to || !subject || !text) {
        return res.status(400).json({
            success: false,
            message: "Todos los campos son obligatorios", // Código 400 = Bad Request
        });
    }

    try {
        // 🛠️ MOSTRAMOS en consola las variables de entorno para confirmar que están configuradas
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

        // ✉️ Configuramos el transportador de Nodemailer con el servicio y autenticación
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes cambiarlo a Outlook, Yahoo, etc.
            auth: {
                user: process.env.EMAIL_USER, // Usuario (correo) leído desde .env.local
                pass: process.env.EMAIL_PASS, // Contraseña segura desde .env.local
            },
        });

        // 📩 Configuramos los detalles del correo a enviar
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER, // El correo que envía el mensaje
            to, // Destinatario que se recibió desde el frontend
            subject, // Asunto del mensaje
            text, // Cuerpo del mensaje en texto plano
        });

        // ✅ Si se envía correctamente, mostramos el ID del mensaje
        console.log("Mensaje enviado:", info.messageId);

        // Respondemos al cliente que todo fue exitoso
        res.status(200).json({
            success: true,
            message: "Correo enviado correctamente",
        });
    } catch (error: unknown) {
        // ⚠️ Manejo de errores: validamos si el error es del tipo Error (con message y stack)
        if (error instanceof Error) {
            console.error("Error al enviar el correo:", error.message);
            console.error("Stack:", error.stack);
            res.status(500).json({
                success: false,
                message: "Error al enviar el correo",
                error: error.message,
            });
        } else {
            // Si el error no es una instancia de Error, mostramos un mensaje genérico
            console.error("Error desconocido:", error);
            res.status(500).json({
                success: false,
                message: "Error desconocido al enviar el correo",
            });
        }
    }
}
