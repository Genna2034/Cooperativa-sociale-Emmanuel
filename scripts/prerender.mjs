// Pre-rendering statico delle rotte dopo `vite build`.
// Per ogni rotta genera dist/<rotta>/index.html con HTML e meta tag completi,
// in modo che Google, Bing e le anteprime social ricevano il contenuto
// senza dover eseguire JavaScript. Vercel serve i file statici prima dei rewrite.
import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const routes = [
  '/', '/servizi', '/progetti', '/chi-siamo', '/recensioni', '/prenotazioni', '/contatti',
  '/lavora-con-noi', '/privacy', '/cookie', '/come-richiedere-adi',
  '/micronido-romagnano-sesia', '/adi-napoli', '/infermiere-domicilio-napoli',
  '/fisioterapia-domicilio-napoli', '/micronido-albisola-superiore',
  '/educativa-domiciliare-ambito-n12', '/nido-san-gemini', '/adi-portici',
  '/sad-portici', '/sad-casoria', '/nido-de-baggis-isernia',
  '/sosteniamo-il-quartiere', '/palmula-san-vitaliano'
];

await build({
  root,
  logLevel: 'warn',
  build: { ssr: 'src/entry-prerender.tsx', outDir: ssrDir, emptyOutDir: true, minify: false },
  ssr: { noExternal: ['react-helmet-async'] }
});

const { render } = await import(pathToFileURL(join(ssrDir, 'entry-prerender.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html deve contenere i segnaposto <!--app-head--> e <!--app-html-->');
}

let failures = 0;
for (const route of routes) {
  try {
    const { html, head } = render(route);
    const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
    // Due copie per ogni rotta: <rotta>/index.html (directory index) e <rotta>.html (cleanUrls)
    const outputs = route === '/'
      ? [join(dist, 'index.html')]
      : [join(dist, route.slice(1), 'index.html'), join(dist, `${route.slice(1)}.html`)];
    for (const out of outputs) {
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, page);
    }
    const title = (head.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '(nessun title)';
    console.log(`✓ ${route.padEnd(36)} ${title}`);
  } catch (err) {
    failures++;
    console.error(`✗ ${route}:`, err.message);
  }
}

if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });
if (failures) process.exit(1);
