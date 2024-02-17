const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const hbs = require("hbs");

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const connectToDatabase = require('./config/mongoose');

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./views/partials");
hbs.registerPartials(templatePath);
app.set("view engine", "hbs");

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));

// Routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);

// 404 Route
app.get('*', (req, res) => {
  res.render("404");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
