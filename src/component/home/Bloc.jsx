import React, { useContext } from 'react'
import { DarkModeContext } from '../DarkModeProvider'

const Bloc = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`home__bloc ${darkMode && 'blocDark'}`}>
      Bienvenue sur Intellicook, votre complice en cuisine ! Découvrez des
      recettes délicieuses, simples et inspirantes, conçues pour ravir vos
      papilles et sublimer vos moments gourmands. Que vous soyez chef en herbe
      ou passionné expérimenté, nous avons tout ce qu'il vous faut pour
      transformer chaque repas en une expérience inoubliable. avec Intellicook
      vous pouvez partager vos recettes de cuisine
    </div>
  )
}

export default Bloc
