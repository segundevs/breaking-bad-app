import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataContextProvider from './contexts/DataContext/DataContext';
import FavoritesContextProvider from './contexts/FavoritesContext/FavoritesContext';


ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

