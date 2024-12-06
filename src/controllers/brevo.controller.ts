// src/controllers/brevo.controller.js
// @ts-ignore
import { Request, Response } from "express";
// @ts-ignore
import { sendWelcomeEmail } from "../services/brevo.service";

export const sendEmailController = async (req: Request, res: Response) => {
  const { fullname, country, email } = req.body;

  if (!fullname || !country || !email) {
    return res
      .status(400)
      .json({ error: "All fields (fullname, country, email) are required." });
  }

  try {
    await sendWelcomeEmail(fullname, country, email);
    return res
      .status(200)
      .json({ message: "Welcome email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send welcome email." });
  }
};
