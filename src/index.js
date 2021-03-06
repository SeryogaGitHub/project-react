import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App';
import * as ReactDOM from 'react-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>,
document.getElementById('root'));

serviceWorker.unregister();
