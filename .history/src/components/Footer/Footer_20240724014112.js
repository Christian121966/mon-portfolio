// src/components/Footer/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../components/Footer/Footer.scss';

function Footer() {
  return (
    <footer>
      <p className="footer__text">© 2024 Mon Portfolio - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
