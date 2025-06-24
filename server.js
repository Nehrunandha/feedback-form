const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Feedback = require('./models/Feedback'); // adjust path if needed

const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API route
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, batch, staff, feedback } = req.body;
    const newFeedback = new Feedback({ name, batch, staff, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully ✅' });
  } catch (err) {
    console.error('❌ Error saving feedback:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Wildcard route - must come last
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
