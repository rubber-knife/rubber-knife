import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import { Link } from 'react-router-dom'

import titles from 'constants/titles'
import logo from 'rk-logo.png'

const Header = ({ children, scrollY }) => {
  const headerClasses = classnames(
    'header',
    { 'header--humble': scrollY > 70 ? true : undefined }
  )

  return (
    <div className='header__container'>
      <div className={headerClasses}>
        <div className='header__top'>
          <div className='header__logo'>
            <div className='header__logo-image__container'>
              <Link to='/'>
                <img
                  className='header__logo-image'
                  src={logo}
                  alt='Rubber Knife' />
              </Link>
            </div>
          </div>
          {children}
        </div>
        <div className='header__bottom'>
          <div className='header__title'>
            {titles.primary}
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  scrollY: PropTypes.number.isRequired
}

export default Header
