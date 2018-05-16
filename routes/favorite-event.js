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

// get list of favorites

favEvrouter.get ('/billise', function (req, res, next) {
  Favorite.find ().sort ({createdAt: -1}).then (listFromDb => {
    res.json (listFromDb);
  });
});

// Delete from favroite list
favEvrouter.delete ('/billise/:itemId', function (req, res, next) {
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

module.exports = favEvrouter;
