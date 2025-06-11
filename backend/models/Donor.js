const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  contact: String,
  city: String,
  email: String,
  gender: String,
  age: Number
});

module.exports = mongoose.model('Donor', donorSchema);