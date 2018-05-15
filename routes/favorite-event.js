const express = require ('express');
const favEvrouter = express.Router ();
const Favorite = require ('../models/favorite-model');
const User = require ('../models/user-model.js');

favEvrouter.post ('/', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: 'event',
    title: req.body.nom,
    details: req.body,
  }).then (fav => {
    res.json (fav);
  });
});

favEvrouter.get ('/billise', function (req, res, next) {
  console.log ('user showed in favorites ?', req.user);
  Favorite.find ().sort ({createdAt: -1}).then (listFromDb => {
    res.json (listFromDb);
  });
});

favEvrouter.post ('/billise/:_id', function (req, res, next) {
  console.log ('arrive-til en backnd ?');
  Favorite.findByIdAndRemove (req.params._id).then (() => {}).catch (err => {
    next (err);
  });
});

module.exports = favEvrouter;
