require ('dotenv').config ();

const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const express = require ('express');
const favicon = require ('serve-favicon');
const hbs = require ('hbs');
const mongoose = require ('mongoose');
const logger = require ('morgan');
const path = require ('path');
const cors = require ('cors');

const session = require ('express-session');
const MongoStore = require ('connect-mongo') (session);
const flash = require ('connect-flash');

mongoose.Promise = Promise;
mongoose
  .connect (process.env.MONGODB_URI, {useMongoClient: true})
  .then (() => {
    console.log ('Connected to Mongo!');
  })
  .catch (err => {
    console.error ('Error connecting to mongo', err);
  });

const app_name = require ('./package.json').name;
const debug = require ('debug') (
  `${app_name}:${path.basename (__filename).split ('.')[0]}`
);

const app = express ();

// Middleware Setup
app.use (logger ('dev'));
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: false}));
app.use (cookieParser ());

// Express View engine setup

app.use (
  require ('node-sass-middleware') ({
    src: path.join (__dirname, 'public'),
    dest: path.join (__dirname, 'public'),
    sourceMap: true,
  })
);

app.use (express.static (path.join (__dirname, 'public')));
app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine', 'hbs');
app.use (favicon (path.join (__dirname, 'public', 'images', 'favicon.ico')));
app.use (
  cors ({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

hbs.registerHelper ('ifUndefined', (value, options) => {
  if (arguments.length < 2)
    throw new Error ('Handlebars Helper ifUndefined needs 1 parameter');
  if (typeof value !== undefined) {
    return options.inverse (this);
  } else {
    return options.fn (this);
  }
});

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// Enable authentication using session + passport
app.use (
  session ({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore ({mongooseConnection: mongoose.connection}),
  })
);

app.use (flash ());
require ('./passport') (app);

app.use ((req, res, next) => {
  next ();
});
const index = require ('./routes/index');
app.use ('/', index);

const authRoutes = require ('./routes/auth');
app.use ('/api', authRoutes);

const router = require ('./routes/movie-detail.js');
app.use ('/movie-detail', router);

const routerS = require ('./routes/serie-detail.js');
app.use ('/serie-detail', routerS);

const searchRouter = require ('./routes/search.js');
app.use ('/search', searchRouter);

const eventrouter = require ('./routes/event-detail.js');
app.use ('/event-detail', eventrouter);

const bookrouter = require ('./routes/book-detail.js');
app.use ('/book-detail', bookrouter);

const aboutRouter = require ('./routes/about-us.js');
app.use ('/about-us', aboutRouter);

const favMovrouter = require ('./routes/favorite-movie.js');
app.use ('/favorite-event/movie', favMovrouter);

const favSrouter = require ('./routes/favorite-tv-show.js');
app.use ('/favorite-event/tv-show', favSrouter);

const favEvrouter = require ('./routes/favorite-event.js');
app.use ('/favorite-event/event', favEvrouter);

const favBrouter = require ('./routes/favorite-book.js');
app.use ('/favorite-event/book', favBrouter);

module.exports = app;

//  LORS DU DEPLOIEMENT !!!

app.use ((req, res, next) => {
  res.sendFile (__dirname + '/pulic/index.html');
});
