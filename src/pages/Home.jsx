import React from 'react'
import Bloc from '../component/home/Bloc'
import Footer from '../component/home/Footer'
import SearchingPage from '../component/SearchingPage'

/**
 * Page d'accueil
 */
const Home = () => {
  return (
    <div className='home'>
      <SearchingPage titlePage={'Accueil'} />
      <Bloc />
    </div>
  )
}

export default Home
