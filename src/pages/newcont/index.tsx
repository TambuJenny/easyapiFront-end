import { useEffect, useState } from "react"
import api from "../../services/api"
//import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { Input } from "../../components/input/Input"
import './style.scss'
import {newcont} from './../requestPost';
import DocumentIcon from './../../img/icons/icons8_Document_50px.png';
import GithubIcon from './../../img/icons/icons8_GitHub_50px.png';
import InfoIcon from './../../img/icons/icons8_Info_50px.png';
import DonatIcon from './../../img/icons/icons8_Welfare_50px.png'


interface newUserType{
  nome:string,
  pais:string,
  email:string,

  telefone:string,
  social1:string,
  social2:string,
  social3:string,
  social4:string

}

//const [dataNewCont,setdataNnewCont]=useState<newUserType>()
//const response_status= newcont(newUserType);



interface produtoType {
data:{
  Category:{
    data:[{
     id:string,
     name:string,
     code:string
    }]
  },
  Imagem:{
      data:[{
       id:string,
       name:string,
       path:string
      }]
  }
  Product: {
    data: [
     {
       id:string,
       idCategory:string,
       idImg:string,
       name:string,
       sku:string,
       quantity:string,
       price:string,
       description:string,
      }
    ]
  }
}
  
  }



export function Newcont()
{
  var jsonProduto ={
   "obj":
   {
     "method":"select",
     "data":
     {
       "Category":{},
       "Imagem":{},
       "Product":{}
     }
   }
  } 
  let teste = {}
  const [produtos,setProdutos]=useState<produtoType>();
  const getProdutos = async () =>{
    await api.post('desafio/api/api',jsonProduto)
            .then((response)=>{
              setProdutos(response.data)
            })
            .catch((error)=>{
              console.log(error)
            });
  }

  useEffect(()=>{
    getProdutos()
  },[])

  useEffect(()=>{
    console.log(produtos?.data.Category)

    produtos?.data.Category.data.map(category =>console.log(category.name))
    
  },[produtos])

 
 return(
   <div className="principal">
      <main className="principal-item">
         <div className="title">
          <img src="" alt="" />
         <h3>Easy API</h3>
         </div>
         <div className="menu">
           <ul>
              
          <div className="menu_object" style={{display:"flex"}}>
          <img src={DocumentIcon} alt="" style={{maxWidth:"30px"}}/>
            <li> <a href="" className="link-style"> Documentação </a></li>
          </div>
           <div className="menu_object" >
           <img src={GithubIcon} alt="" />
            <li> <a href="" className="link-style"> Github repositório </a></li>
           </div>
           
           <div className="menu_object" >
           <img src={DonatIcon} alt=""/>
            <li> <a href="" className="link-style"> Sobre nós </a></li>
           </div>
           
           <div className="menu_object" >
           <img src={InfoIcon} alt=""/>
            <li> <a href="" className="link-style"> Doação </a></li>
           </div>
           
           
           </ul>
           <div className="text-down">
          <small>Gera as tuas apis na facilidade</small>
         </div>
         </div>
         
      </main>
      <aside className="new-account">
       <div className="principal_form">
        <div className="title-form">
        <h3> Criar Conta</h3>
        {/*
           produtos?.data.Category.data.map(category =>(
            <small>{category.name}</small>
           )
           )
           */}
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