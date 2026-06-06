import nodemailer from "nodemailer";
import { logger } from "./logger";

function createTransporter() {
  const user = "zenitu.com.br@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) {
    logger.warn("GMAIL_APP_PASSWORD não configurado — e-mails não serão enviados");
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendPasswordResetEmail(to: string, resetUrl: string): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) return;

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f4f4f8;font-family:system-ui,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
        <tr><td align="center">
          <table width="480" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;padding:40px 32px;box-shadow:0 2px 8px rgba(0,0,0,.08);">
            <tr><td>
              <div style="text-align:center;margin-bottom:24px;">
                <span style="font-size:48px;">🏢</span>
                <h1 style="margin:8px 0 0;font-size:24px;font-weight:800;color:#1a1a2e;">Zenitu</h1>
                <p style="margin:4px 0 0;font-size:13px;color:#7c7c9a;font-weight:600;letter-spacing:.05em;text-transform:uppercase;">Recuperação de senha</p>
              </div>
              <p style="font-size:15px;color:#444;line-height:1.6;margin:0 0 24px;">
                Recebemos uma solicitação para redefinir a senha da sua conta.<br>
                Clique no botão abaixo para criar uma nova senha. O link é válido por <strong>15 minutos</strong>.
              </p>
              <div style="text-align:center;margin:24px 0;">
                <a href="${resetUrl}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;font-weight:800;font-size:15px;padding:14px 32px;border-radius:12px;text-decoration:none;letter-spacing:.01em;">
                  Redefinir minha senha
                </a>
              </div>
              <p style="font-size:13px;color:#999;line-height:1.6;margin:24px 0 0;border-top:1px solid #f0f0f5;padding-top:16px;">
                Se você não solicitou a recuperação de senha, ignore este e-mail. Sua senha permanece a mesma.<br><br>
                Por segurança, nunca compartilhe este link com ninguém.
              </p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Zenitu" <zenitu.com.br@gmail.com>',
    to,
    subject: "Redefinição de senha – Zenitu",
    html,
  });

  logger.info({ to }, "Password reset email sent");
}
