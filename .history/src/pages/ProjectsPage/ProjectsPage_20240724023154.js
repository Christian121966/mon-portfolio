// src/pages/ProjectsPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('projects_page')}</h2>
      <p>{t('projects_description')}</p>
    </div>
  );
}

export default ProjectsPage;
