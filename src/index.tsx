import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import Newcont from './pages/newcont';
import './style/global.scss';
import NewDataBase from './pages/datab/index'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


