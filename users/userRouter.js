const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Users = require('./user-model');
const validateUser = require('../auth/val-middleware')


router.post('/register', (req, res) => {
    let user = req.body;

    let hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    Users.add(user)
        .then(saved => {
        res.status(201).json(saved);
        })
        .catch(error => {
        res.status(500).json(error);
        });
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.test = "Added Some Data!"  
          req.session.username = username
          req.session.loggedIn = true
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.status(200).json({message: "logged out successfully"})
    })
  })

  router.get('/users', validateUser, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });





module.exports = router;