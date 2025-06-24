const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Feedback = require('./models/Feedback');

require('dotenv-safe').config();


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

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

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
