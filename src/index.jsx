import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './css/style.scss';

import Template from './components/Template';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component title="MERN Stack" />
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(Template);

if (module && module.hot) {
  module.hot.accept('./components/Template', () => {
    renderApp(Template);
  });
}
