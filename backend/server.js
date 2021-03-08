require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// mongoDB connection
connectDB();

const app = express();

// we are starting to listen requests to port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));