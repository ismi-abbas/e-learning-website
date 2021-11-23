// This schema is for uploaded video
const mongoose = require('mongoose');
// Uploaded video schema - contain all videos uploaded
const UploadSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
  },
  video: {
    type: String,
    ref: 'course',
  },
});

module.exports = Upload = mongoose.model('upload', UploadSchema);
