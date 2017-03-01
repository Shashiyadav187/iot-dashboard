'use strict'

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/master/App'
import ErrorPage from './components/master/ErrorPage'
import IndexPage from './components/master/IndexPage'

const routes = (
  <Route path='/' component={App} >
    <IndexRoute component={IndexPage} />
    <Route path='*' component={ErrorPage} />
  </Route>
)

export default routes