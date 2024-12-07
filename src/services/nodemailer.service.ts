import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const socialLinks = {
  instagram: "https://www.instagram.com/soundrigmusic?igsh=dzJkdHhkNDVma20z",
  telegram: "https://t.me/soundrigofficial",
  twitter: "https://x.com/soundrigmusic?s=21",
  tiktok: "https://www.tiktok.com/@soundrigmusic?_t=8rOCYWhCcid&_r=1",
  facebook: "https://www.facebook.com/SoundRigOfficial?mibextid=LQQJ4d",
  website: "https://soundrig.io",
};

export const sendWelcomeEmail = async (
  fullname: string,
  country: string,
  email: string
) => {
  try {
    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email content
    const mailOptions = {
      from: `"SoundRig" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to SoundRig!",
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SoundRig</title>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            color: #fff;
            background-color: #800080; /* Purple background */
            padding: 30px;
            border-radius: 15px;
          }
          .header {
            text-align: center;
            padding: 20px;
          }
          .logo {
            width: 150px;
            margin-bottom: 20px;
          }
          h1 {
            color: #FFD700; /* Gold color for the title */
            font-size: 28px;
            margin-bottom: 20px;
          }
          .content {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 10px;
            line-height: 1.6;
          }
          .feature-box {
            background: #993399; /* Slightly lighter purple */
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #FFD700;
            border-radius: 5px;
          }
          .cta-button {
            display: inline-block;
            background: #FFD700;
            color: #800080;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            margin: 20px 0;
            font-weight: bold;
          }
          .social-links {
            text-align: center;
            margin: 30px 0;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
          }
          .social-icon {
            display: inline-block;
            margin: 0 15px;
            text-decoration: none;
          }
          .social-icon img {
            width: 32px;
            height: 32px;
            transition: opacity 0.3s;
          }
          .social-icon:hover img {
            opacity: 0.8;
          }
          .footer {
            text-align: center;
            color: #fff;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="https://soundrig.io/logo.png" 
                 alt="SoundRig Logo" 
                 class="logo">
            <h1>Welcome to SoundRig, ${fullname}! 🎵</h1>
          </div>
          
          <div class="content">
            <p>Hey ${fullname},</p>
            <p>Get ready to experience music like never before!</p>
            <p>We are thrilled to welcome you to the SOUNDRIG community - a movement that is reshaping the music industry by empowering artists and giving fans a deeper connection to the music they love.</p>
            
            <div class="feature-box">
              <h3>🎶 Here’s what you can expect as a member of the SOUNDRIG community:</h3>
              <ul>
                <li><strong>Discover new artists:</strong> Unearth hidden gems and support rising talents on the SOUNDRIG Launchpad.</li>
                <li><strong>Own the experience:</strong> Collect TUN3Z that evolve with the artist's career and receive continuous bonus content directly from the artist.</li>
                <li><strong>Exclusive access:</strong> Unlock exclusive content, behind-the-scenes footage, and unreleased tracks with TUN3Z.</li>
                <li><strong>Connect and engage:</strong> Become part of your favorite artist's community and experience music in a whole new way.</li>
              </ul>
            </div>

            <div class="feature-box">
              <h3>🚀 SoundRig Ecosystem:</h3>
              <p>As an early adopter, you have positioned yourself for our founding members' airdrop. More information to come soon.</p>
            </div>

            <center>
              <a href="${socialLinks.website}" class="cta-button">
                Login to Account
              </a>
            </center>

            <p>Join the conversation:</p>
            <p>Stay up-to-date on the latest platform updates and tech developments by following us on Telegram and X.</p>
            <p>Get exclusive artist features and previews on Instagram, Facebook, and TikTok.</p>
          </div>

          <div class="social-links">
            <h3 style="color: #FFD700;">Join Our Community</h3>
            
            <a href="${socialLinks.instagram}" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram">
            </a>

            <a href="${socialLinks.telegram}" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram">
            </a>

            <a href="${socialLinks.twitter}" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X (Twitter)">
            </a>

            <a href="${socialLinks.tiktok}" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok">
            </a>

            <a href="${socialLinks.facebook}" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook">
            </a>
          </div>

          <div class="footer">
            <p>© ${new Date().getFullYear()} SoundRig. All rights reserved.</p>
            <p>You're receiving this email because you signed up for SoundRig.</p>
            <small>Questions? Contact us at <a href="mailto:support@soundrig.io">support@soundrig.io</a></small>
          </div>
        </div>
      </body>
    </html>`,
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
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
