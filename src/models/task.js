import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["done", "undone"], default: "undone" },
});

const Task = mongoose.model("Task", taskSchema, "tasks");

export default Task;
