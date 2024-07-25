// src/components/Footer/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../components/Footer/Footer.scss';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p className="footer__text">© 2024 {t('portfolio')} - {t('all_rights_reserved')}</p>
    </footer>
  );
}

export default Footer;
