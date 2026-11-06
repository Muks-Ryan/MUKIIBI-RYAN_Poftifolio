import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/images/images.css';
import './styles/variables.css';
import './styles/themes.css';
import './styles/animations.css';
import './styles/global.css';
import './styles/responsive.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
