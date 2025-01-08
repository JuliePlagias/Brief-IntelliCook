import React from 'react'
import SearchRecipe from '../component/SearchRecipe'
import Bloc from '../component/home/Bloc'
import Footer from '../component/home/Footer'
const Home = () => {
  return (
    <div className='home'>
      <SearchRecipe />
      <Bloc />
      <Footer />
    </div>
  )
}

export default Home
