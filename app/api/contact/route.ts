import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';
import { brandedEmail } from '@/lib/emailTemplates';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await req.json() : Object.fromEntries(await (await req.formData()).entries());
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || '').trim();
    const site = String(data.purpose || data.site || '').trim();
    const services = String(data.services || data.challenge || '').trim();
    const message = String(data.message || '').trim();
    const recaptchaResponse = String(data['g-recaptcha-response'] || '');

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !services) {
      if (isJson) {
        return NextResponse.json(
          { success: false, message: 'Name, email, and service are required.' },
          { status: 400 }
        );
      }
      return NextResponse.redirect(new URL('/contact?status=invalid', req.url), 303);
    }

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

    // Insert into MongoDB Atlas
    try {
      const db = await getMongoDb();
      await db.collection('leads').insertOne({
        name,
        email,
        phone,
        site,
        services,
        message,
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error('MongoDB contact lead insert error:', dbErr);
    }

    // Send thank you email to user
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: email,
        subject: `Dear ${name}`,
        html: brandedEmail({
          eyebrow: 'We received your enquiry',
          title: `Thanks, ${name}.`,
          intro: 'Your message is safely with our team. We will review it and get back to you shortly.',
        }),
      });
    } catch (userMailErr) {
      console.error('User email send error:', userMailErr);
    }

    // Send notification email to admin
    try {
      await mailTransporter.sendMail({
        from: `"Website Enquiry" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: 'New Contact Form Submission',
        html: brandedEmail({
          eyebrow: 'New website enquiry',
          title: 'A new lead is ready.',
          intro: 'Someone has reached out through the Red Rhymes contact form.',
          fields: [
            { label: 'Name', value: name },
            { label: 'Email', value: email },
            { label: 'Phone', value: phone },
            { label: 'Purpose', value: site },
            { label: 'Services', value: services },
            { label: 'Message', value: message },
          ],
          button: { label: 'Reply to lead', href: `mailto:${email}` },
        }),
      });
    } catch (adminMailErr) {
      console.error('Admin email send error:', adminMailErr);
    }

    if (isJson) {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }
    return NextResponse.redirect(new URL('/contact?status=success', req.url), 303);
  } catch (error) {
    console.error('Error in contact form process:', error);
    if (req.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Unable to process your enquiry right now.' },
        { status: 500 }
      );
    }
    return NextResponse.redirect(new URL('/contact?status=error', req.url), 303);
  }
}
