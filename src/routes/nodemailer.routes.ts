import { Router } from "express";
import { sendEmailController } from "../controllers/nodemailer.controller";

const router = Router();

router.post("/", sendEmailController);

export default router;
