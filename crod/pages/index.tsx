import type { NextPage } from 'next'
import Cliente from '../core/clientes'
import styles from '../styles/Home.module.css'
import Layaut from './components/layaut'
import Tabela from './components/tabela'

const Home: NextPage = () => {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('bob', 44, '3'),
    new Cliente('Pedro',61, '5')
  ]

  function clienteSelecionado(cliente:Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente:Cliente){
    console.log(`Excluindo...${cliente.nome}`)
  }


  return (
    <div className={`
    flex
    items-center justify-center
    h-screen
    bg-gradient-to-br from-blue-600 to-violet-600
    `}>
     <Layaut titulo='Cadastro simples'>
      <Tabela clientes={clientes} 
      clienteSelelecionado={clienteSelecionado}
      clienteExcluido={clienteExcluido}></Tabela>
     </Layaut>
    </div>
  )
}

export default Home
