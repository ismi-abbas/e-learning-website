const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Array of courses uploaded
const CourseSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  uploadedBy: {
    type: String,
  },
  courseVideo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'upload',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Export module then set the model
module.exports = Course = mongoose.model('course', CourseSchema);
