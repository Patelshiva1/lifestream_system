// backend/app.js
const express = require('express');
const cors = require('cors');
const donorRoutes = require('./routes/donorRoutes');
const requestRoutes = require('./routes/requestRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/donors', donorRoutes);
app.use('/api/requests', requestRoutes);

module.exports = app;
