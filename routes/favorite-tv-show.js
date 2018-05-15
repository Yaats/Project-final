const express = require ('express');
const favSrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favSrouter.post ('/', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: 'tv-show',
    title: req.body.name,
    details: req.body,
  }).then (fav => {
    res.json (fav);
  });
});

module.exports = favSrouter;
