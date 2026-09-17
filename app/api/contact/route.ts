import { NextRequest, NextResponse } from 'next/server';
import { getDbPool } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const site = (formData.get('purpose') as string) || (formData.get('site') as string) || '';
    const services = (formData.get('services') as string) || '';
    const message = (formData.get('message') as string) || '';
    const recaptchaResponse = (formData.get('g-recaptcha-response') as string) || '';

    // Verify reCAPTCHA if provided
    const recaptchaSecret = process.env.RECAPTCHA_SECRET || '6LfabWQmAAAAADCWMyFkDMh0vKr5Udk8hcGafQAO';
    if (recaptchaResponse) {
      try {
        const verifyRes = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`,
          { method: 'POST' }
        );
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.redirect(new URL('/contact?status=captcha_error', req.url), 303);
        }
      } catch (captchaErr) {
        console.error('reCAPTCHA validation error:', captchaErr);
      }
    }

    // Insert into MySQL user table
    try {
      const pool = getDbPool();
      await pool.execute(
        'INSERT INTO `user` (`name`, `email`, `phone`, `site`, `services`, `message`) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, phone, site, services, message]
      );
    } catch (dbErr) {
      console.error('Database user insert error:', dbErr);
    }

    // Send thank you email to user
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: email,
        subject: `Dear ${name}`,
        html: `
          Thank you for registering with us.<br>
          We have updated your record in our database.<br>
          We will get back to you shortly.<br><br>
          Regards,<br>RedRhymes Consulting Pvt. Ltd.
        `,
      });
    } catch (userMailErr) {
      console.error('User email send error:', userMailErr);
    }

    // Send notification email to admin
    try {
      await mailTransporter.sendMail({
        from: `"Website Enquiry" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: 'New Contact Form Submission',
        html: `
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Purpose:</strong> ${site}<br>
          <strong>Services:</strong> ${services}<br>
          <strong>Message:</strong><br>${message}
        `,
      });
    } catch (adminMailErr) {
      console.error('Admin email send error:', adminMailErr);
    }

    return NextResponse.redirect(new URL('/contact?status=success', req.url), 303);
  } catch (error) {
    console.error('Error in contact form process:', error);
    return NextResponse.redirect(new URL('/contact?status=error', req.url), 303);
  }
}
