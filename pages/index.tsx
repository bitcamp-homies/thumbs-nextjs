import { useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BurgerMenu from '../components/navbar/BurgerMenu'
import MainNavBar from '../components/navbar/MainNavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [isBurger, burgerCycle] = useCycle(false, true)

  return (
    <>
      <MainNavBar burgered={isBurger} burger={burgerCycle} />
      {isBurger ? <BurgerMenu burgered={isBurger} burger={burgerCycle} /> : ''}
    </>
  )
}

export default Home
