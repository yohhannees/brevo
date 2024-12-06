// src/utils/notificationSender.ts
import nodemailer from "nodemailer";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail service
  auth: {
    user: process.env.SMTP_USER, // Use environment variable for email
    pass: process.env.SMTP_PASS, // Use environment variable for password
  },
});

// Telegram Bot Token
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Use environment variable

// Function to send email
export const sendEmail = async (to: string, content: string): Promise<void> => {
  const mailOptions = {
    from: `"Ride Sharing App" <${process.env.SMTP_USER}>`, // Sender address
    to, // List of recipients
    subject: "🚗 Ride Sharing Notification", // Subject line
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 5px;">
        <h2 style="color: #333;">Hello!</h2>
        <p style="color: #555;">${content}</p>
        <p style="color: #555;">Thank you for using our service!</p>
        <footer style="margin-top: 20px; font-size: 12px; color: #888;">
          &copy; ${new Date().getFullYear()} Ride Sharing App. All rights reserved.
        </footer>
      </div>
    `, // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

// Function to send Telegram message
export const sendTelegram = async (
  chatId: string,
  content: string
): Promise<void> => {
  const message = `
    *🚗 Ride Sharing Notification*
    
    _Hello!_
    
    ${content}
    
    Thank you for choosing our service! 🚀
    
    If you have any questions, feel free to reach out to us.
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown", // Use Markdown for formatting
    });
    console.log(`Message sent to chat ID ${chatId}`);
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    throw new Error("Failed to send Telegram message");
  }
};
