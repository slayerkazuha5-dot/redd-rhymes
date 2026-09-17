import { NextRequest, NextResponse } from 'next/server';
import { getDbPool } from '@/lib/db';
import { mailTransporter } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const platform = (formData.get('platform') as string) || '';
    const follower = (formData.get('follower') as string) || '';
    const message = (formData.get('message') as string) || '';

    // Insert into influencer table
    try {
      const pool = getDbPool();
      await pool.execute(
        'INSERT INTO `influencer`(`name`, `email`, `phone`, `platform`, `follower`, `message`) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, phone, platform, follower, message]
      );
    } catch (dbErr) {
      console.error('Database insert error in influencer:', dbErr);
    }

    // Send thank you email to influencer
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: email,
        subject: `Dear ${name}`,
        html: `
          Thank You for registering with us. <br>
          We have updated your record in our database. <br>
          And will get back to you shortly. <br><br>
          Regards,<br>Red Rhymes Consulting Pvt. Ltd.
        `,
      });
    } catch (mailErr) {
      console.error('Influencer user email error:', mailErr);
    }

    // Send email to admin
    try {
      await mailTransporter.sendMail({
        from: `"Red Rhymes" <${process.env.SMTP_USER || 'redd.influencer@gmail.com'}>`,
        to: 'redrhymes1@gmail.com',
        replyTo: email,
        subject: "I'm an Influencer",
        html: `
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Platform:</strong> ${platform}<br>
          <strong>Followers:</strong> ${follower}<br>
          <strong>Message:</strong> ${message}<br>
        `,
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
