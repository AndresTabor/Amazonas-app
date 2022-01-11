import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './container/App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  
  document.getElementById('root')
);

