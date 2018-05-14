const express = require ('express');
const favMovrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favMovrouter.post ('/:category', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: req.params.category,
    title: req.body.title,
    details: req.body
  }).then (fav => {
    res.json (fav);
  });
});

module.exports = favMovrouter;
