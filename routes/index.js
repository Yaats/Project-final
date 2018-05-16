const express = require ('express');
const router = express.Router ();
const axios = require ('axios');

//  GET MOVIES

const moviesDb = axios.create ({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.API_MOVIES_KEY,
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
      // console.log ('ca marche!!!!!! 🚀');
      res.json (result.data);
    })
    .catch (err => {
      console.log ('this is the error WTF ERROR 🚧', err);
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

router.get ('/reco/movies', function (req, res, next) {
  if (!req.user) {
    const err = new Error ('Need to be logged in for recos');
    next (err);
    return;
  }

  moviesDb
    .get (`/discover/movie`, {
      params: {
        sort_by: 'vote_average.desc',
        sort_by: 'popularity.desc',
        with_genres: req.user.interestedIn.join ('|'),
      },
    })
    .then (result => {
      console.log ('trobien');
      res.json (result.data);
    })
    .catch (err => {
      console.log ('trobizaeazen');
      next (err);
    });
});

const eventsDb = axios.create ({
  baseURL: 'https://api.paris.fr/api/data/2.2/QueFaire',
  params: {
    token: process.env.API_EVENTPARIS_TOKEN,
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
