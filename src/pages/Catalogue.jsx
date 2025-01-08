import React from 'react';
import SearchRecipe from '../component/SearchRecipe';

const Catalogue = () => {

    const add = (a, b) => {
        return a + b;
    }
    return (
        <div className='catalogue'>
            <SearchRecipe />
            {add(1, 2)}
        </div>
    );
};

export default Catalogue;