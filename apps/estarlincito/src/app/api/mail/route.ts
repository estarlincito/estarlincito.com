import { ApiResponse } from '@estarlincito/utils';
// import { getReCaptcha } from '@repo/lib/captcha';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest): Promise<Response> => {
  /** improve: PLEASE USE Zod TO VALIDATE DATA */
  const body = await req.formData();
  const requiredFields = [
    'first-name',
    'last-name',
    'email',
    'message',
    'subject',
    // 'token',
  ];
  const missingFields = requiredFields.filter((field) => !body.get(field));
  // const isHuman = await getReCaptcha((body.get('token') as string) ?? '');

  // if (!isHuman) {
  //   return ApiResponse.json({
  //     message: `Bot detected`,
  //     status: 403,
  //     success: false,
  //   });
  // }

  if (missingFields.length > 0) {
    return ApiResponse.json({
      message: `Missing required fields: ${missingFields.join(', ')}`,
      status: 400,
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
    subject: body.get('subject') as string,
  };

  // Validate environment variables
  if (!process.env.MAIL_ADDRESS || !process.env.MAIL_PASSWORD) {
    return ApiResponse.json({
      message: 'Server configuration error',
      status: 500,
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
      to: process.env.MAIL_ADDRESS,
    };

    await transporter.sendMail(mailOptions);

    return ApiResponse.json({
      message: '🎉 Email sent successfully!',
      status: 200,
      success: true,
    });
  } catch {
    return ApiResponse.json({
      message: 'We were unable to send your message. Please try again later.',
      status: 500,
      success: false,
    });
  }
};
