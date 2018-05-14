const express = require ('express');
const favEvrouter = express.Router ();
const Favorite = require ('../models/favorite-model');

favEvrouter.post ('/:category', (req, res, next) => {
  Favorite.create ({
    user: req.user._id,
    category: req.params.category,
    title: req.body.nom,
    o
  }).then (fav => {
    console.log(req.body.nom);
    res.json (fav);
  });
});


favEvrouter.get ('/billise', function (req, res, next) {
  Favorite.findById()
    .sort({createdAt: -1})
    .then(listFromDb => {
      res.json(listFromDb);
    })
});

module.exports = favEvrouter;
