import React from 'react';
import styles from './layout.module.scss';

const LayoutContainer = ({ children }) => <div className={styles.container}>{children}</div>;

export default LayoutContainer;
