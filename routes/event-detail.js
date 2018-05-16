const express = require ('express');
const mongoose = require ('mongoose');
const eventrouter = express.Router ();
const axios = require ('axios');

//  GET EVENTS

const eventsDb = axios.create ({
  baseURL: 'https://api.paris.fr/api/data/2.0/QueFaire',
  params: {
    token: process.env.API_EVENTPARIS_TOKEN,
  },
});

// GET /:eventId
eventrouter.get ('/:eventId', (req, res, next) => {
  eventsDb
    .get (`/get_activity/`, {params: {id: req.params.eventId}})
    .then (event => {
      if (!event) {
        next ();
        return;
      }
      res.json (event.data);
    })
    .catch (err => {
      next (err);
    });
});

module.exports = eventrouter;
