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
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [phoneNumberVisible]);

  const showPhoneNumber = (event) => {
    event.preventDefault();
    setPhoneNumberVisible(true);
  };

  return (
    <div className="homepage">
      <h2>{t('Mon Portfolio')}</h2>
      <span className='homepage__name'>{t('Je suis Christian Boissy')}</span>
      <p className="homepage__profession">{t('Développeur web front-end')}</p>
      <div className="homepage__cards">
        <div className="card">
          <h3>
            {t('about')}
            <a href="/about" className="propos__link">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </h3>
          <span className='propos'>
            Bonjour, je suis un développeur et designer web français, vivant dans les Yvelines. Passionné par le développement web, j'adore explorer de nouvelles technologies web et je suis toujours en quête de nouvelles compétences.
          </span>
        </div>
        <div className="card">
          <h3>{t('socials')}</h3>
          <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer">
            <img className='github' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
            <img className='linkedin' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/>
          </a>
        </div>
        <div className="card">
          <h3>{t('projects')}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-html5" viewBox="0 0 16 16">
          <path d="M14.34 14.34H1.66V1.66h12.68V14.34zm-13.34-1.34h13.34V1.66H1.01V13zm14.34-1.34H1.66V1.66h12.68V13zm-13.34-1.34h13.34V1.66H1.01V13zm14.34-1.34H1.66V1.66h12.68V13zm-13.34-1.34h13.34V1.66H1.01V13z"/>
        </svg>
          <a href="/projects" className="propos__link">
        </div>
        <div className="card">
          <h3>{t('contact')}</h3>
          <p className='mail'>
            {t('sendMail')}
            <a href="mailto:boissychristian@gmail.com" className="contact__link">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </p>
          <p className='phone'>
            {t('callMe')}
            <button className="contact_phone__link" onClick={showPhoneNumber}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </p>
          {phoneNumberVisible && (
            <p id="phone">
              0669311966
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
