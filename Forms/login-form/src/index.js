import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/loginForm/loginFom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
);
