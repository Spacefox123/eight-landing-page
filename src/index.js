import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './containers/App';


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{'Eight d.o.o.'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Eight d.o.o. landing page'} />
      </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

