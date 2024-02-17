const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

router.get('/', (req, res) => {
  res.render('app');
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).send('<h1>User not found</h1>');
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.render('index.hbs');
    } else {
      res.send('Invalid password');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
