import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initMongoDB } from "./db/initMongoDB.js";
import filmsRouter from "./routes/films.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/films", filmsRouter); 


const bootstrap = async () => {
  await initMongoDB();
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });
};

bootstrap();
