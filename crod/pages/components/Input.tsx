interface InputProps{
  type: string
  name: string
  cap?: any
  onChange?: (valor: any) => void
}


export default function Input(props:InputProps){
  return(
    <div className={`
    flex flex-col
    p-4
   text-gray-200
    `}>
      <label className={`
      text-xl
      `}>
        {props.name + ':'}
      </label>
      <input className={`
      border border-gray-800
      bg-slate-300 text-gray-700 focus:bg-white
      p-1 overflow-hidden rounded-lg px-2
      `}
       type={props.type?? 'text'}
       value={props.cap}
       onChange={e=>props.onChange?.(e.target.value)}>
       </input>
    </div>
  )
}