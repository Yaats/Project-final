const express = require ('express');
const favSrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favSrouter.post ('/:category', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: req.params.category,
    title: req.body.name,
  }).then (fav => {
    res.json (fav);
  });
});

module.exports = favSrouter;
