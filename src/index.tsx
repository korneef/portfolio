import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import './app/firebase/firebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
