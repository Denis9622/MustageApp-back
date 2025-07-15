import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initMongoDB } from "./db/initMongoDB.js";
import tasksRouter from "./routes/tasks.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRouter);


const bootstrap = async () => {
  await initMongoDB();
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

bootstrap();
