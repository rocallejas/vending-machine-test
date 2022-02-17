import React from 'react';
import ReactDOM from 'react-dom';
import VendingApp from './VendingApp';
import { Provider } from 'react-redux';
import store from './stores/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <VendingApp />
  </Provider>,
  document.getElementById('root')
);

