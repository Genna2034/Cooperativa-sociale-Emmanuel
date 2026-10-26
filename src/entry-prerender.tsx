// Entry usato solo in fase di build (scripts/prerender.mjs) per generare
// l'HTML statico di ogni rotta, così che motori di ricerca e anteprime social
// ricevano contenuto e meta tag completi senza eseguire JavaScript.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import AppRoutes from './AppRoutes';

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );
  const h = helmetContext.helmet;
  const head = h
    ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n')
    : '';
  return { html, head };
}
