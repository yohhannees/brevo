// path/to/emailRecordRoutes.ts
import { Router } from "express";
import { fetchAllEmailRecords } from "../controllers/users.controller";

const router = Router();

// Route to fetch all email records
router.get("/", fetchAllEmailRecords);

export default router;
