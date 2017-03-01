'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

//TODO: fix import {AppRoutes} from './components/master doesn't work
import AppRoutes from './components/master/AppRoutes'

window.onload = () => {
  ReactDOM.render(<AppRoutes />,
    document.getElementById('app')
  )
}
