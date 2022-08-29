export default function Titulo(props:any){
  return(
    <div className={`
    flex flex-col justify-center
    `}>
      <h1 className={`
      p-3 
      text-left
      text-2xl font-bold
      `}
      >{props.children}</h1>
      <hr className={`
      border-violet-600 border-4
      `}
      ></hr>
    </div>
  )
}