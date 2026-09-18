import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { brandedEmail } from '@/lib/emailTemplates';
import { DEFAULT_EMAIL, mailTransporter } from '@/lib/mail';
import { saveLead } from '@/lib/submitLead';

export async function POST(request: Request) {
  try {
    const input = await request.json();
    const lead = await saveLead(input, 'scheduled');

    await Promise.allSettled([
      mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.BREVO_SENDER_EMAIL || DEFAULT_EMAIL}>`,
        to: lead.email,
        subject: `Thanks, ${lead.name} — Red Rhymes`,
        html: brandedEmail({
          eyebrow: 'We received your enquiry',
          title: `Thanks, ${lead.name}.`,
          intro: 'Your message is safely with our team. We will review it and get back to you shortly.',
        }),
      }),
      mailTransporter.sendMail({
        from: `"Website Enquiry" <${process.env.BREVO_SENDER_EMAIL || DEFAULT_EMAIL}>`,
        to: process.env.ADMIN_EMAIL || DEFAULT_EMAIL,
        replyTo: lead.email,
        subject: 'New Scheduled Lead — Red Rhymes',
        html: brandedEmail({
          eyebrow: 'Scheduled strategy call',
          title: 'A new lead is ready.',
          intro: 'Someone submitted the form and is ready to schedule a call.',
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

    return NextResponse.json({ success: true, submissionType: 'scheduled' });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, message: error.issues[0]?.message || 'Invalid form data.' },
        { status: 400 }
      );
    }
    console.error('Scheduled lead submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to save your enquiry right now.' },
      { status: 503 }
    );
  }
}
