import React from 'react';
import Portal from './portal';
import { bg, wrapper } from './modal.module.scss';

function Modal({ children }) {
  return (
    <Portal>
      <div className={bg}>
        <div className={wrapper}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
