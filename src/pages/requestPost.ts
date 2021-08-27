import Api from "./../services/api";

//#region NewUser
export interface newUserType{
  nome:string,
  pais:string,
  email:string,

  telefone:string,
  social1:string,
  social2:string,
  social3:string,
  social4:string

}

export async function newcont(props:newUserType){
  var objNewUserJson={
    "obj":[{
      "nome":props.nome,
      "pais":props.pais,
      "email":props.email,
      "telefone":props.telefone,
      "social1":props.social1,
      "social2":props.social2,
      "social3":props.social3,
      "social4":props.social4
    }]
  }
  const request = await Api.post(
    'newuser/',
    objNewUserJson
    
    )
  return request.status

}