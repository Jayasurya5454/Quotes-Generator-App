const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.get('/random', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json({ quote });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
