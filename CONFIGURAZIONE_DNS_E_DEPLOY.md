# 🚀 Guida Configurazione DNS e Pubblicazione

## 📋 Record DNS da Configurare

Per pubblicare il sito su **https://cooperativaemmanuel.it/** devi configurare questi record DNS presso il tuo provider:

### 1. Record A (per il dominio principale)
```
Type: A
Name: @
Value: [IP del tuo hosting/Netlify]
TTL: 3600
```

### 2. Record CNAME (per www)
```
Type: CNAME
Name: www
Value: cooperativaemmanuel.it
TTL: 3600
```

### 3. Per Netlify (se usi Netlify)
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: [tuo-sito].netlify.app
TTL: 3600
```

## 🔧 Configurazione Netlify

1. **Accedi alla dashboard Netlify**
2. Vai su **Site settings → Domain management**
3. Clicca su **Add custom domain**
4. Inserisci: `cooperativaemmanuel.it`
5. Verifica il dominio
6. Attiva **HTTPS automatico** (Let's Encrypt)
7. Configura redirect da `www` a dominio principale

## 📁 File Creati

### File `_redirects`
Il file `public/_redirects` è stato creato per:
- ✅ Redirect automatico da Netlify a dominio principale
- ✅ Redirect da HTTP a HTTPS
- ✅ Redirect da www a non-www
- ✅ Gestione SPA per React Router

## 🔍 Verifica Indicizzazione Google

### 1. Google Search Console
1. Vai su [Google Search Console](https://search.google.com/search-console)
2. Aggiungi proprietà: `https://cooperativaemmanuel.it`
3. Verifica proprietà tramite:
   - Meta tag (già presente in index.html - linea 209)
   - File HTML
   - Google Analytics
   - DNS TXT record

### 2. Invia Sitemap
1. Nella Search Console, vai su **Sitemap**
2. Invia: `https://cooperativaemmanuel.it/sitemap.xml`
3. Attendi l'indicizzazione (24-48 ore)

### 3. Test URL Inspection
1. Usa lo strumento **Controllo URL**
2. Testa: `https://cooperativaemmanuel.it`
3. Richiedi indicizzazione manuale

### 4. Verifica robots.txt
Testa su: `https://cooperativaemmanuel.it/robots.txt`
Deve essere accessibile e contenere il riferimento alla sitemap.

## 🎯 Checklist Post-Pubblicazione

- [ ] Verifica che https://cooperativaemmanuel.it/ funzioni
- [ ] Verifica redirect da www a dominio principale
- [ ] Verifica redirect da HTTP a HTTPS
- [ ] Test su Google PageSpeed Insights
- [ ] Test su Google Mobile-Friendly Test
- [ ] Invia sitemap a Google Search Console
- [ ] Invia sitemap a Bing Webmaster Tools
- [ ] Verifica Schema.org su [Schema Markup Validator](https://validator.schema.org/)
- [ ] Test rich snippets su [Rich Results Test](https://search.google.com/test/rich-results)

## 📊 Strumenti di Verifica SEO

1. **Google Search Console**: https://search.google.com/search-console
2. **Google PageSpeed Insights**: https://pagespeed.web.dev/
3. **Schema Markup Validator**: https://validator.schema.org/
4. **Rich Results Test**: https://search.google.com/test/rich-results
5. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
6. **Bing Webmaster Tools**: https://www.bing.com/webmasters

## 🔐 Certificato SSL

Con Netlify, il certificato SSL (HTTPS) viene configurato automaticamente tramite Let's Encrypt:
- Attivazione automatica dopo configurazione DNS
- Rinnovo automatico ogni 90 giorni
- Nessuna configurazione manuale richiesta

## ⏱️ Tempi di Propagazione

- **DNS**: 24-48 ore (può variare)
- **SSL**: 1-24 ore dopo propagazione DNS
- **Indicizzazione Google**: 3-7 giorni per prime pagine
- **Posizionamento completo**: 2-4 settimane

## 🆘 Risoluzione Problemi

### Il sito non si apre
- Verifica propagazione DNS: https://dnschecker.org/
- Controlla configurazione Netlify
- Verifica che il dominio sia attivo

### HTTPS non funziona
- Attendi 24 ore dalla configurazione DNS
- Verifica in Netlify: Domain settings → HTTPS
- Prova a rinnovare certificato manualmente

### Redirect non funzionano
- Verifica file `_redirects` sia in `public/`
- Controlla sintassi file `_redirects`
- Svuota cache browser (Ctrl+Shift+R)

## 📞 Supporto

Per problemi con la configurazione:
1. Verifica documentazione provider DNS
2. Consulta [Netlify Docs](https://docs.netlify.com/)
3. Contatta supporto tecnico del provider dominio
