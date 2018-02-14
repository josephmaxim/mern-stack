import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './css/style.scss';

import App from './App';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(App);

if (module && module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
