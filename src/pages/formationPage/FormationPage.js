import React from "react";
import { useTranslation } from 'react-i18next';
import '../../pages/formationPage/FormationPage.scss';

function FormationPage() {
    const { t } = useTranslation();
    return (
        <div className="formationpage">
            <div className="card_formation">
                {/* HTML - CSS Module */}
                <div className="module">
                    <h3>HTML - CSS</h3>
                    <ul>
                        <li>
                            <strong>{t('Utilisation des balises sémantiques avec HTML pour chaque élément d\'un site web de réservation de vacances')}:</strong>
                            <p>{t('Apprendre à utiliser des balises sémantiques pour améliorer l\'accessibilité et le référencement de votre site web.')}</p>
                        </li>
                        <li>
                            <strong>{t('Implémentation d\'un site d\'une plateforme de restauration en "mobile first" avec SASS')}:</strong>
                            <p>{t('Couvrir les techniques de conception mobile first en utilisant SASS pour garantir un site optimisé pour les appareils mobiles avant de l\'adapter aux écrans plus grands. Découvrir comment utiliser les fonctionnalités avancées de SASS comme les variables, les mixins, et les fonctions pour créer des styles modulaires et réutilisables.')}</p>
                        </li>
                    </ul>
                </div>

                {/* JavaScript Module */}
                <div className="module">
                    <h3>JavaScript</h3>
                    <ul>
                        <li>
                            <strong>{t('Réalisation d\'un carrousel du site d\'une imprimerie')}:</strong>
                            <p>{t('Créer un carrousel d\'images interactif en utilisant JavaScript.')}</p>
                        </li>
                        <li>
                            <strong>{t('Utilisation de JavaScript pour créer de manière dynamique le site web d\'un architecte')}:</strong>
                            <p>{t('Utiliser JavaScript pour générer du contenu dynamique et interactif sur un site web en communiquant avec une API.')}</p>
                        </li>
                    </ul>
                </div>

                {/* Gestion de Projet Module */}
                <div className="module">
                    <h3>Gestion de Projet</h3>
                    <ul>
                        <li>
                            <strong>{t('Planification et Exécution du Projet de Développement')}:</strong>
                            <p>{t('Gestion efficace des projets de développement web. Planifier chaque étape du projet, depuis la conception initiale jusqu\'à la livraison finale. Création des documents de spécifications clairs, établissement des délais réalistes et coordonner des différentes phases du développement. Présentation professionnelle d\'une solution au client, en mettant l\'accent sur la communication des fonctionnalités et des avantages du produit final.')}</p>
                        </li>
                    </ul>
                </div>

                {/* React Module */}
                <div className="module">
                    <h3>React</h3>
                    <ul>
                        <li>
                            <strong>{t('Développement Front-End avec React')}:</strong>
                            <p>{t('Utisation de React, une bibliothèque JavaScript populaire pour la création d\'interfaces utilisateur dynamiques. Mise en place de l\'interface utilisateur d\'une application de location de logements en utilisant des composants React. Exploration également de l\'intégration de la gestion des routes avec React-Router pour créer une navigation fluide et cohérente au sein de l\'application. Ce module couvre les meilleures pratiques pour la structuration des composants, la gestion des états et la manipulation des données.')}</p>
                        </li>
                    </ul>
                </div>

                {/* Optimisation et Debug Module */}
                <div className="module">
                    <h3>Optimisation et Debug</h3>
                    <ul>
                        <li>
                            <strong>{t('SEO et Accessibilité pour une Visibilité Maximale')}:</strong>
                            <p>{t('Enseignement des meilleures pratiques pour optimiser un site web afin d\'améliorer son classement dans les résultats de recherche Google. Etude des techniques de SEO on-page, telles que l\'utilisation appropriée des balises HTML <méta>, la création de contenu pertinent et la mise en place de stratégies de mots-clés. De plus, utilisation des principes d\'accessibilité pour assurer que le site est utilisable par tous, y compris les personnes ayant des handicaps.')}</p>
                        </li>
                        <li>
                            <strong>{t('Débogage et Maintenance de Sites Web')}:</strong>
                            <p>{t('Prise en charge et maintenance des sites web existants. Etre en mesure de reprendre le travail d\'un autre développeur pour corriger les bugs et améliorer les fonctionnalités d\'un site d\'agence événementielle en utilisant les outils de développement (DevTools) pour diagnostiquer et résoudre les problèmes techniques. Ce module met l\'accent sur les compétences nécessaires pour analyser le code, identifier les erreurs et mettre en œuvre des solutions efficaces.')}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FormationPage;
