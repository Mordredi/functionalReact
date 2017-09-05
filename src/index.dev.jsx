/* eslint import/no-extraneous-dependencies: 'off' */

import 'normalize-scss';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
import App from './app/App';

const root = document.getElementById('root');

const bootstrap = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

bootstrap(App);

if (module.hot) {
  module.hot.accept('./app/App', () => {
    bootstrap(App);
  });
}

