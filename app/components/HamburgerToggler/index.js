/**
 *
 * HamburgerToggler
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HamburgerToggler({
  handleToggleSidebarViaHeader,
  toggleSidebarViaHeader,
}) {
  return (
    <div className={toggleSidebarViaHeader ? 'menu-btn open' : 'menu-btn'}>
      <div
        className="menu-btn__burger"
        onClick={handleToggleSidebarViaHeader}
      />
    </div>
  );
}

HamburgerToggler.propTypes = {};

export default HamburgerToggler;
