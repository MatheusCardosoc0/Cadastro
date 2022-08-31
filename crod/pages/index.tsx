import type { NextPage } from 'next'
import { useState } from 'react'
import Cliente from '../core/clientes'
import styles from '../styles/Home.module.css'
import Button from './components/Botao'
import Formulario from './components/Formulario'
import Layaut from './components/layaut'
import Tabela from './components/tabela'

const Home: NextPage = () => {

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')
  const[cliente,setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('bob', 44, '3'),
    new Cliente('Pedro', 61, '5')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluindo...${cliente.nome}`)
  }
  
  function clienteSalvo(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }


  return (
    <div className={`
    flex
    items-center justify-center
    h-screen
    bg-gradient-to-br from-blue-600 to-violet-600
    `}>
      <Layaut titulo='Cadastro simples'>
        {visivel == 'tabela' ?
          <>
            <div className='flex justify-end'>
              <Button className='mb-2' cor='bg-green-500'
              onClick={novoCliente} >Novo cliente</Button>
            </div>

            <Tabela clientes={clientes}
              clienteSelelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>

          </> :

          <Formulario functionClick={e => setVisivel('tabela')} cliente={cliente}
          clientChange={clienteSalvo}></Formulario>}
      </Layaut>
    </div>
  )
}

export default Home
