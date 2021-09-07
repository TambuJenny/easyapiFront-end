import react from 'react';
import  './style.scss'
import MenuTop from './../../components/topmenu/index'
import { Input } from '../../components/input/Input';

export default function NewDataBase()
{
 return(
         <div className="principal_divData">
          <main>

           </main>
  
           <aside>
            <MenuTop/>
            <div className="tables">
             <div className="desc-db">
             <div className="componente" style={{width:"292px"}}>
             <p>Nome do Banco de dados </p>
              <Input text="Nome do banco de dados " size={292} height={29}/>
             </div>
             <div className="spaceb"></div>
             <div className="componente" >
             <p>Numeros das tabelas</p>
              <Input text="Tabelas " type="number" height={29}/>
             </div>
             <div className="spaceb"></div>
             <div className="componente" >
             <p>Tabelas </p>
              <Input text="Pessoa "  height={29}/>
             </div>
             </div>
             <div className="tables-camp">
                   <table>
                           <thead>
                                   <div className="headiv">
                                   <tr>
                                           <td ><p>Nº</p></td>
                                           <td ><p>Campo</p></td>
                                           <td><p>Tipo</p></td>
                                           <td><p>Nul</p></td>
                                           <td><p>Key</p></td>
                                          
                                          
                                   </tr>
                                   </div>
                           </thead>
                           
                        </table>     
             </div>
            </div>
  
           </aside>
  
         </div>
 )
}