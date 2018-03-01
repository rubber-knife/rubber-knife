import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/main.css'

import { BrowserRouter as Router } from 'react-router-dom'

import ScrollTop from 'utils/ScrollTop'
import App from 'App'

ReactDOM.render(
  <Router>
    <ScrollTop>
      <App />
    </ScrollTop>
  </Router>,
  document.getElementById('root')
)

// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker()
