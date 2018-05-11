const express = require ('express');
const mongoose = require ('mongoose');
const eventrouter = express.Router ();
const axios = require ('axios');

//  GET EVENTS

const eventsDb = axios.create ({
  baseURL: 'https://api.paris.fr/api/data/2.0/QueFaire',
  params: {
    token: 'e971b12cfc1c94f978f2ff0d6f2d726ad955dbe87161cf4c3e98cb78b470c23f'
  },
});

// GET /:eventId
eventrouter.get ('/:eventId', (req, res, next) => {
  eventsDb
    .get(`/get_activity/`, { params: { id: req.params.eventId } })
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