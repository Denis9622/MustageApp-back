import express from "express";
import Film from "../models/film.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const films = await Film.find({});
    console.log("Фильмы из MongoDB:", films);
    res.json(films);
  } catch (error) {
    console.error("Ошибка при получении фильмов:", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Фильм не найден" });
    }
    console.log("Фильм из MongoDB:", film);
    res.json(film);
  } catch (error) {
    console.error("Ошибка при получении фильма:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
