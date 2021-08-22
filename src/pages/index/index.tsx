
import './style.scss';
import {Input} from './../../components/input/Input'
import {Checkbox} from './../../components/input/Input'
import  Moom from './../../img/undraw_relaunch_day_902d.svg';
export function Index()
{
  return (
     <div className="principal">
      <main>
        <div className="title">
         <img src={Moom} alt="" />
        <h3>Easy API</h3>
         <p>Cria as tuas apis na  facilidade </p>
        </div>
      </main>
      <aside>
           <form action="">
        <div className="center_session">
        <p className="">Iniciar sessão</p>
        </div>
           <small>Endereço de E-mail ou nome de usuário</small>
           <Input text="Email"/>
           <small>Endereço de E-mail ou nome de usuário</small>
           <Input text="Senha"/>

           <div className="down-desciption">
           <div className="div">
           <Checkbox/> 
           <p >Lembrar de mim</p>
           </div>
           <div className="div">
           <button className="btn_start"> Entrar</button>
           </div>
         </div>
         <div className="line">
         <p>Não tenho conta ?</p>
         </div>
        <div className="border_btn">
        <a href="" className="btn_down">Criar uma conta </a>
        </div>
           </form>
        
       
      </aside>
     </div>
   )
}