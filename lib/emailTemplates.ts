type EmailField = {
  label: string;
  value: string;
};

export function escapeEmailHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\r?\n/g, '<br>');
}

const DEFAULT_LOGO_URL = 'https://iili.io/nx0Qy6N.png';

export function brandedEmail({
  eyebrow,
  title,
  intro,
  fields = [],
  button,
  footer = 'Red Rhymes · Creative marketing, branding and digital growth',
}: {
  eyebrow: string;
  title: string;
  intro: string;
  fields?: EmailField[];
  button?: { label: string; href: string };
  footer?: string;
}) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const logoUrl = siteUrl
    ? `${siteUrl}/assets/images/logo/logo.png`
    : DEFAULT_LOGO_URL;

  const fieldMarkup = fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #eee;color:#777;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;width:34%;">${escapeEmailHtml(label)}</td>
          <td style="padding:14px 16px;border-bottom:1px solid #eee;color:#171717;font-size:15px;line-height:1.5;">${escapeEmailHtml(value)}</td>
        </tr>`
    )
    .join('');

  return `<!doctype html>
<html><body style="margin:0;background:#ededed;font-family:Arial,Helvetica,sans-serif;color:#171717;">
  <div style="padding:28px 12px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08);">
      <tr><td style="padding:20px 34px;background:#0b0b0b;color:#fff;">
        <img src="${logoUrl}" alt="Red Rhymes" width="112" style="display:block;height:auto;max-width:112px;border:0;outline:none;" />
      </td></tr>
      <tr><td style="height:4px;background:#e21d2a;font-size:0;line-height:0;">&nbsp;</td></tr>
      <tr><td style="padding:40px 34px 22px;">
        <div style="color:#ff2633;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${escapeEmailHtml(eyebrow)}</div>
        <h1 style="margin:12px 0 14px;font-size:30px;line-height:1.15;letter-spacing:-.8px;color:#111;">${escapeEmailHtml(title)}</h1>
        <p style="margin:0;color:#5f5f5f;font-size:16px;line-height:1.65;">${escapeEmailHtml(intro)}</p>
      </td></tr>
      ${
        fields.length
          ? `<tr><td style="padding:4px 34px 20px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e8e8e8;border-collapse:collapse;">${fieldMarkup}</table></td></tr>`
          : ''
      }
      ${
        button
          ? `<tr><td style="padding:8px 34px 36px;"><a href="${escapeEmailHtml(button.href)}" style="display:inline-block;padding:14px 24px;background:#e21d2a;color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">${escapeEmailHtml(button.label)} &rarr;</a></td></tr>`
          : '<tr><td style="height:14px;">&nbsp;</td></tr>'
      }
      <tr><td style="padding:22px 34px;background:#fafafa;color:#888;font-size:11px;line-height:1.6;">${escapeEmailHtml(footer)}<br><a href="mailto:rhymesredd@gmail.com" style="color:#e21d2a;text-decoration:none;">rhymesredd@gmail.com</a></td></tr>
    </table>
  </div>
</body></html>`;
}
