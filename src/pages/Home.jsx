import Bloc from '../component/home/Bloc'
import SearchingPage from '../component/SearchingPage'
import RandomFavorites from '../component/RandomFavorites' 

/**
 * Page d'accueil
 */
const Home = () => {

  return (
    <div className='home'>
      <SearchingPage titlePage={'Accueil'} />
      <h2>Quelques favoris</h2>
      <div className='recipes'>
        <RandomFavorites number={3}/>
      </div>
      <Bloc />
    </div>
  )
}

export default Home
