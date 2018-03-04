import React, { Component } from 'react'

import Header from 'components/layout/Header'
import Nav from 'components/layout/nav/Nav'
import Routes from 'Routes'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 0
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>
    this.setState({ scrollY: window.scrollY })

  render() {
    return (
      <div className="App">
        <Header scrollY={this.state.scrollY}>
          <Nav />
        </Header>
        <Routes />
      </div>
    )
  }
}
export default App
