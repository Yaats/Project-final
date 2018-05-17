const express = require ('express');
const router = express.Router ();
const axios = require ('axios');
var books = require ('google-books-search');

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
      res.json (result.data);
    })
    .catch (err => {
      console.log (err);
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

// get reco movie by genre

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

// get reco serie by genre

router.get ('/reco/series', function (req, res, next) {
  if (!req.user) {
    const err = new Error ('Need to be logged in for recos');
    next (err);
    return;
  }

  moviesDb
    .get (`/discover/tv`, {
      params: {
        sort_by: 'vote_average.desc',
        sort_by: 'popularity.desc',
        with_genres: req.user.interestedInSerie.join ('|'),
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

// get list of events

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

// get reco events by genres

router.get ('/reco/events', function (req, res, next) {
  if (!req.user) {
    const err = new Error ('Need to be logged in for recos');
    next (err);
    return;
  }

  eventsDb
    .get (`/get_events/`, {
      params: {
        categories: req.user.interestedInEvent.join ('|'),
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
      console.log ('trobizaeazen les events');
      next (err);
    });
});

//  get lists of books

router.get ('/books', (req, res, next) => {
  var options = {
    key: process.env.API_BOOK_KEY,
    field: 'subject',
    offset: 0,
    type: 'books',
    order: 'newest',
    lang: 'en',
    limit: '20',
  };

  books.search ('fiction', options, function (error, results) {
    if (!error) {
      res.json (results);
    } else {
      console.log (error);
    }
  });
});

//  get reco books

router.get ('/reco/books', (req, res, next) => {
  if (!req.user) {
    const err = new Error ('Need to be logged in for recos');
    next (err);
    return;
  }
  // console.log ('voici le req', req.user.interestedInBook);

  var options = {
    key: process.env.API_BOOK_KEY,
    field: 'subject',
    offset: 0,
    type: 'books',
    order: 'newest',
    lang: 'en',
    limit: '20',
  };

  var id = req.user.interestedInBook.join ('|');

  books.search (id, options, function (error, results) {
    if (!error) {
      res.json (results);
    } else {
      console.log (error);
    }
  });
});

module.exports = router;

// .then (result => {
//   var reco = []
//   result.data.forEach(element => {
//     if (element.evenements.category.lv10 == "Festivités"){
//       reco.push(element)
//     }
//   });
//   console.log ('trobien');
//   res.json (reco);
// })
