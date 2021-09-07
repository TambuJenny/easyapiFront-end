
import {createContext} from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import NewCont from './pages/newcont/index';
import NewDataBase from './pages/datab/index'
//import Index from './pages/index/index';

 function Routes ()
{
 return(
   <BrowserRouter>
     
         
          <Route path="/newcont" component={NewCont}/>
 
   </BrowserRouter>
 )
}
export default Routes;