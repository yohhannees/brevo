import Brevo from "@getbrevo/brevo";

const defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new Brevo.TransactionalEmailsApi();

export const sendWelcomeEmail = async (fullname, country, email) => {
  const sendSmtpEmail = new Brevo.SendSmtpEmail({
    sender: { email: process.env.EMAIL_USER, name: "MyApp" },
    to: [{ email }],
    subject: "Welcome to MyApp!",
    htmlContent: `<html><body><h1>Hi ${fullname},</h1><p>Welcome to MyApp! We’re excited to have you join us from ${country}.</p><p>Best regards,<br>The MyApp Team</p></body></html>`,
  });

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};
