import { NextRequest, NextResponse } from 'next/server';
import { mailTransporter } from '@/lib/mail';
import { brandedEmail } from '@/lib/emailTemplates';

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
        from: `"${name}" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: process.env.ADMIN_EMAIL || 'admin@redrhymes.com',
        replyTo: email,
        subject: 'Request for Influencer Company',
        html: brandedEmail({
          eyebrow: 'Company request',
          title: 'A new company enquiry is ready.',
          intro: 'A company has requested information about influencer marketing.',
          fields: [
            { label: 'Name', value: name },
            { label: 'Email', value: email },
            { label: 'Phone', value: phone },
            { label: 'Company', value: company },
            { label: 'Website', value: site },
            { label: 'Service', value: checkbox },
          ],
          button: { label: 'Reply to company', href: `mailto:${email}` },
        }),
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
