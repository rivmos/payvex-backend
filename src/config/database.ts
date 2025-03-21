import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const connectDb = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (err) {
    console.log("error connecting to db", err);
    process.exit(1);
  }
};

export default connectDb;
