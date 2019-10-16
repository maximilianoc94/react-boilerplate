import React, { Suspense } from 'react';
import { Location, Router } from '@reach/router';

import LayoutContainer from './components/LayoutContainer';
import Spinner from './components/shared/spinner';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

function RouterComponent() {
  return (
    <Location>
      {({ location }) => (
        <LayoutContainer location={location}>
          <Router location={location}>
            <Home path="/" />
            <NotFound default />
          </Router>
        </LayoutContainer>
      )}
    </Location>
  );
}

export default function SuspensedRouterComponent() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Spinner />
        </div>
      }
    >
      <RouterComponent />
    </Suspense>
  );
}
