import React, { useState } from 'react';
import SearchRecipe from '../component/SearchRecipe';
import Recipes from '../component/Recipes';
import Footer from '../component/home/Footer';
const Catalogue = () => {
    const [search, setSearch] = useState('')


    return (
        <div className='catalogue'>
            <SearchRecipe search={search} setSearch={setSearch} />
            <h1 className='catalogue__title'>Catalogue</h1>
            <Recipes search={search} />
            <Footer className={'catalogue__footer'}></Footer>
        </div>

export default Catalogue
