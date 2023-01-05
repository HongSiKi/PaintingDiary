import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
} else {
  alert('root DOM이 없습니다.');
}
