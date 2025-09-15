import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import usersRouter from "./routes/userRoutes"
import dotenv from "dotenv";
dotenv.config();



const app = express();

connectDB();

// ✅ Allow all origins (not recommended for production)
app.use(cors());

// Or configure specific origin(s)
// app.use(cors({
//   origin: "http://localhost:3000", // React frontend
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true // if using cookies / auth headers
// }));

app.use('/api/users', usersRouter);

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.send("Node server connection done and healthy");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
