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

// Delete from favroite list
favSrouter.delete ('/billise/:itemId', function (req, res, next) {
  console.log ('arrive-til en backnd ?');
  Favorite.findByIdAndRemove (req.params.itemId)
    .then (result => {
      if (!result) {
        next ();
        return;
      }
      res.json (result);
    })
    .catch (err => {
      next (err);
    });
});

module.exports = favSrouter;
