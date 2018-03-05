import React, { Component } from 'react'

import ScrollY from 'utils/ScrollY'

import Header from 'components/layout/Header'
import Nav from 'components/layout/nav/Nav'

import Routes from 'Routes'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollY>
          <Header>
            <Nav />
          </Header>
        </ScrollY>
        <Routes />
      </div>
    )
  }
}
export default App
