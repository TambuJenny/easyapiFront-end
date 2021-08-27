import rect from 'react';
import './style.scss';
import dBase from './../../img/icons/icons8_Database_50px.png';
import UserIcon from './../../img/icons/icons8_Male_User_50px.png';


export default function MenuTop()
{
 return(
  <div className="menutop">

    <div className="text-div">
     <h3>Banco de dados </h3>
    </div>
    <div className="menu-div">
     <ul>
      <li>
       <img src={dBase} alt="" />
       <a href="">Carregar BD</a>
      </li>
      <li>
      <img src={UserIcon} alt="" />
       <a href="">User Name</a>
      </li>
     </ul>
    </div>

  </div>
 )
}