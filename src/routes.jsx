'use strict'

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import {App, ErrorPage, IndexPage} from './components/master'

const routes = (
  <Route path='/' component={App} >
    <IndexRoute component={IndexPage} />
    <Route path='*' component={ErrorPage} />
  </Route>
)

export default routes