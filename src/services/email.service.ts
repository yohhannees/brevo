import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); //
export const sendWelcomeEmail = async (
  fullname: string,
  country: string,
  email: string
) => {
  // Send email
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"MyApp" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to MyApp!",
    text: `Hi ${fullname},\n\nWelcome to MyApp! We’re excited to have you join us from ${country}.\n\nBest regards,\nThe MyApp Team`,
  };

  await transporter.sendMail(mailOptions);

  // Store email record in the database
  await prisma.emailRecord.create({
    data: {
      fullname,
      country,
      email,
    },
  });
};
