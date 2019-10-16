import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadToaster } from '../../../redux/actions/toaster';
import styles, { container, active } from './toaster.module.scss';

function Toaster({ ...actions }) {
  const [message, setMessage] = useState('');
  const [typeColor, setTypeColor] = useState('');

  const [show, setShow] = useState(false);

  function display(msg, type) {
    setMessage(msg);
    setTypeColor(type);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  useEffect(() => {
    actions.loadToaster({ display });
  }, [actions]);

  return <div className={[container, show && active, styles[typeColor]].join(' ')}>{message}</div>;
}

export default connect(
  null,
  { loadToaster }
)(Toaster);
