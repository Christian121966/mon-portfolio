// src/components/Header/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Header/Header.scss';

function Header() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header__language-buttons">
        <button
          aria-checked={currentLang === 'fr'}
          className="control__lang"
          role="switch"
          type="button"
          onClick={() => changeLanguage('fr')}
        >
          <span className="current control__lang_side">FR</span>
          <span className="control__lang_switch">
            <span></span>
          </span>
          <span className="control__lang_side">EN</span>
        </button>
      </div>
      <nav className="header__nav">
        <a href="/" className="header__link">Home</a>
        <a href="/about" className="header__link">About</a>
        <a href="/projects" className="header__link">Projects</a>
        <a href="/contact" className="header__link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
