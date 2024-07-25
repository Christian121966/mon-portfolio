// src/pages/AboutPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../AboutPage/AboutPage.scss';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('about_me')}</h2>
      <p>{t('about_description')}</p>
      <span>{t('about_text')}</span>
    </div>
  );
}

export default AboutPage;
