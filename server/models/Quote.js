const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
