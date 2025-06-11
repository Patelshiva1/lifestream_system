const express = require('express');
const connectDB = require('./db');
const donorRoutes = require('./routes/donorRoutes');
const requestRoutes = require('./routes/requestRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // allow requests from frontend (e.g. React)
app.use(express.json()); // parse JSON request bodies

// Simple root route for confirmation
app.get('/', (req, res) => {
  res.send('Welcome to the Blood Bank API');
});

// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/requests', requestRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});