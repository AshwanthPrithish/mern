const express = require("express");
const notes = require("./data/notes");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id/", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  res.json(note);
});

app.get("/api/notes/:id/:id2", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send("1");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server started on Port ${PORT}`));
