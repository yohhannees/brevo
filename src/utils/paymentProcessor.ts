// src/utils/paymentProcessor.ts
import { Transaction } from "../types/index";

export const processPayment = async (
  userId: string,
  amount: number,
  paymentMethod: string
): Promise<Transaction> => {
  // Simulate payment processing logic
  const transaction: Transaction = {
    id: generateTransactionId(),
    userId,
    amount,
    paymentMethod,
    status: "completed", // Assume payment is successful for this example
    createdAt: new Date(),
  };
  return transaction;
};

const generateTransactionId = (): string => {
  return Math.random().toString(36).substring(2, 15); // Simple ID generation
};
