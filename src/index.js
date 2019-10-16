import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RouterComponent from './routes';
import * as serviceWorker from './serviceWorker';
import './styles/global.scss';
import './i18n';

render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
