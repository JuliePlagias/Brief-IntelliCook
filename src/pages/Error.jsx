import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Page d'erreur lorsque le chemin demandé n'existe pas
 * @returns 
 */
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='error'>
            Oups ! Cette page n'existe pas 🐀 ...
            <button onClick={() => navigate('/')}>Retour à l'accueil</button>
        </div>
    );
};

export default Error;