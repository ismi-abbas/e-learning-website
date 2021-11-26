const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
 // Profile info referenced by user model
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user',
 },
 course: [
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'course',
  },
 ],
 // Current employment status
 status: {
  type: String,
  required: true,
 },
 //   Number of students registered
 students: {
  type: Number,
 },
 // Number of review
 review: {
  type: Number,
 },
 //   Bio of the instructor
 bio: {
  type: String,
 },
 social: {
  twitter: {
   type: String,
  },
  facebook: {
   type: String,
  },
  instagram: {
   type: String,
  },
  linkedin: {
   type: String,
  },
 },
 date: {
  type: Date,
  default: Date.now,
 },
})

// Export module then set the model
module.exports = Profile = mongoose.model('profile', ProfileSchema)
