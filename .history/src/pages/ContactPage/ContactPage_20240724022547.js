// src/pages/ContactPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('contact')}</h2>
      <p>{t('contact_description')}</p>
    </div>
  );
}

export default ContactPage;
