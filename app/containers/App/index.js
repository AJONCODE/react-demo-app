/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import Web3 from 'web3';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { ImWarning } from 'react-icons/im';
import { GiCrossMark } from 'react-icons/gi';
import {
  AnimatedRoutes,
  RouteTransition,
} from '../../pageTransition/RouteTransition';

// scss
import GlobalStyle from '../../global-styles';
import '../../styles/style.scss';
import '../../styles/sidebar.scss';
import '../../styles/fonts.scss';
import '../../styles/alertDiv.scss';
import '../../styles/animationTransition.scss';
import '../../styles/animatedCardScreenWithSlider.scss';
import '../../styles/animatedCard.scss';

// config
import { contractDeployedNetwork } from '../../utils/config';

// context
import { MetamaskProvider } from '../../contexts/metamask';

// component
import LoadingPage from '../../components/LoadingPage';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Connector from '../../components/Connector';

// lazy loading
const HomePage = React.lazy(() => import('../HomePage/Loadable'));
const Random = React.lazy(() => import('../Random/Loadable'));
const AnimatedCardScreenWithSlider = React.lazy(() =>
  import('../AnimatedCardScreenWithSlider/Loadable'),
);
const AnimatedCardGroup = React.lazy(() =>
  import('../AnimatedCardGroup/Loadable'),
);
const NotFoundPage = React.lazy(() => import('../NotFoundPage/Loadable'));

export default function App() {
  const [rtl, setRtl] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [image, setImage] = React.useState(true);
  const [toggled, setToggled] = React.useState(false);
  const [toggleSidebarViaHeader, setToggleSidebarViaHeader] = React.useState(
    false,
  );

  const [metamaskContextValue, setMetamaskContextValue] = React.useState({
    ethereumAddress: null,
    web3Instance: null,
    metamaskError: null,
    connectingMetamask: false,
    network: null,
  });

  // web3 :: metamask
  const chainedWeb3 = window.ethereum;

  if (chainedWeb3) {
    chainedWeb3.on('networkChanged', networkId => {
      console.log('networkChanged -> networkId -> ', networkId);
      // handle the new network
      resetApp();
      window.location.reload();
    });

    chainedWeb3.on('accountsChanged', account => {
      console.log('accountsChanged -> account -> ', account);
      // handle the new account
      resetApp();
    });
  }

  const resetApp = async (metamaskError = null) => {
    if (
      metamaskContextValue.web3Instance &&
      metamaskContextValue.web3Instance.currentProvider &&
      metamaskContextValue.web3Instance.currentProvider.close
    ) {
      await metamaskContextValue.web3Instance.currentProvider.close();
    }
    setMetamaskContextValue({
      ethereumAddress: null,
      web3Instance: null,
      connectingMetamask: false,
      metamaskError,
    });
  };

  const loadBlockChain = async () => {
    try {
      window.web3 = new window.Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = await new Web3(window.web3.currentProvider);
      const network = await web3.eth.net.getNetworkType();
      console.log('Network: ', network);

      const accounts = await web3.eth.getAccounts();

      setMetamaskContextValue({
        ...metamaskContextValue,
        ethereumAddress: accounts[0],
        web3Instance: web3,
        connectingMetamask: false,
        metamaskError: null,
        network: network.toUpperCase(),
      });
    } catch (err) {
      console.log('error catch: ', err);
      resetApp('Unable to connect to metamask!');
    }
  };

  const handleConnectMetamask = () => {
    setMetamaskContextValue({
      ...metamaskContextValue,
      connectingMetamask: true,
    });
    loadBlockChain();
  };

  // sidebar
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleRtlChange = checked => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = checked => {
    setImage(checked);
  };

  const handleToggleSidebar = value => {
    setToggled(value);
  };

  const handleToggleSidebarViaHeader = () => {
    setToggleSidebarViaHeader(!toggleSidebarViaHeader);
    setCollapsed(!toggleSidebarViaHeader);
  };

  // Routes
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <HomePage />,
    },
    {
      path: '/random',
      main: () => <Random />,
    },
    {
      path: '/animated-cards',
      mainClass: 'animatedCardMain',
      main: () => <AnimatedCardScreenWithSlider />,
    },
    {
      path: '/animated-card-group',
      mainClass: 'animatedCardGroupMain',
      main: () => <AnimatedCardGroup />,
    },
  ];

  React.useEffect(() => {
    handleConnectMetamask();
  }, []);

  console.log('metamaskContextValue: ', metamaskContextValue);

  return (
    <div>
      {/* <div
        className={
          metamaskContextValue.network &&
          metamaskContextValue.network !== contractDeployedNetwork
            ? 'PhishAlertActive'
            : 'PhishAlert'
        }
      >
        <div style={{ display: 'flex' }}>
          <ImWarning style={{ marginRight: 6 }} size={15} />
          <span className="alertSpan">
            Make sure the Metamask Network is{' '}
            {contractDeployedNetwork.toUpperCase()}
          </span>
        </div>
        <StyledClose size={15} onClick={() => setNetworkError(false)} />
      </div> */}
      <MetamaskProvider value={metamaskContextValue}>
        {metamaskContextValue.ethereumAddress && (
          <Header
            handleToggleSidebarViaHeader={handleToggleSidebarViaHeader}
            toggleSidebarViaHeader={toggleSidebarViaHeader}
          />
        )}
        <React.Suspense fallback={<LoadingPage />}>
          {!metamaskContextValue.ethereumAddress && (
            <Connector
              metamask={metamaskContextValue}
              handleConnectMetamask={handleConnectMetamask}
            />
          )}
          {metamaskContextValue.ethereumAddress && (
            <div
              className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}
            >
              {toggleSidebarViaHeader && (
                <React.Fragment>
                  <Sidebar
                    image={image}
                    collapsed={collapsed}
                    rtl={rtl}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                    handleCollapsedChange={handleCollapsedChange}
                  />
                </React.Fragment>
              )}
              <AnimatedRoutes exitBeforeEnter initial={false}>
                {routes.map(route => (
                  <RouteTransition
                    key={route.path}
                    path={route.path}
                    mainClass={route.mainClass}
                    exact={route.exact}
                    slideUp={30}
                  >
                    {route.main()}
                  </RouteTransition>
                ))}
              </AnimatedRoutes>
            </div>
          )}

          <GlobalStyle />
        </React.Suspense>
      </MetamaskProvider>
    </div>
  );
}

export const StyledClose = styled(GiCrossMark)`
  :hover {
    cursor: pointer;
  }
`;
