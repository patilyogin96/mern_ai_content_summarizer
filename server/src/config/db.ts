import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {

    const uri: string = process.env.MONGO_CONNECTION || ""
    console.log("uri->", uri);
    

    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected Successfully...");
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ MongoDB Connection Error:", error.message);
    } else {
      console.error("❌ Unknown MongoDB Connection Error");
    }
    process.exit(1);
  }
};

export default connectDB;