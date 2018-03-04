import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import pages from 'constants/pages'

import NavUnderline from 'components/layout/nav/NavUnderline'

import NavExternal from 'components/layout/nav/NavExternal'
import NavExternalToggler from 'components/layout/nav/NavExternalToggler'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPageIndex: pages.length,
      currentPageResource: 'home',
      navExternalIsOpen: false
    }
  }

  componentWillMount() {
    this.setPage(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    this.setPage(nextProps.location.pathname)
  }

  setPage = pathname => {
    const currentResource = pathname.split('/')[1]
    if (currentResource) {
      pages.forEach(page => {
        if (page.resource === currentResource) {
          this.setState({
            currentPageIndex: page.index,
            currentPageResource: currentResource
          })
        }
      })
    } else {
      this.setState({
        currentPageIndex: -1,
        currentPageResource: 'home'
      })
    }
  }

  toggleNavExternal = () =>
    this.setState({
      navExternalIsOpen: !this.state.navExternalIsOpen
    })

  handleNavExternalTogglerKeyUp = event =>
    event.key === 'Enter' && this.toggleNavExternal()

  render() {
    const {
      currentPageIndex,
      currentPageResource,
      navExternalIsOpen
    } = this.state

    const primaryPages = [
      'poetry',
      'prose',
      'va',
      'archive'
    ]

    const navItemsClasses = classnames(
      'nav__items',
      { open: navExternalIsOpen }
    )

    return (
      <div className='nav'>
        <div className={navItemsClasses}>
          <div className='nav__items--expanded'>
            {
              pages.map(page => (
                primaryPages.includes(page.resource)
                  &&
                    <Link
                      to={`/${page.resource}`}
                      key={page.index}
                      className='nav__item'>
                      {page.title}
                    </Link>
              ))
            }
          </div>
          <NavExternalToggler
            handleNavExternalTogglerKeyUp={this.handleNavExternalTogglerKeyUp}
            toggleNavExternal={this.toggleNavExternal} />
          <NavUnderline
            currentPageIndex={currentPageIndex}
            currentPageResource={currentPageResource}
            primaryPages={primaryPages} />
        </div>

        <NavExternal
          navExternalIsOpen={navExternalIsOpen}
          toggleNavExternal={this.toggleNavExternal}
          handleNavExternalTogglerKeyUp={this.handleNavExternalTogglerKeyUp} />
      </div>
    )
  }
}

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(Navigation)
