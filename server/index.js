import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import loofeRoutes from "./routes/loofeRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/loofe", loofeRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from LOOF-E AI!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server running on port:8080"));
  } catch (err) {
    console.log(err);
  }
};

startServer();
