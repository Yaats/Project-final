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

router.get ('/movies', function (req, res, next) {
  moviesDb
    .get ('/discover/movie/', {
      params: {
        sort_by: 'vote_average.desc',
        sort_by: 'popularity.desc',
      },
    })
    .then (result => {
      console.log ('ca marche!!!!!! 🚀');
      res.json (result.data);
      // console.log (result.data);
    })
    .catch (err => {
      console.log ('this is the error WTF ERROR 🚧');
      // console.log (err);
      next (err);
    });
});

// List of series in home page sorted by popularity

router.get ('/series', function (req, res, next) {
  moviesDb
    .get ('/tv/popular', {
      params: {
        sort_by: 'vote_average.desc',
        sort_by: 'popularity.desc',
      },
    })
    .then (result => {
      res.json (result.data);
    })
    .catch (err => {
      next (err);
    });
});

// get movie bby genre 

router.get ('/reco', function (req, res, next) {

  // var aleatoire = Math.random(Math.floor(req.user.genre.length))
  moviesDb
  .get (`/genre/35/movies`, {
    params: {
      sort_by: 'vote_average.desc',
      sort_by: 'popularity.desc',
    },
  })
  .then (result => {
    console.log('trobien');
      res.json (result.data);
    })
    .catch (err => {
      console.log('trobizaeazen');
      next (err);
    });
});

const eventsDb = axios.create ({
  baseURL: 'https://api.paris.fr/api/data/2.2/QueFaire',
  params: {
    token: 'e971b12cfc1c94f978f2ff0d6f2d726ad955dbe87161cf4c3e98cb78b470c23f',
  },
});

router.get ('/events', function (req, res, next) {
  eventsDb
    .get ('/get_events/', {
      params: {
        categories: '',
        tags: '',
        start: 0,
        end: '',
        offset: '',
        limit: '',
      },
    })
    .then (result => {
      res.json (result.data);
    })
    .catch (err => {
      console.log ('WTF ERROR 🥗');
      next (err);
    });
});

module.exports = router;
