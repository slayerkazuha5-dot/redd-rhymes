import { z } from 'zod';
import { getMongoDb } from '@/lib/db';

export const leadSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(254),
  company: z.string().trim().max(160).default(''),
  phone: z.string().trim().max(40).default(''),
  challenge: z.string().trim().min(1, 'Please choose a service.').max(120),
  message: z.string().trim().max(5000).default(''),
  recaptchaToken: z.string().trim().optional(),
});

export type LeadSubmissionType = 'scheduled' | 'inquiry_only';

export async function verifyRecaptcha(token?: string) {
  if (!token) return;

  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) throw new Error('RECAPTCHA_SECRET is not configured.');

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error('reCAPTCHA verification failed.');
  }
}

export async function saveLead(
  input: unknown,
  submissionType: LeadSubmissionType
) {
  const parsed = leadSchema.parse(input);
  await verifyRecaptcha(parsed.recaptchaToken);

  const db = await getMongoDb();
  const lead = {
    name: parsed.name,
    email: parsed.email,
    company: parsed.company,
    phone: parsed.phone,
    services: parsed.challenge,
    message: parsed.message,
    submissionType,
    createdAt: new Date(),
  };

  const result = await db.collection('leads').insertOne(lead);
  return { ...lead, id: result.insertedId.toString() };
}
