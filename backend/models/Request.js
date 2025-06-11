const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  contact: String,
  city: String,
  email: String,
  reason: String
});

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);