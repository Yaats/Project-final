const express = require ('express');
const favMovrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favMovrouter.post ('/', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: 'movie',
    title: req.body.title,
    details: req.body,
  }).then (fav => {
    res.json (fav);
  });
});

// Delete from favroite list
favMovrouter.delete ('/billise/:itemId', function (req, res, next) {
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

module.exports = favMovrouter;
