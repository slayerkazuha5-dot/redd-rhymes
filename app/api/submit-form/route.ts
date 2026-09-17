import { NextRequest, NextResponse } from 'next/server';
import { getDbPool } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    let name = '';
    let phone = '';
    let email = '';
    let message = '';

    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await req.json();
      name = body.name || '';
      phone = body.phone || '';
      email = body.email || body.mail || '';
      message = body.message || '';
    } else {
      const formData = await req.formData();
      name = (formData.get('name') as string) || '';
      phone = (formData.get('phone') as string) || '';
      email = (formData.get('email') as string) || (formData.get('mail') as string) || '';
      message = (formData.get('message') as string) || '';
    }

    // Insert into MySQL contact_form table
    try {
      const pool = getDbPool();
      await pool.execute(
        'INSERT INTO `contact_form`(`name`, `phone`, `message`, `mail`) VALUES (?, ?, ?, ?)',
        [name, phone, message, email]
      );
    } catch (dbErr) {
      console.error('Database insertion error:', dbErr);
    }

    // Send email notification
    try {
      await mailTransporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: `Querry ${email}`,
        text: `From: ${name}\r\nPhone: ${phone}\r\nEmail: ${email}\r\nMessage: ${message}\r\n`,
      });
    } catch (mailErr) {
      console.error('Email send error:', mailErr);
    }

    // If client requested json, respond with JSON, otherwise redirect like original PHP
    if (contentType.includes('application/json')) {
      return NextResponse.json({ success: true, message: 'Message Sent Successfully' });
    }

    return NextResponse.redirect(new URL('/', req.url), 303);
  } catch (error) {
    console.error('Error handling submit_form:', error);
    return NextResponse.redirect(new URL('/contact', req.url), 303);
  }
}
