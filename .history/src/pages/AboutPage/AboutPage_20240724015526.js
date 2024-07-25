// src/pages/AboutPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../AboutPage/AboutPage.scss';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('About Me')}</h2>
      <p>{t('This is the about page.')}</p>
      <span>{t('Fort de plus de 15 ans d'expérience dans le domaine de la livraison, 
	      j'ai entrepris une reconversion professionnelle pour devenir développeur 
	      web, motivé par le désir de créer des solutions technologiques adaptées 
	      à mon ancien métier. Actuellement en formation avec OpenClassrooms, 
	      je suis passionné par l'apprentissage des nouvelles technologies et par 
	      l'acquisition de compétences techniques.) 
      </span>
    </div>
  );
}

export default AboutPage;
