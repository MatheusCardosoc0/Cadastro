import { useState } from "react";
import Cliente from "../../core/clientes";
import Button from "./Botao";
import Input from "./Input";
import Layaut from "./layaut";

interface FormularioProps {
  cliente: Cliente
}


export default function Formulario(props: FormularioProps) {

  const id = props.cliente?.id

  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-600 h-screen items-center flex justify-center">
      <Layaut titulo="Formulário">
        <div className={`
      bg-violet-700
      py-3 rounded-xl
      `}>
          {id ?
            <Input name="Código"
              type="number" cap={3}></Input>
            : false}

          <Input name="Nome"
            type="text"
            cap={nome}
            onChange={setNome}></Input>

          <Input name="Idade"
            type="number"
            cap={idade}
            onChange={setIdade}></Input>
        </div>
        <div className="flex justify-end gap-4">
          <Button cor="bg-red-500" className="mt-4">Cancelar</Button>
          <Button cor="bg-blue-500" className="mt-4">Salvar</Button>
        </div>
      </Layaut>

    </div>
  )
}
