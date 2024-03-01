
import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'tomiprogram.2003@gmail.com',
    pass: 'zfsf ubta ykol vsbh'
  }
});

const mailData = {
  from: 'tomiprogram.2003@gmail.com',
  to: 'tomiprogram.2003@gmail.com',
  subject: 'EXAMPLE',
  text: 'Hello World!'
};

export const POST = async (request) => {
  const mail = await transporter.sendMail(mailData);
  console.log(mail)
  return NextResponse.json({ mail })
}
