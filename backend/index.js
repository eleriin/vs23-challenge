const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "meals.json"); // <-- MUUTUS: tee faili juurde
    const data = await fs.readFile(filePath, "utf-8");            // <-- MUUTUS: loe failist
    const meals = JSON.parse(data);                               // <-- MUUTUS: parsime JSON
    res.json(meals);
  } catch (error) {
    console.error("Failed to read meals.json:", error);
    res.status(500).json({ error: "Unable to load meals data" }); // <-- MUUTUS: errorihaldus
  }
});


app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001);
