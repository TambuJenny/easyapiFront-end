import './style.scss';
type PropsInput={
  text?:string,
  type?:string,
  size?:number,
  height?:number
 
  


}


export function Input (props:PropsInput)
{
  return(
   <input type={props.type || ''} className="input_text " 
   style={{
     width:props.size,
     height:props.height
     
  
   }} placeholder={props.text || ""} />
  )

}

export function Checkbox ()
{
   return(
      <input type="checkbox" className="input_check"  />
   
    )
}