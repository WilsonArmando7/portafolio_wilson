import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Solo acepta solicitudes POST
    if (req.method !== "POST") {
        return res.status(405).json({success: false, message: "Método no permitido"});
    }

    const {to, subject, text} = req.body;

    // Validación de datos
    if (!to || !subject || !text) {
        return res.status(400).json({success: false, message: "Todos los campos son obligatorios"});
    }

    try {
        // Verificar las variables de entorno
        console.log("EMAIL_USER:", process.env.EMAIL_USER); // Asegúrate de que esta variable esté en .env.local
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS); // Asegúrate de que esta variable esté en .env.local

        // Configuración del transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes cambiarlo según tu proveedor de correo
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

        console.log("Mensaje enviado:", info.messageId); // Muestra el ID del mensaje para confirmación
        res.status(200).json({success: true, message: "Correo enviado correctamente"});
    } catch (error: unknown) {
        // Aquí va el bloque `catch` actualizado para manejar el error correctamente
        if (error instanceof Error) {
            console.error("Error al enviar el correo:", error.message); // Muestra el mensaje de error
            console.error("Stack:", error.stack); // Muestra el stack trace del error
            res.status(500).json({success: false, message: "Error al enviar el correo", error: error.message});
        } else {
            // Si el error no es una instancia de Error, manejamos el error desconocido
            console.error("Error desconocido:", error); // Muestra el error desconocido
            res.status(500).json({success: false, message: "Error desconocido al enviar el correo"});
        }
    }
}
