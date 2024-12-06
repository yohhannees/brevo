/*
  Warnings:

  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Earning` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Performance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Earning" DROP CONSTRAINT "Earning_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Performance" DROP CONSTRAINT "Performance_driverId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_driverId_fkey";

-- DropTable
DROP TABLE "Driver";

-- DropTable
DROP TABLE "Earning";

-- DropTable
DROP TABLE "Performance";

-- DropTable
DROP TABLE "Vehicle";

-- DropEnum
DROP TYPE "DriverStatus";

-- CreateTable
CREATE TABLE "EmailRecord" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailRecord_pkey" PRIMARY KEY ("id")
);
