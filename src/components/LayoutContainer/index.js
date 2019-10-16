import React from 'react';
import Header from './header';
import Footer from './footer';

const LayoutContainer = ({ location, children }) => {
  return (
    <>
      <Header location={location} />
      {children}
      <Footer location={location} />
    </>
  );
};

export default LayoutContainer;
