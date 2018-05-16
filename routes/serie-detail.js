const express = require ('express');
const mongoose = require ('mongoose');
const routerS = express.Router ();
const axios = require ('axios');
const User = require ('../models/user-model');

const moviesDb = axios.create ({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.API_MOVIES_KEY,
    include_adult: false,
  },
});

// GET /:serieId
routerS.get ('/:serieId', (req, res, next) => {
  moviesDb
    .get (`/tv/${req.params.serieId}`)
    .then (serie => {
      if (!serie) {
        next ();
        return;
      }
      res.json (serie.data);
    })
    .catch (err => {
      next (err);
    });
});

module.exports = routerS;
