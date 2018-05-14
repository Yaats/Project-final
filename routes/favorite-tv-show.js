const express = require ('express');
const favSrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favSrouter.post ('/', (req, res, next) => {
  console.log ('CCCCC', req.user);
  Favorite.create ({
    user: req.user._id,
    category: 'tv-show',
    title: req.body.name,
    details: req.body,
  }).then (fav => {
    res.json (fav);
  });
});

favSrouter.get ('/billise', function (req, res, next) {
  console.log ('user showed in favorites ?', req.user);
  Favorite.find ({user: req.user._id})
    .sort ({createdAt: -1})
    .then (listFromDb => {
      res.json (listFromDb);
    });
});

module.exports = favSrouter;
