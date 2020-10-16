import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { Route, Switch } from 'react-router-dom';
import { MountTransition } from './MountTransition';

export const RouteTransition = ({
  children,
  exact = false,
  path,
  mainClass,
  slide = 0,
  slideUp = 0,
  ...rest
}) => (
  <Route exact={exact} path={path} {...rest}>
    <MountTransition slide={slide} slideUp={slideUp}>
      {mainClass ? (
        <div className={mainClass}>{children}</div>
      ) : (
        <main>{children}</main>
      )}
    </MountTransition>
  </Route>
);

export const AnimatedRoutes = ({
  children,
  exitBeforeEnter = true,
  initial = false,
}) => (
  <Route
    render={({ location }) => (
      <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
        <Switch location={location} key={location.pathname}>
          {children}
        </Switch>
      </AnimatePresence>
    )}
  />
);
