// ============ For MongoDB Connection ==============
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Connecting database function using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
//Export this module into others
module.exports = connectDB;
