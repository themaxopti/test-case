import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppContainer } from './components/App/App.container';
import { store } from './store/store';
import './styles/App.css';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
