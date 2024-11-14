import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import pollRoutes from "./routes/pollRoute.js";
import voteRoutes from "./routes/voteRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/polls", pollRoutes);
app.use("/api/votes", voteRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

export { app };
