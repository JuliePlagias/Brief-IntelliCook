import React from 'react';


const Conditions = () => {
    const conditions = [
        {
            title: "Accès au site",
            description:
                "L'accès au site est destiné à un usage personnel et non commercial. Cet accès peut être suspendu sans préavis.",
        },
        {
            title: "Propriété intellectuelle",
            description:
                "Les recettes, images, et autres contenus sont protégés par des droits d'auteur. Les utilisateurs ne peuvent pas reproduire ou distribuer ces contenus sans permission.",
        },
        {
            title: "Utilisation des recettes",
            description:
                "Les recettes sont données à titre indicatif. Veuillez faire attention aux risques d'allergies et à d'autres préoccupations alimentaires.",
        },
        {
            title: "Responsabilité de l'utilisateur",
            description:
                "L'utilisateur est responsable de son propre usage des recettes et des informations fournies.",
        },
        {
            title: "Commentaires et contenu généré par les utilisateurs",
            description:
                "Les commentaires ou contenus générés par les utilisateurs ne doivent pas être diffamatoires ou offensants.",
        },
        {
            title: "Liens externes",
            description:
                "Le site peut contenir des liens vers d'autres sites, dont le contenu n'engage pas notre responsabilité.",
        },
        {
            title: "Modification des conditions",
            description:
                "Les conditions d'utilisation peuvent être modifiées. Veuillez consulter régulièrement les mises à jour.",
        },
        {
            title: "Limitation de responsabilité",
            description:
                "Le site décline toute responsabilité concernant les dommages liés à l'utilisation des recettes ou du site.",
        },
        {
            title: "Protection des données personnelles",
            description:
                "Consultez notre politique de confidentialité pour plus d'informations sur le respect des données personnelles.",
        },
        {
            title: "Contact",
            description:
                "Pour toute question, veuillez nous contacter via les informations fournies sur le site.",
        },
    ];

    return (
        <div className="conditions-container">
            <h1 className="conditions-title">Conditions d'utilisation</h1>
            <div className="conditions-content">
                {conditions.map((condition, index) => (
                    <div key={index} className="condition-item">
                        <h2 className="condition-title">{condition.title}</h2>
                        <p className="condition-description">{condition.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Conditions;
