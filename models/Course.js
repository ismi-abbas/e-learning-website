const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Array of courses uploaded
const CourseSchema = new Schema({
 title: { type: String, required: true },
 desc: { type: String },
 url: { type: String, required: true },
 imgSrc: { type: String, required: true },
 instructor: { type: String, required: true },
 duration: { type: String, required: true },
 rating: { type: Number, required: true },
 level: { type: String, required: true },
 date: { type: Date, default: Date.now },
})
// Export module then set the model
module.exports = Course = mongoose.model('course', CourseSchema)
