// src/pages/AboutPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../AboutPage/AboutPage.scss';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="aboutpage">
      <div className="card_about">
        <h2 className="card__title">A Propos de moi</h2>
      <p>{t('Fort de plus de 15 ans d\'expérience dans le domaine de la livraison,' +
        ' j\'ai entrepris une reconversion professionnelle pour devenir développeur web,' +
        ' motivé par le désir de créer des solutions technologiques adaptées à mon ancien métier.' +
        ' Actuellement en formation avec OpenClassrooms, je suis passionné par l\'apprentissage' +
        ' des nouvelles technologies et par l\'acquisition de compétences techniques.' +
        ' Confronté aux coûts prohibitifs de développement d\'une application dédiée aux livraisons,' +
        ' j\'ai décidé de me former pour pouvoir, un jour, réaliser cette vision.')}</p>
    </div>
    </div>
  );
};

export default AboutPage;
