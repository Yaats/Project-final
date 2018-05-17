const express = require ('express');
const mongoose = require ('mongoose');
const bookrouter = express.Router ();
const axios = require ('axios');
var books = require ('google-books-search');

//  GET BOOKS

// GET /:booktId

bookrouter.get ('/:bookTitle', (req, res, next) => {
  var options = {
    key: process.env.API_BOOK_KEY,
    field: 'isbn',
    offset: 0,
    type: 'books',
    order: 'relevance',
    lang: 'en',
    limit: '1',
  };

  var id = req.params.bookTitle;

  books.search (id, options, function (error, results) {
    if (!error) {
      res.json (results);
    } else {
      console.log (error);
    }
  });
});
module.exports = bookrouter;
