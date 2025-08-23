import nodemailer from 'nodemailer';

// (Optional) keep Next's default JSON parser:
export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { EMAIL_USER, EMAIL_PASS, MAIN_EMAIL, NODE_ENV } = process.env;

  // Never print secrets; just boolean flags for debugging
  const haveEnv = {
    EMAIL_USER: !!EMAIL_USER,
    EMAIL_PASS: !!EMAIL_PASS,
    MAIN_EMAIL: !!MAIN_EMAIL,
  };

  const badEnv = !EMAIL_USER || !EMAIL_PASS;
  if (badEnv) {
    return res.status(500).json({
      error: "Server email not configured.",
      hints: [
        "Set EMAIL_USER = your full Gmail address",
        "Set EMAIL_PASS = Gmail App Password (not your login password)",
        "OPTIONAL: MAIN_EMAIL (defaults to EMAIL_USER)",
      ],
      haveEnv,
    });
  }

  const { email, subject, message } = req.body || {};
  if (!email || !subject || !message) {
    return res
      .status(400)
      .json({ error: "Missing email, subject, or message." });
  }

  try {
    // Use explicit Gmail SMTP (more reliable than service: 'gmail')
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const to = MAIN_EMAIL || EMAIL_USER;
    if (!to) {
      return res.status(500).json({
        error: "No recipients configured.",
        hint: "Set MAIN_EMAIL or rely on EMAIL_USER as fallback.",
      });
    }

    await transporter.sendMail({
      from: `Portfolio Contact Form <${EMAIL_USER}>`,
      to,
      subject: "New Message from Portfolio Site",
      text: `Subject: ${subject}\n\nFrom: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return res.status(200).json({
      ok: true,
      message: "Message sent successfully\nThank you for visiting!",
    });
  } catch (err) {
    // Map common nodemailer/Gmail errors to readable causes
    const code = err?.code || err?.responseCode || "UNKNOWN";
    const detail = err?.message || "Unknown error";
    const helpful =
      code === "EAUTH" || String(code) === "535"
        ? "Gmail rejected authentication. Use a Gmail App Password (2-Step Verification required)."
        : code === "ENOTFOUND" || code === "ETIMEDOUT"
        ? "Network/DNS issue reaching smtp.gmail.com from your host."
        : "See server logs for full stack trace.";

    // In non-production, include the message to speed up debugging
    const payload =
      NODE_ENV === "production"
        ? { error: "Failed to send message.", code }
        : { error: "Failed to send message.", code, detail };

    console.error("Email error:", { code, detail });
    return res.status(500).json({ ...payload, haveEnv });
  }
}