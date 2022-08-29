import { prependOnceListener } from "process"
import { AiOutlineDelete, AiOutlineForm } from 'react-icons/ai'
import Cliente from "../../core/clientes"

interface TabelaProps {
  clientes: Cliente[]
  clienteSelelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps) {

  const actionsRendering = props.clienteSelelecionado || props.clienteExcluido

  function renderCabeçalho() {
    return (
      <tr >
        <th className="p-3 text-lg">Código</th>
        <th className="p-3 text-lg">Nome</th>
        <th className="p-3 text-lg">Idade</th>
        {actionsRendering?         <th className="p-3 text-lg">Ações</th> : false}
      </tr>
    )
  }
  function renderClientes() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={`
        ${i % 2 == 0 ? 'bg-gradient-to-tr from-yellow-400 to-yellow-200' : 'bg-gradient-to-tr from-yellow-200 to-yellow-400'}
        `}>
          <th className="p-4">{cliente.id}</th>
          <th className="p-2">{cliente.nome}</th>
          <th className="p-2">{cliente.idade}</th>
          <th className="flex text-xl justify-center gap-1 py-2">

            {props.clienteSelelecionado ?
              <button className="text-green-600 p-2 hover:bg-violet-100 rounded-full"
              onClick={() => props.clienteSelelecionado?.(cliente)}>
                <AiOutlineForm></AiOutlineForm>
              </button>
               : false}

            {props.clienteExcluido ?
              <button className="text-red-600 p-2 hover:bg-violet-100 rounded-full"
              onClick={() => props.clienteExcluido?.(cliente)}>
                <AiOutlineDelete></AiOutlineDelete>
              </button>
               : false}

          </th>
        </tr>
      )
    })
  }

  return (
    <table className={`
    bg-gradient-to-r from-slate-500 to-gray-400
    w-full rounded-xl overflow-hidden
    `}>
      <thead className={`
      bg-violet-600 text-gray-100
      `}>
        {renderCabeçalho()}
      </thead>
      <tbody className="text-slate-700">
        {renderClientes()}
      </tbody>
    </table>
  )
}