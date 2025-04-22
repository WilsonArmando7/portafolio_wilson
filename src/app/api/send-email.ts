import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido",
        });
    }

    const {to, subject, text} = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({
            success: false,
            message: "Todos los campos son obligatorios",
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // o el servicio que uses
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Correo enviado exitosamente",
        });
    } catch (error) {
        console.error("Error al enviar el correo:", error.message);
        res.status(500).json({
            success: false,
            message: "Error al enviar el correo",
            error: error.message,
        });
    }
}
