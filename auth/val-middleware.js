const bcrypt = require('bcrypt');
const Users = require('../users/user-model');

module.exports = function validateUser (req, res, next) {
    let { username, password, loggedIn } = req.session;

    // if (req.session.loggedIn)

    if (req.session && loggedIn) {
        next()
    } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
  }