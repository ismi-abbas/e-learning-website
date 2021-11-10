// ============This is the USERS REST API ==============
const express = require('express');
const gravatar = require('gravatar'); // Avatar from email
const bcrypt = require('bcryptjs'); // Encrypting password
const router = express.Router(); // Routing using express
const { check, validationResult } = require('express-validator');

const User = require('../models/User'); // Bringing the models

// @route   POST api/user
// @desc    Register user to databases
// @access  Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please input an email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // See if the user exist?

      let user = await User.findOne({ email: email }); //Find the same email
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });
      // Encrypt password using bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      res.send('User registered');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }

    res.send('User route - validation success');
  }
);

module.exports = router;
