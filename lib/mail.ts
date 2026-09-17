import nodemailer from 'nodemailer';

export const mailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER || 'redd.influencer@gmail.com',
    pass: process.env.SMTP_PASS || 'ltkrqhmieuhfahdx',
  },
});
