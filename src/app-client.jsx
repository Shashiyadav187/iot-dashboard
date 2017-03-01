'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import AppRoutes from './components/master/AppRoutes'

window.onload = () => {
  ReactDOM.render(<AppRoutes />,
    document.getElementById('app')
  )
}
