interface ButtonProps{
  cor?: 'bg-blue-500' | 'bg-green-500' | 'bg-red-500' 
  className?: string
  children: any
  onClick?: (valor: any) => void
}


export default function Button(props: ButtonProps){

  const cor = props.cor?? 'bg-gray-500'

  return(
    <button className={`
    ${cor} text-gray-200
    p-2 rounded-xl
    ${props.className}`}
    onClick={props.onClick}>
      {props.children}
    </button>
  )
}