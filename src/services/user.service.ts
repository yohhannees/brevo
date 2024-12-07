// path/to/emailRecordService.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEmailRecords = async () => {
  return await prisma.emailRecord.findMany();
};
