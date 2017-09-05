/* eslint import/no-extraneous-dependencies: 'off' */

import 'normalize-scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './app/App';

const root = document.getElementById('root');

const bootstrap = (Component) => {
  render(
    <Router>
      <Component />
    </Router>,
    root,
  );
};

bootstrap(App);
