import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import ErrorBoundary from '../../components/ErrorBoundary';
import TestError from '../../components/TestError';
import { addInitialLoad } from '../../redux/actions/sample';

import { landingBg } from './Home.module.scss';

function Home(props) {
  useEffect(() => {
    props.addInitialLoad();
  }, []);

  return <section className={landingBg}>Hola</section>;
}

export default connect(
  null,
  { addInitialLoad }
)(Home);
