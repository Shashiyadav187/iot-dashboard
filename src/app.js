import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import ErrorPage from './components/ErrorPage';

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(favicon(path.join(__dirname, 'static', 'img', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>)
      } else {
        const stackTrace = (req.app.get('env') === 'development') ? 
                           JSON.stringify(err) : ''

        markup = renderToString(<ErrorPage stackTrace={stackTrace} />)
        res.status(404)
      }

      return res.render('index', { title: "hello", markup })
    }
  );
});

export default app
