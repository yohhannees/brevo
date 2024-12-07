// path/to/emailRecordController.ts
import { Request, Response } from "express";
import { getAllEmailRecords } from "../services/user.service";

export const fetchAllEmailRecords = async (req: Request, res: Response) => {
  try {
    const emailRecords = await getAllEmailRecords();
    res.status(200).json(emailRecords);
  } catch (error) {
    console.error("Error fetching email records:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
