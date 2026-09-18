import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';
import { brandedEmail } from '@/lib/emailTemplates';

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

    // Insert into MongoDB Atlas
    try {
      const db = await getMongoDb();
      await db.collection('contact_forms').insertOne({
        name,
        phone,
        message,
        email,
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error('MongoDB contact form insert error:', dbErr);
    }

    // Send email notification
    try {
      await mailTransporter.sendMail({
        from: `"${name}" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: `Querry ${email}`,
        html: brandedEmail({
          eyebrow: 'New contact form submission',
          title: 'A new enquiry is ready.',
          intro: 'A visitor has submitted the contact form.',
          fields: [
            { label: 'Name', value: name },
            { label: 'Phone', value: phone },
            { label: 'Email', value: email },
            { label: 'Message', value: message },
          ],
          button: { label: 'Reply to lead', href: `mailto:${email}` },
        }),
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
