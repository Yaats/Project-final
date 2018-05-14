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

// favMovrouter.get ('/billise', function (req, res, next) {
//   console.log ('user showed in favorites ?', req.user);
//   Favorite.find ({user: req.user._id})
//     .sort ({createdAt: -1})
//     .then (listFromDb => {
//       res.json (listFromDb);
//     });
// });

module.exports = favMovrouter;
