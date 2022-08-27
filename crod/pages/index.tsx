import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layaut from './components/layaut'

const Home: NextPage = () => {
  return (
    <div className={`
    flex
    items-center justify-center
    h-screen
    bg-gradient-to-br from-blue-600 to-violet-600
    `}>
     <Layaut titulo='Cadastro simples'>
      <span>Conteudo</span>
     </Layaut>
    </div>
  )
}

export default Home
