import { Input } from "../../components/input/Input"
import './style.scss'

export default function NewCont()
{

 
 return(
   <div className="principal">
      <main>
         <div className="title">
          <img src="" alt="" />
         <h3>Easy API</h3>
         </div>
         <div className="menu">
           <ul>
              
            <img src="" alt="" />  
            <li> <a href="" className="link-style"> Documentação </a></li>
            <img src="" alt="" />
            <li> <a href="" className="link-style"> Github repositório </a></li>
           
            <img src="" alt="" />
            <li> <a href="" className="link-style"> Sobre nós </a></li>
           
            <img src="" alt="" />
            <li> <a href="" className="link-style"> Doação </a></li>
           
           
           </ul>
           <div className="text-down">
          <small>Gera as tuas apis na facilidade</small>
         </div>
         </div>
         
      </main>
      <aside>
       <div className="principal_form">
        <div className="title-form">
        <h3> Criar Conta</h3>
        </div>

        <form action="" >
          <div className="left">
          <small>Nome</small>
           <Input text="Nome"/>
           <small>Senha</small>
           <Input text="Senha"/>
           <small>País</small>
           <Input text="País"/>
           <small>Cidade</small>
           <Input text="Cidade"/>
          </div>
          <div className="space"></div>
          <div className="rigth">
          <small>Telefone</small>
           <Input text="Telefone"/>
           <small>Rede social</small>
           <Input text="Rede social"/>
           <small>Rede social</small>
           <Input text="Rede social"/>
           <small>GitHub</small>
           <Input text="Github"/>
          </div>
        </form>
        <div className="center-bottom">
         <button className="btn_newcont" type="submit"> Criar Conta</button>
         <small>Copyright © 2021. All rights reserved. Wat Developer</small>
        </div>
       </div>
      </aside>
   </div>
  )
}