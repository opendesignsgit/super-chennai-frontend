import React from 'react';
import { createRoot } from 'react-dom/client';
import { PageShell } from './PageShell';

export { render };

async function render(pageContext) {
  const { Page } = pageContext;
  const root = document.getElementById('root');
  createRoot(root).render(
    <PageShell>
      <Page />
    </PageShell>
  );
}
