import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { brandedEmail } from '@/lib/emailTemplates';
import { DEFAULT_EMAIL, mailTransporter } from '@/lib/mail';
import { saveLead } from '@/lib/submitLead';

export async function POST(request: Request) {
  try {
    const input = await request.json();
    const lead = await saveLead(input, 'inquiry_only');

    await Promise.all([
      mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.BREVO_SENDER_EMAIL || DEFAULT_EMAIL}>`,
        to: lead.email,
        subject: `Thanks, ${lead.name} — Red Rhymes`,
        html: brandedEmail({
          eyebrow: 'Inquiry received',
          title: `Thanks, ${lead.name}.`,
          intro: 'We have received your inquiry. Our Red Rhymes team will review your details and contact you shortly.',
        }),
      }),
      mailTransporter.sendMail({
        from: `"Website Enquiry" <${process.env.BREVO_SENDER_EMAIL || DEFAULT_EMAIL}>`,
        to: process.env.ADMIN_EMAIL || DEFAULT_EMAIL,
        replyTo: lead.email,
        subject: 'New Inquiry — Red Rhymes',
        html: brandedEmail({
          eyebrow: 'Inquiry only',
          title: 'A new lead is ready.',
          intro: 'Someone submitted an inquiry without booking a call.',
          fields: [
            { label: 'Name', value: lead.name },
            { label: 'Email', value: lead.email },
            { label: 'Company', value: lead.company },
            { label: 'Phone', value: lead.phone },
            { label: 'Service', value: lead.services },
            { label: 'Project details', value: lead.message },
          ],
          button: { label: 'Reply to lead', href: `mailto:${lead.email}` },
        }),
      }),
    ]);

    return NextResponse.json({ success: true, submissionType: 'inquiry_only' });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: error.issues[0]?.message || 'Invalid form data.' },
        { status: 400 }
      );
    }
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to save your inquiry right now.' },
      { status: 500 }
    );
  }
}
