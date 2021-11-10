// This middleware is use to protect the JWT
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //   Get token from header
  const token = req.header('x-auth-token');

  //   Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token authorization denied' });
  }
  //   Verify token
  try {
    //   Decode the JWT
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Take the decoded request
    req.user = decoded.user;
    next();
  } catch (err) {
    // Return if token invalid
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
