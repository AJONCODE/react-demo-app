/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import { Redirect } from 'react-router-dom';
import {
  AnimatedRoutes,
  RouteTransition,
} from '../../pageTransition/RouteTransition';

import LoadingPage from '../../components/LoadingPage';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
// import Sidebar2 from '../../components/Sidebar2';

import GlobalStyle from '../../global-styles';
import '../../styles/style.scss';
import '../../styles/sidebar.scss';
import '../../styles/fonts.scss';
import '../../styles/animationTransition.scss';
import '../../styles/animatedCardScreenWithSlider.scss';
import '../../styles/animatedCard.scss';

const TronConnector = React.lazy(() => import('../TronConnector'));
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

  const [connectingTron, setConnectingTron] = React.useState(false);
  const [isTronAvailable, setIsTronAvailable] = React.useState(false);
  const [tronWeb, setTronWeb] = React.useState({
    installed: true,
    loggedIn: false,
  });
  const [tronAddress, setTronAddress] = React.useState(null);

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
      main: () => <HomePage tronAddress={tronAddress} />,
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
    {
      path: '/connector',
      main: () => (
        <TronConnector
          tronAddress={tronAddress}
          setTronAddress={setTronAddress}
          connectingTron={connectingTron}
          isTronAvailable={isTronAvailable}
          setConnectingTron={setConnectingTron}
          setIsTronAvailable={setIsTronAvailable}
          setTronWeb={setTronWeb}
          setToggleSidebarViaHeader={setToggleSidebarViaHeader}
        />
      ),
    },
  ];

  return (
    <div>
      <Header
        tronAddress={tronAddress}
        handleToggleSidebarViaHeader={handleToggleSidebarViaHeader}
        toggleSidebarViaHeader={toggleSidebarViaHeader}
      />

      <React.Suspense fallback={<LoadingPage />}>
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
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

        <GlobalStyle />
      </React.Suspense>
    </div>
  );
}
