import Titulo from "./Titulo";

interface LayautProps{
  titulo: string
  children: any
}

export default function Layaut(props: LayautProps){
  return(
    <div className={`
    flex flex-col
    w-2/3 rounded-lg
    bg-gray-700 text-yellow-500
    `}>
      <Titulo>{props.titulo}</Titulo>
      <div className={`
      p-6
      `}>
        {props.children}
      </div>
    </div>
  )
}