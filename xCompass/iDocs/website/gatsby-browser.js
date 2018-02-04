import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/store';

const propTypes = {
    children: PropTypes.node.isRequired
  };

const store = createStore();

exports.replaceRouterComponent = ({ history }) => {

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={ store }>
      <Router history={ history }>{ children }</Router>
    </Provider>
  );
  ConnectedRouterWrapper.displayName = 'ConnectRouterWrapper';
  ConnectedRouterWrapper.propTypes = propTypes;

  return ConnectedRouterWrapper;
};

