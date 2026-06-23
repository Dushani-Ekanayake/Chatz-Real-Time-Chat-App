import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
// index.js main file that initializes the database connection and starts the server and .env file that contains the MONGODB_URI variable with the 
// connection string to the MongoDB database.