type MailAddress = string | { email: string; name?: string };

type MailOptions = {
  from: string;
  to: MailAddress | MailAddress[];
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
};

export const DEFAULT_EMAIL = 'rhymesredd@gmail.com';

function parseAddress(address: MailAddress) {
  if (typeof address !== 'string') return address;

  const match = address.match(/^(?:"?(.+?)"?\s*)?<([^>]+)>$/);
  if (match) {
    return { name: match[1]?.trim(), email: match[2].trim() };
  }

  return { email: address.trim() };
}

export const mailTransporter = {
  async sendMail(options: MailOptions) {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    if (!apiKey || !senderEmail) {
      throw new Error('BREVO_API_KEY and BREVO_SENDER_EMAIL must be configured.');
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME || 'Red Rhymes',
          email: senderEmail,
        },
        to: (Array.isArray(options.to) ? options.to : [options.to]).map(parseAddress),
        replyTo: options.replyTo ? parseAddress(options.replyTo) : undefined,
        subject: options.subject,
        textContent: options.text,
        htmlContent: options.html,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`Brevo email request failed (${response.status}): ${details}`);
    }

    return response.json();
  },
};
