import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from '../../redux/actions/sample';

const About = (props) => (
  <section>
    <h1>About Page</h1>
    <button onClick={() => props.incrementCounter()}>Increment</button>
    <p>Current Count: {props.counter}</p>
  </section>
);

export const mapStateToProps = (state) => ({
  counter: state.sample.counter,
});

export default connect(
  mapStateToProps,
  { incrementCounter }
)(About);
