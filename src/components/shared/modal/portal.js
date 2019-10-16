import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('portal');

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.inner = document.createElement('div');
  }

  componentDidMount() {
    rootEl.appendChild(this.inner);
  }

  componentWillUnmount() {
    rootEl.removeChild(this.inner);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.inner);
  }
}

export default Portal;
