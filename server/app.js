const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("DevVerse AI API Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});