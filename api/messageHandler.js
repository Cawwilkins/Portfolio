import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST')
        return res.status(405).end();

    if (!email || !subject || !message){
        return res.status(400).json({error: "Missing email, subject, or message." });
    }

    try {
        const { email, subject, message } = req.body;

        // Send email notification to self
        const transporter = nodemailer.createTransport({
            service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Message from Portfolio Site',
            text: `Subject: ${subject}\n\nEmail: ${email}\n\nMessage: ${message}`,
       });

        return res.status(200).json({ message: 'Message sent successfully\nThank you for visiting!' });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send message." });
    }
};