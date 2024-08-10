// src/components/Footer/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../components/Footer/Footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p className="footer__text"> {t('© 2024 Christian Boissy.')} - {t('Tous droits réservés.')}</p>
    </footer>
  );
}

export default Footer;
