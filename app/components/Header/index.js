/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import Blockie from '../Blockie';
import HamburgerToggler from '../HamburgerToggler';

import logo from '../../images/logo.png';

function Header({
  tronAddress,
  handleToggleSidebarViaHeader,
  toggleSidebarViaHeader,
}) {
  return (
    <div className="headerMain">
      {/* <GiHamburgerMenu
        onClick={() => handleToggleSidebarViaHeader()}
        style={hamburgerMenu}
      /> */}
      <HamburgerToggler
        handleToggleSidebarViaHeader={() => handleToggleSidebarViaHeader()}
        toggleSidebarViaHeader={toggleSidebarViaHeader}
      />

      <img className="heartbeat" src={logo} style={logoImg} />

      {tronAddress ? (
        <React.Fragment>
          <Blockie tronAddress={tronAddress} />
        </React.Fragment>
      ) : (
        <div />
      )}
    </div>
  );
}

const hamburgerMenu = {
  cursor: 'pointer',
  marginLeft: '20px',
  color: '#adadad',
  fontSize: '24px',
};

const logoImg = {
  width: '50px',
  margin: 0,
};

Header.propTypes = {};

export default Header;
