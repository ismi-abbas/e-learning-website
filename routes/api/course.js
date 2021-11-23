const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const Upload = require('../../models/Upload');
const Course = require('../../models/Course');

// @route    POST api/course
// @desc     Create a course
// @access   Private
router.post(
  '/',
  [
    auth,
    check('title', 'Title is required').not().isEmpty(),
    check('desc', 'Desc is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errros: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newCourse = new Course({
        uploadedBy: user.name,
        user: req.user.id,
        title: req.body.title,
        desc: req.body.desc,
        video: req.body.files[0],
      });

      const course = await newCourse.save();

      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/courses
// @desc     Create all course
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const courses = await Course.find().sort({ date: -1 });
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/course/:id
// @desc     Create specific course
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(404).json({ msg: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      res.status(404).json({ msg: 'Course not found' });
    }
    res.status(500).send('Server Error');
  }
});
// @route    DELETE api/course
// @desc     Delete a course by id
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(404).json({ msg: 'Course not found' });
    }

    // Check user
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await course.remove();

    res.json({ msg: 'Post Removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      res.status(404).json({ msg: 'Course not found' });
    }

    res.status(500).send('Server Error');
  }
});
module.exports = router;
