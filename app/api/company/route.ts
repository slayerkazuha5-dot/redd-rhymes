import { NextRequest, NextResponse } from 'next/server';
import { mailTransporter } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const company = (formData.get('company') as string) || '';
    const site = (formData.get('site') as string) || '';
    const checkbox = (formData.get('checkbox') as string) || '';

    try {
      await mailTransporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: 'Request for Influencer Company',
        text: `From: ${name}\r\nEmail: ${email}\r\nPhone: ${phone}\r\nCompany: ${company}\r\nWebsite: ${site}\r\nService: ${checkbox}\r\n`,
      });
    } catch (mailErr) {
      console.error('Company request email error:', mailErr);
    }

    return NextResponse.redirect(new URL('/?message=Successfull', req.url), 303);
  } catch (error) {
    console.error('Error in company form route:', error);
    return NextResponse.redirect(new URL('/', req.url), 303);
  }
}
