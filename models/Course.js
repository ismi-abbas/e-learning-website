const mongoose = require('mongoose');
// Use mongoose.schema to create collections(table) on mongodb
const CourseSchema = new mongoose.Schema({
  info: {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    dateAdded: {
      type: Date(),
    },
    price: {
      type: Number,
      required: true,
    },
  },
  date: {
    type: Date(),
    default: Date.now,
  },
});

// Export module then set the model
module.exports = Course = mongoose.model('course', CourseSchema);
