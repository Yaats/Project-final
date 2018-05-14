const express = require ('express');
const favEvrouter = express.Router ();
const Favorite = require ('../models/favorite-model');
const User = require ('../models/user-model.js');

favEvrouter.post ('/', (req, res, next) => {
  console.log ('AAAAAAAAAAAAA', req.user);
  Favorite.create ({
    user: req.user._id,
    category: 'event',
    title: req.body.nom,
  }).then (fav => {
    console.log ('user showed in create favorite?', req.user);
    res.json (fav);
  });
});

favEvrouter.get ('/billise', function (req, res, next) {
  console.log ('user showed in favorites ?', req.user);
  Favorite.find ({user: req.user._id})
    .sort ({createdAt: -1})
    .then (listFromDb => {
      res.json (listFromDb);
    });
});

module.exports = favEvrouter;
