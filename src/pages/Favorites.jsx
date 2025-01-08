import React from 'react'
import Footer from '../component/home/Footer'
import SearchingPage from '../component/SearchingPage'

export default function Favorites() {
  return (
    <div className='favorites'>
      <SearchingPage titlePage={'Mes recettes favorites'} />
      <Footer />
    </div>
  )
}
