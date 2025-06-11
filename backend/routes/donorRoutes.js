const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// POST: Register donor
router.post('/', async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Get all donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;