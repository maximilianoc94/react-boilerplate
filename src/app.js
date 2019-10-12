import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import RouterComponent from './routes';
import './styles/global.scss';

render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) module.hot.accept();
