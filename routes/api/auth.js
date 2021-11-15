const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config'); // Use with jwt
const { check, validationResult } = require('express-validator');

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/auth
// @desc     Authecticate user and get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please input an email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // See if the user exist?
      let user = await User.findOne({ email: email }); //Find the same email

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      // Compare is password is match
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      // Create payload for JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Get JWT token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          // Return jsonwebtoken
          res.json({ token });
        }
      );
      // res.send('User registered');
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }

    // res.send('User route - validation success');
  }
);
module.exports = router;
