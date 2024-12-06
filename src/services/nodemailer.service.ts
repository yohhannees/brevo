import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const sendWelcomeEmail = async (
  fullname: string,
  country: string,
  email: string
) => {
  // Configure Nodemailer with Brevo SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "81169d001@smtp-brevo.com", // Brevo SMTP login
      pass: "yVZazGWr4TBbQ8EC", // Brevo SMTP password
    },
  });

  // Email options
  const mailOptions = {
    from: `"SoundRig" <81169d001@smtp-brevo.com>`, // Your email address
    to: email,
    subject: "Welcome to MyApp!",
    text: `Hi ${fullname},\n\nWelcome to MyApp! We’re excited to have you join us from ${country}.\n\nBest regards,\nThe MyApp Team`,
  };

  // Send email
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
