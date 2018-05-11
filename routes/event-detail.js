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
      console.log(event);
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

// https://api.paris.fr/api/data/2.0/QueFaire/get_activity/?token=e971b12cfc1c94f978f2ff0d6f2d726ad955dbe87161cf4c3e98cb78b470c23f&id=50840

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import "rxjs/operator/toPromise";

// @Injectable()
// export class EventService {
//   constructor(private apiEvent: HttpClient) {
//   }

//   getListEvent() {
//     console.log('lourd')
//     return this.apiEvent.get("http://localhost:3000/events").toPromise();
//   }

//   getEventDetails(eventId) {
//     return this.apiEvent
//       .get(`http://localhost:3000/event-detail/${eventId}`)
//       .toPromise();
//   }
// }

// export class Event {
//   html: string;
//   url: string;
//   title: string;
//   realDateStart: string;
//   // vote_count: number;
//   // id: number;
//   // title: string;
//   // popularity: number;
//   // poster_path: string;
//   // release_date: string;
//   // ? means it's not required to have one
//   // createdAt?: Date;
//   // updatedAd?: Date;
// }
