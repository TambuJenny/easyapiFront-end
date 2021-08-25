
import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import NewCont from './pages/newcont/index';

export default function Routes ()
{
 return(
   <BrowserRouter>
      <Switch>
         <Route path="/newcont" component={NewCont}/>
      </Switch>
   </BrowserRouter>
 )
}