import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  const apiKey = process.env["RESEND_API_KEY"];
  const toEmail = process.env["CONTACT_EMAIL"] || "fabio@famajocorretora.com.br";

  if (!apiKey) {
    res.status(503).json({
      error:
        "Email service not configured. Set RESEND_API_KEY environment variable.",
    });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ error: "Nome, e-mail e mensagem são obrigatórios." });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Site Famajo Corretora <noreply@famajocorretora.com.br>",
      to: toEmail,
      replyTo: email,
      subject: `Novo contato pelo site: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 32px;">
          <h2 style="color: #c8a84b; margin-top: 0;">Novo contato pelo site</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; font-weight: bold; color: #444; width: 120px;">Nome:</td>
              <td style="padding: 10px 8px; color: #222;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; font-weight: bold; color: #444;">E-mail:</td>
              <td style="padding: 10px 8px; color: #222;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 8px; font-weight: bold; color: #444;">Telefone:</td>
              <td style="padding: 10px 8px; color: #222;">${phone || "Não informado"}</td>
            </tr>
          </table>
          <h3 style="color: #c8a84b;">Mensagem:</h3>
          <p style="background: #fff; border-left: 4px solid #c8a84b; padding: 16px; border-radius: 4px; color: #333; line-height: 1.6;">${message}</p>
          <p style="color: #999; font-size: 12px; margin-top: 32px;">Enviado via famajocorretora.com.br</p>
        </div>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Falha ao enviar e-mail. Tente novamente." });
  }
});

export default router;
