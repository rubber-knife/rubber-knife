import React from 'react'

import {
  Switch,
  Route
} from 'react-router-dom'

import Home from 'components/Home/Home'

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      render={routerProps => (
        <Home
          {...routerProps} />
      )} />
  </Switch>
)

export default Routes
