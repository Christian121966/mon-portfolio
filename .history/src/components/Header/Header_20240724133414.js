// src/components/Header/Header.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Header/Header.scss';

function Header() {
  const { i18n } = useTranslation();

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
  const changeLanguage = (lng) => {
    if (i18n?.changeLanguage) {
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng);
    } else {
      console.error('i18n.changeLanguage is not a function');
    }
  };
<<<<<<<  770ce642-f7b0-4391-83b2-dbcfd62a1d9b  >>>>>>>

  return (
    <header className="header">
      <div className="header__language-buttons">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
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
