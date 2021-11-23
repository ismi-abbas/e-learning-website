const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Array of courses uploaded
const CourseSchema = new Schema({
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user',
 },
 title: {
  type: String,
  required: true,
 },
 desc: {
  type: String,
 },
 uploadedBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user',
 },
 courseVideo: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'uploads',
 },
 date: {
  type: Date,
  default: Date.now,
 },
});
// Export module then set the model
module.exports = Course = mongoose.model('course', CourseSchema);
