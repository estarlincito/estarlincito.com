import { resmsg } from '@estarlincito/utils';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest): Promise<Response> => {
  const body = await req.formData();
  const requiredFields = ['first-name', 'last-name', 'email', 'message'];
  const missingFields = requiredFields.filter((field) => !body.get(field));

  if (missingFields.length > 0) {
    return resmsg({
      code: 400,
      message: `Missing required fields: ${missingFields.join(', ')}`,
      success: false,
    });
  }

  const formData = {
    company: body.get('company') as string,
    email: body.get('email') as string,
    'first-name': body.get('first-name') as string,
    'last-name': body.get('last-name') as string,
    message: body.get('message') as string,
    'phone-number': body.get('phone-number') as string,
  };

  // Validate environment variables
  if (!process.env.MAIL_ADDRESS || !process.env.MAIL_PASSWORD) {
    return resmsg({
      code: 500,
      message: 'Server configuration error',
      success: false,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      // SSL/TLS required for port 465
      auth: {
        pass: process.env.MAIL_PASSWORD,
        user: process.env.MAIL_ADDRESS,
      },

      host: 'smtp.mail.me.com',

      port: 465,

      secure: false,
      service: 'iCloud',
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_ADDRESS,
      replyTo: formData.email,
      subject: `New Contact Message | ${formData['first-name']}`,
      text: `
      You have received a new contact message:

      Name: ${formData['first-name']} ${formData['last-name']}
      Email: ${formData.email}
      Company: ${formData.company}
      Phone Number: ${formData['phone-number']}

      Message:
      ${formData.message}

      Please respond as soon as possible.
      `.replace(/^ +/gm, ''),
      to: process.env.MAIL_ADDRESS, // Remove leading whitespace
    };

    const info = await transporter.sendMail(mailOptions);
    return resmsg({
      code: 200,
      message: `Email sent: ${info.response}`,
      success: true,
    });
  } catch {
    return resmsg({
      code: 500,
      message: 'We were unable to send your message. Please try again later.',
      success: false,
    });
  }
};
