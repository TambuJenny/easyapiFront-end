import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import {Newcont} from './pages/newcont';
import './style/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Newcont />
  </React.StrictMode>,
  document.getElementById('root')
);


