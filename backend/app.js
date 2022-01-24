const express = require("express");
const mongoose = require("mongoose");
const sauceRoute = require("./routes/sauce");
const userRoute = require("./routes/user");
const path = require("path");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Monza:tAOZSJ3TBh5YQgDU@cluster0.a2dzo.mongodb.net/P6Database?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", sauceRoute);
app.use("/api/auth", userRoute);

module.exports = app;
