import './style.scss';
import react from 'react';
type PropsInput={
  text?:string,
  type?:string,
  size?:number,
  height?:number,
  value?:string,
  required ?: boolean,
  onChange?:(a:any)=>any
  
}


export function Input (props:PropsInput)
{
 window.addEventListener('onChange',(event)=>
 {

 })
  return(
   <input { ...props}  className="input_text "
   style={{
     width:props.size,
     height:props.height
     }} 
   placeholder={props.text || ""}
   type={props.type || ""}
   required = {props.required || false }

      />
  )

}

export function Checkbox ()
{
   return(
      <input type="checkbox" className="input_check"  />
   
    )
}