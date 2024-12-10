import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("Successfully connected with MongoDB");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("ERROR ON CONNECTION MONGODB", err));
