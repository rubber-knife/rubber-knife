import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

const NavUnderline = ({
  currentPageIndex,
  currentPageResource,
  primaryPages
}) => {
  const navExternalTogglerWidthInPixels = 75

  let navUnderlineWidthInPercent = 0
  let navUnderlinePixelCoefficient = navExternalTogglerWidthInPixels
  if (primaryPages.length - currentPageIndex >= 0 && currentPageIndex !== -1) {
    navUnderlineWidthInPercent =
      ((primaryPages.length - currentPageIndex) / primaryPages.length) * 100
    navUnderlinePixelCoefficient =
      currentPageIndex * (navExternalTogglerWidthInPixels / primaryPages.length)
  }

  const navUnderlineStyles = {
    width: `calc(${navUnderlineWidthInPercent}% + ${navUnderlinePixelCoefficient}px)`
  }

  const navUnderlineClasses = classnames(
    'nav__underline',
    `nav__underline--${['poetry', 'prose', 'va'].includes(currentPageResource) ? currentPageResource : 'default'}`
  )

  return (
    <div
      className={navUnderlineClasses}
      style={navUnderlineStyles} />
  )
}

NavUnderline.propTypes = {
  currentPageIndex: PropTypes.number.isRequired,
  currentPageResource: PropTypes.string.isRequired,
  primaryPages: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavUnderline
