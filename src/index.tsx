import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Index } from './pages/index/index'
import NewCont from './pages/newcont';
import './style/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);


