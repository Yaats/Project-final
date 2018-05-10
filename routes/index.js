const express = require ('express');
const router = express.Router ();
const axios = require ('axios');

//  GET MOVIES

const moviesDb = axios.create ({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3d60d443da666373611cdcdb9db60537',
    include_adult: false,
  },
});

// List of movies in home page sorted by vote_count.desc

router.get ('/', function (req, res, next) {
  moviesDb
    .get ('/discover/movie/', {
      params: {
        sort_by: 'vote_count.desc',
      },
    })
    .then (result => {
      console.log ('ca marche!!!!!! 🚀');
      res.json (result.data);
      // console.log (result.data);
    })
    .catch (err => {
      console.log ('WTF ERROR 🚧');
      // console.log (err);
      next (err);
    });
});

// details movie page

// router.get ('/:id', function (req, res, next) {
//   moviesDb
//     .get (`/movie/${req.params.id}`)
//     .then (response => {
//       res.json (response.data);
//     })
//     .catch (err => {
//       next (err);
//     });
// });

module.exports = router;
