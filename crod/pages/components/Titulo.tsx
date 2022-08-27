export default function Titulo(props:any){
  return(
    <div className={`
    flex flex-col justify-center
    `}>
      <h1 className={`
      py-3
      text-center
      text-2xl
      `}
      >{props.children}</h1>
      <hr className={`
      border-violet-600 border-4
      `}
      ></hr>
    </div>
  )
}