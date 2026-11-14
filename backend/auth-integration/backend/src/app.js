import express from "express";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/auth", authRouter);

export default app;
