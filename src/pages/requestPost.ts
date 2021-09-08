import Api from "./../services/api";

//#region NewUser


export async function addMethod(props:object,method:string){

  console.log("testando :",props)
  var objNewUserJson={
    "obj":
    {
      "method":method,
      "data":
      {
       "pessoa":[
				{
					"idPais":"1",
					"nome":"Tambu",
					"email":"Tambu@gmail.com",
					"password":"Tambu"
					
				}
			]
      }
       
    }
  }
  const request = await Api.post(
    'api/application',
    objNewUserJson
    
    )
  return request.data

}