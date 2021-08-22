import './style.scss';
type PropsInput={
  text?:string,
  type?:string,


}


export function Input (props:PropsInput)
{
  return(
   <input type={props.type || ''} className="input_text " placeholder={props.text || ""} />
  )

}

export function Checkbox ()
{
   return(
      <input type="checkbox" className="input_check"  />
   
    )
}