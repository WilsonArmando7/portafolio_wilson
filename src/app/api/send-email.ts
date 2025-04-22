// Importamos los tipos necesarios desde Next.js para manejar solicitudes y respuestas
import {NextApiRequest, NextApiResponse} from "next";

// Importamos la librería Nodemailer para enviar correos electrónicos
import nodemailer from "nodemailer";

// Esta es la función principal del endpoint. Se ejecuta cuando se hace una solicitud a /api/send-email
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Validamos que el método HTTP sea POST
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido",
        });
    }

    // Extraemos los datos del cuerpo de la solicitud
    const {to, subject, text} = req.body;

    // Verificamos que todos los campos necesarios estén presentes
    if (!to || !subject || !text) {
        return res.status(400).json({
            success: false,
            message: "Todos los campos son obligatorios",
        });
    }

    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });

        console.log("Mensaje enviado:", info.messageId);

        res.status(200).json({
            success: true,
            message: "Correo enviado correctamente",
        });
    } catch (error: any) {
        console.error("Error al enviar el correo:", error.message);
        res.status(500).json({
            éxito: false,
            mensaje: "Error al enviar el correo",
            error: error.message,
        });
    }
}
