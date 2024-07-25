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
      <span>
      </span>
    </div>
  );
}

export default AboutPage;
