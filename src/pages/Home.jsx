import React from 'react'
import Bloc from '../component/home/Bloc'
import Footer from '../component/home/Footer'
import SearchingPage from '../component/SearchingPage'
const Home = () => {
  return (
    <div className='home'>
      <SearchingPage titlePage={'Accueil'} />
      <Bloc />
      <Footer />
    </div>
  )
}

export default Home
