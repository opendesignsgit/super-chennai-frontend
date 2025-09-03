export { render };

import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { PageShell } from './PageShell';

async function render(pageContext) {
  const { Page, documentProps } = pageContext;

  const title = documentProps?.title || 'Super Chennai';
  const description = documentProps?.description || '';
  const ogImage = documentProps?.ogImage || '';

  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page />
    </PageShell>
  );

  return escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`;
}
