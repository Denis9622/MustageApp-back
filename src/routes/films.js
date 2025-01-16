import express from "express";
import Film from "../models/film.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const films = await Film.find({});
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Фильм не найден" });
    }
    res.json(film);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.params.id); 
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFilm) {
      return res.status(404).json({ message: "Фильм не найден" });
    }
    res.json(updatedFilm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedFilm = await Film.findByIdAndDelete(req.params.id);
    if (!deletedFilm) {
      return res.status(404).json({ message: "Фильм не найден" });
    }
    res.json({ message: "Фильм успешно удален" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id/favorite", async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ message: "Фильм не найден" });
    }
    film.isFavorite = !film.isFavorite;
    await film.save();
    res.json(film);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
