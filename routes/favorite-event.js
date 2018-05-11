const express = require ('express');
const favEvrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favEvrouter.post ('/:category', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: req.params.category,
    title: req.body.nom,
  }).then (fav => {
    res.json (fav);
  });
});

module.exports = favEvrouter;
