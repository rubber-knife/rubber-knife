import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import { Link } from 'react-router-dom'
import titles from 'constants/titles'
import pages from 'constants/pages'
import socialMedia from 'constants/social-media'

const NavExternal = ({
  navExternalIsOpen,
  toggleNavExternal,
  handleNavExternalTogglerKeyUp
}) => (
  <div className={classnames(
      'nav--external',
      { 'nav--external--is-open': navExternalIsOpen }
    )}>
    <div className='nav--external__header'>
      <Link
        to='/'
        className='nav--external__title'
        onClick={toggleNavExternal}>
        {titles.secondary}
      </Link>
      <div
        className='nav--external__close'
        role='button'
        tabIndex={0}
        onClick={toggleNavExternal}
        onKeyUp={handleNavExternalTogglerKeyUp}>
        &#10005;
      </div>
    </div>
    <div className='nav--external__body'>
      {
        pages.map(page => (
          <Link
            key={page.index}
            to={`/${page.resource}`}
            className='nav--external__menu-item'
            onClick={toggleNavExternal}>
            {page.title}
          </Link>
        ))
      }
      <div className='nav--external__spacer' />
      {
        socialMedia.map(page => (
          <a
            key={page.url}
            href={page.url}
            className='nav--external__menu-item'
            target='_blank'
            onClick={toggleNavExternal}>
            {page.abbr}
          </a>
        ))
      }
    </div>
  </div>
)

NavExternal.propTypes = {
  navExternalIsOpen: PropTypes.bool.isRequired,
  toggleNavExternal: PropTypes.func.isRequired,
  handleNavExternalTogglerKeyUp: PropTypes.func.isRequired
}

export default NavExternal
