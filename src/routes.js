import React from 'react';
import { Router } from '@reach/router';

import LayoutContainer from './components/LayoutContainer';

import About from './pages/About';
import NotFound from './pages/NotFound';

function RouterComponent() {

  return (
    <Router>
      <LayoutContainer>
        <About path="/about" />
        <NotFound default />
      </LayoutContainer>
    </Router>
  );
}

export default RouterComponent;
