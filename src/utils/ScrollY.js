import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScrollY extends Component {
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
    const children = React.cloneElement(this.props.children, {
      scrollY: this.state.scrollY
    })
    return <div>{children}</div>
  }
}

ScrollY.propTypes = {
  children: PropTypes.node.isRequired
}

export default ScrollY
