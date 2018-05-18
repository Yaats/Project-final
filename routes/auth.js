const express = require ('express');
const passport = require ('passport');
const authRoutes = express.Router ();
const User = require ('../models/user-model');

// Bcrypt to encrypt passwords
const bcrypt = require ('bcrypt');
const bcryptSalt = 10;

authRoutes.post ('/signup', (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const interestedIn = req.body.interestedIn;
  const interestedInSerie = req.body.interestedInSerie;
  const interestedInEvent = req.body.interestedInEvent;
  const interestedInBook = req.body.interestedInBook;

  if (username === '' || password === '') {
    const err = new Error ('Username or password invalid');
    err.status = 400;
    next (err);
    return;
  }
  User.findOne ({username}, 'username', (err, user) => {
    if (user !== null) {
      const err = new Error ('The username already exists');
      err.status = 400;
      next (err);
      return;
    }

    const salt = bcrypt.genSaltSync (bcryptSalt);
    const hashPass = bcrypt.hashSync (password, salt);

    const newUser = new User ({
      username,
      email,
      password: hashPass,
      interestedIn,
      interestedInSerie,
      interestedInEvent,
      interestedInBook,
    });

    newUser.save (err => {
      if (err) {
        next (err);
      } else {
        req.login (newUser, () => {
          //  clear the password before sending (it's a security risk)
          newUser.password = undefined;
          res.json ({userInfo: newUser});
        });
      }
    });
  });
});

authRoutes.post ('/login', (req, res, next) => {
  const myFunction = passport.authenticate ('local', (err, theUser) => {
    if (err) {
      next (err);
      return;
    }

    if (!theUser) {
      const err = new Error ('Log in failed!');
      err.status = 400;
      next (err);
      return;
    }

    req.login (theUser, () => {
      //  clear the password before sending (it's a security risk)
      theUser.password = undefined;
      res.json ({userInfo: theUser});
    });
  });

  myFunction (req, res, next);
});

authRoutes.get ('/logout', (req, res) => {
  req.logout ();
  res.json ({userInfo: null});
});

authRoutes.get ('/checklogin', (req, res, next) => {
  if (req.user) {
    req.user.password = undefined;
  }
  res.json ({userInfo: req.user});
  // next (err);
});

// EDIT PROFILE

authRoutes.put ('/edit', (req, res, next) => {
  // console.log ('edit backend ready');
  User.findByIdAndUpdate (req.user._id, req.body, (err, user) => {
    if (err) return res.status (500).send (err);
    return res.send (user);
  });
});

module.exports = authRoutes;
