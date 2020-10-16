/**
 *
 * Connector
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import logo from '../../images/logo.png';

import Button from '../Button';
import Loading from '../Loading';

function Connector({ metamask, handleConnectMetamask }) {
  return (
    <div className="connector-div">
      <span className="floating connector-column-flex">
        <img src={logo} alt="LOGO" style={logoImg} />
      </span>
      <span className="connector-column-flex">
        {metamask.connectingMetamask && !metamask.ethereumAddress && (
          <Loading text="Connecting" />
        )}

        {!metamask.ethereumAddress && !metamask.connectingMetamask && (
          <Button
            id="connect_button"
            className="btn_class btn_class--dark_blue"
            handleButtonClick={handleConnectMetamask}
          >
            CONNECT
          </Button>
        )}
      </span>
    </div>
  );
}

const logoImg = {
  width: '25vW',
};

Connector.propTypes = {};

export default Connector;
