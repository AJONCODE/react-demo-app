/**
 *
 * TronConnector
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import logo from '../../images/logo.png';
import tronTree from '../../images/shikamaru.png';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

export function TronConnector({
  tronAddress,
  setTronAddress,
  connectingTron,
  isTronAvailable,
  setConnectingTron,
  setIsTronAvailable,
  setTronWeb,
  setToggleSidebarViaHeader,
}) {
  // tron
  const checkTron = () =>
    new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50;
      const isTronAvailableFunc = () => {
        if (window.tronWeb) {
          resolve(true);
          return;
        }
        // eslint-disable-next-line no-plusplus
        attempts++;
        if (attempts >= maxAttempts) {
          resolve(false);
          return;
        }
        setTimeout(isTronAvailableFunc, 100);
      };
      isTronAvailableFunc();
    });

  const checkTronAddress = () =>
    new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50;
      const check_again = () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
          resolve(window.tronWeb.defaultAddress.base58);
          return;
        }
        attempts++;
        if (attempts >= maxAttempts) {
          resolve(false);
          return;
        }
        setTimeout(check_again, 500);
      };
      check_again();
    });

  const asyncCheckTron = async () => {
    setConnectingTron(true);
    const tronFlag = await checkTron();
    console.log('App -> tronFlag: ', tronFlag);
    if (tronFlag) {
      console.log('Yes Tron Web is Available');
      setIsTronAvailable(true);
      sessionStorage.setItem('isTron', true);
      setConnectingTron(false);
    } else {
      console.log('Sorry, Tron Web is not Available');
      sessionStorage.setItem('isTron', false);
      setIsTronAvailable(false);
      setConnectingTron(false);
    }

    return null;
  };

  const asyncCheckTronAddress = async () => {
    // fetching tron address
    setConnectingTron(true);
    const tronAddress = await checkTronAddress();
    if (tronAddress) {
      setTronWeb({
        installed: true,
        loggedIn: true,
      });
      setTronAddress(tronAddress);
      setToggleSidebarViaHeader(true);
      setConnectingTron(false);
    } else {
      setTronWeb({
        installed: true,
        loggedIn: false,
      });
      setConnectingTron(false);
    }
  };

  React.useEffect(() => {
    if (isTronAvailable && !tronAddress) {
      asyncCheckTronAddress();
    } else if (!tronAddress && !isTronAvailable) {
      asyncCheckTron();
    } else if (tronAddress) {
      <Redirect to="/home" />;
    }
  }, [isTronAvailable, tronAddress]);

  return (
    <div className="tronConnectorDiv">
      <span className="floating tronConnectorColumnFlex">
        <img src={logo} alt="TronTree" style={logoImg1} />
        <img src={tronTree} alt="TronTree" style={logoImg2} />
      </span>
      <span className="tronConnectorColumnFlex">
        {/* <Button
          id="connect_button"
          className="btn_class btn_class--dark_blue"
          loading={loading}
          handleButtonClick={handleButtonClick}
        >
          CONNECT
        </Button> */}

        {connectingTron && <Loading text="Connecting" />}

        {isTronAvailable && !connectingTron && (
          <h3 className="heading3">Please connect to Tron </h3>
        )}
        {!isTronAvailable && !connectingTron && (
          <h3 className="heading3">No Tron plugin found.</h3>
        )}
      </span>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const logoImg1 = {
  width: '25vW',
};
const logoImg2 = {
  width: '25vW',
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TronConnector);
