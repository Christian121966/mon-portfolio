// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './HomePage.scss';

const HomePage = () => {
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (phoneNumberVisible) {
      const timer = setTimeout(() => {
        setPhoneNumberVisible(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [phoneNumberVisible]);

  const showPhoneNumber = (event) => {
    event.preventDefault();
    setPhoneNumberVisible(true);
  };

  return (
    <div className="homepage">
      <header>
        <h1>{t('Mon Portfolio')}</h1>
        <span className="homepage__name">{t('Je suis Christian Boissy')}</span>
        <p className="homepage__profession">{t('Développeur web front-end')}</p>
      </header>
      <main>
        
        <div className="homepage__cards">
          <div className="card">
            <h2>
              <a href="/about" className="propos__link" aria-label="About page">
                {t('A Propos de moi')}
              </a>
            </h2>
              <span className="propos">
                Bonjour, je suis un développeur et designer web français, vivant dans les Yvelines. Passionné par le développement web, j'adore explorer de nouvelles technologies web et je suis toujours en quête de nouvelles compétences.
              </span>
          </div>
          <div className="card">
            <h2>
              <a href="/Formation" className="formation__link" aria-label="Formation">
                {t('Formation')}
              </a>
            </h2>
          </div>
          <div className="card">
            <h2>{t('projets')}</h2>
          </div>
          <div className="card">
            <h2>{t('Réseaux sociaux')}</h2>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <img className="github" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <img className="linkedin" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="card">
            <h2>{t('contact')}</h2>
            <p className="mail">
              <a href="mailto:boissychristian@gmail.com" className="contact__link" aria-label="Send email">
                {t('sendMail')}
              </a>
            </p>
            <p className="phone">
              <button className="contact_phone__link" onClick={showPhoneNumber} aria-label="Show phone number">
                {t('callMe')}
              </button>
            </p>
            {phoneNumberVisible && (
              <p id="phone">
                0669311966
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
