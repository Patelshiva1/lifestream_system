const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/Request');

// POST: Request blood
router.post('/', async (req, res) => {
  try {
    const request = new BloodRequest(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Get all blood requests
router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
