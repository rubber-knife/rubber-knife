import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'

const NavExternalToggler = ({
  handleNavExternalTogglerKeyUp,
  toggleNavExternal
}) => (
  <div
    className='nav--external-toggler'
    role='button'
    tabIndex={0}
    onKeyUp={handleNavExternalTogglerKeyUp}
    onClick={toggleNavExternal}>
    <FontAwesomeIcon icon={faBars} />
  </div>
)

NavExternalToggler.propTypes = {
  toggleNavExternal: PropTypes.func.isRequired,
  handleNavExternalTogglerKeyUp: PropTypes.func.isRequired
}

export default NavExternalToggler
