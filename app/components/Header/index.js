/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Blockie from '../Blockie';
import HamburgerToggler from '../HamburgerToggler';

import logo from '../../images/logo.png';

import MetamaskContext from '../../contexts/metamask';

function Header({ handleToggleSidebarViaHeader, toggleSidebarViaHeader }) {
  const metamask = React.useContext(MetamaskContext);

  return (
    <div className="headerMain">
      <HamburgerToggler
        handleToggleSidebarViaHeader={() => handleToggleSidebarViaHeader()}
        toggleSidebarViaHeader={toggleSidebarViaHeader}
      />

      <img className="heartbeat" src={logo} style={logoImg} />

      {metamask.ethereumAddress ? (
        <React.Fragment>
          <Blockie address={metamask.ethereumAddress} />
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
