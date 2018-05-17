const express = require ('express');
const favBrouter = express.Router ();
const Favorite = require ('../models/favorite-model');
const User = require ('../models/user-model.js');

favBrouter.post ('/', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: 'book',
    title: req.body.title,
    details: req.body,
  }).then (fav => {
    res.json (fav);
  });
});

// Delete from favroite list
favBrouter.delete ('/billise/:itemId', function (req, res, next) {
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

module.exports = favBrouter;
