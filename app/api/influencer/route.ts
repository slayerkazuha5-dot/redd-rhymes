import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';
import { brandedEmail } from '@/lib/emailTemplates';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const platform = (formData.get('platform') as string) || '';
    const follower = (formData.get('follower') as string) || '';
    const message = (formData.get('message') as string) || '';

    // Insert into MongoDB Atlas
    try {
      const db = await getMongoDb();
      await db.collection('influencers').insertOne({
        name,
        email,
        phone,
        platform,
        follower,
        message,
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error('MongoDB influencer insert error:', dbErr);
    }

    // Send thank you email to influencer
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: email,
        subject: `Dear ${name}`,
        html: brandedEmail({
          eyebrow: 'Application received',
          title: `Thanks, ${name}.`,
          intro: 'We have received your influencer application and will get back to you shortly.',
        }),
      });
    } catch (mailErr) {
      console.error('Influencer user email error:', mailErr);
    }

    // Send email to admin
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.BREVO_SENDER_EMAIL || 'no-reply@example.com'}>`,
        to: 'redrhymes1@gmail.com',
        replyTo: email,
        subject: "I'm an Influencer",
        html: brandedEmail({
          eyebrow: 'New influencer application',
          title: 'A new creator is interested.',
          intro: 'A creator has submitted an influencer application.',
          fields: [
            { label: 'Name', value: name },
            { label: 'Email', value: email },
            { label: 'Phone', value: phone },
            { label: 'Platform', value: platform },
            { label: 'Followers', value: follower },
            { label: 'Message', value: message },
          ],
          button: { label: 'Reply to creator', href: `mailto:${email}` },
        }),
      });
    } catch (adminMailErr) {
      console.error('Admin influencer notification error:', adminMailErr);
    }

    return NextResponse.redirect(new URL('/influencer-marketing?status=success', req.url), 303);
  } catch (error) {
    console.error('Error handling influencer form:', error);
    return NextResponse.redirect(new URL('/influencer-marketing?status=error', req.url), 303);
  }
}
