import { Router } from "express";
import { sendEmailController } from "../controllers/brevo.controller";

const router = Router();

// Define the route for sending emails
router.post("/", sendEmailController);

export default router;
