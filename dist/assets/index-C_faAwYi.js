import { r as reactExports, a as reactDomExports, u as useLocation, L as Link, R as React, b as Routes, c as Route, B as BrowserRouter } from "./vendor-YUcNgLQ_.js";
import { X, M as Menu, P as Phone, a as Mail, H as Heart, b as MapPin, S as Settings, E as Eye, V as Volume2, c as MessageCircle, d as Send, e as ExternalLink, C as Calendar, A as ArrowRight, f as CheckCircle, g as AlertCircle, h as Shield, i as Award, U as Users, j as Stethoscope, B as BookOpen, k as HeartHandshake, l as Home, m as ChevronRight, G as GraduationCap, T as Target, n as Briefcase, Q as Quote, o as Plus, p as Star, q as Clock, r as User, s as Upload, F as FileText, t as Cookie, u as BarChart, v as ArrowLeft, w as Baby, x as Sparkles, y as TreePine, z as Sun, D as Music, I as Palette, J as Globe, K as Activity, L as TrendingUp, N as Handshake, O as Compass, R as Hammer, W as ChefHat, Y as Wrench, Z as LifeBuoy, _ as HeartPulse, $ as Monitor, a0 as Sprout, a1 as Dumbbell, a2 as Video, a3 as Printer, a4 as Landmark, a5 as Accessibility, a6 as Mic, a7 as Drama, a8 as Camera, a9 as Wheat, aa as Database, ab as PartyPopper } from "./icons-CrX2l0S6.js";
import { H as Helmet, a as HelmetProvider } from "./helmet-CbYJNCLo.js";
import { e as emailjs } from "./emailjs-kHGuofjF.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var hydrateRoot;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  hydrateRoot = m.hydrateRoot;
}
const CONTACT_INFO = {
  phone: "+39 081 7877064",
  email: "cooperativa.emmanuel@outlook.it"
};
const STATS = [
  {
    id: 1,
    value: "185",
    label: "Persone assistite"
  },
  {
    id: 2,
    value: "Accreditata",
    label: "Regione Campania per servizi ADI"
  },
  {
    id: 3,
    value: "15+",
    label: "Anni di esperienza nel settore sociosanitario"
  },
  {
    id: 4,
    value: "100%",
    label: "Presente nel cuore di Napoli e attiva in tutta la regione"
  },
  {
    id: 5,
    value: "ISO 9001",
    label: "Certificazione di qualità ottenuta"
  }
];
const ADI_SERVICES = [
  "Visite mediche domiciliari specialistiche",
  "Assistenza infermieristica professionale",
  "Fisioterapia domiciliare",
  "Fornitura di ausili sanitari",
  "Supporto psicologico per paziente e famiglia",
  "Educazione sanitaria al caregiver",
  "Somministrazione farmaci"
];
const EXTRA_SERVICES = [
  "Assistenza alla persona (igiene, pasti, deambulazione)",
  "Compagnia e sorveglianza domiciliare",
  "Supporto per commissioni quotidiane",
  "Supporto psicologico e counseling familiare",
  "Piani personalizzati per ogni esigenza familiare"
];
const EDUCATIONAL_SERVICES = [
  "Servizi educativi e specialistici scolastici",
  "Servizi pre e post scuola",
  "Tutoraggio educativo e doposcuola",
  "Supporto didattico personalizzato",
  "Supporto psicologico per studenti e famiglie",
  "Formazione extrascolastica per prevenire la dispersione",
  "Laboratori creativi, didattici e sportivi",
  "Attività di animazione culturale e del tempo libero",
  "Campi gioco e campi educativi",
  "Supporto scolastico per studenti stranieri",
  "Assistenza linguistica per studenti stranieri",
  "Gestione di spazi per bambini e ludoteche",
  "Comunità educative e case famiglia",
  "Gestione di nidi e micronidi",
  "Partecipazione a procedure per gestione asili nido"
];
const MobileNavigation = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const location = useLocation();
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    setIsOpen(false);
  }, [location]);
  reactExports.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servizi", label: "Servizi" },
    { href: "/progetti", label: "Progetti" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/contatti", label: "Contatti" },
    { href: "/recensioni", label: "Recensioni" },
    { href: "/prenotazioni", label: "Prenota" }
  ];
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" : "bg-white/70 backdrop-blur-sm py-4"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 safe-area-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/images/logo_emmanuel_new_ok.png",
                alt: "Cooperativa Sociale Emmanuel",
                className: `object-contain transition-all duration-300 hover:scale-105 ${isScrolled ? "h-10 w-10" : "h-12 w-12"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-lg font-bold text-gray-800", children: "Emmanuel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className: "p-2 text-gray-700 hover:text-blue-600 transition-colors touch-target min-h-[44px] min-w-[44px] flex items-center justify-center",
              "aria-label": "Toggle mobile menu",
              "aria-expanded": isOpen,
              children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }) })
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
        onClick: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: `fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full safe-area-padding safe-area-top safe-area-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/images/logo_emmanuel_new_ok.png",
                  alt: "Emmanuel",
                  className: "h-8 w-8 object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-bold text-gray-800", children: "Emmanuel" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "p-2 text-gray-500 hover:text-gray-700 touch-target min-h-[44px] min-w-[44px] flex items-center justify-center",
                "aria-label": "Chiudi menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto ios-scroll", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: item.href,
                className: `block px-4 py-4 text-lg font-medium transition-colors mobile-spacing touch-target min-h-[44px] flex items-center ${isActive(item.href) ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`,
                children: item.label
              },
              item.href
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 border-t bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/lavora-con-noi",
                className: "block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 mobile-button min-h-[44px] flex items-center justify-center",
                children: "Lavora Con Noi"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `tel:${CONTACT_INFO.phone}`,
                  className: "flex items-center text-gray-600 hover:text-blue-600 transition-colors touch-target min-h-[44px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mr-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: CONTACT_INFO.phone })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `mailto:${CONTACT_INFO.email}`,
                  className: "flex items-center text-gray-600 hover:text-blue-600 transition-colors touch-target min-h-[44px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm break-all", children: CONTACT_INFO.email })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 text-center", children: "© 2024 Cooperativa Emmanuel" }) })
          ] })
        ] })
      }
    )
  ] });
};
const Header = () => {
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const location = useLocation();
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navItems = [
    { href: "/servizi", label: "Servizi" },
    { href: "/progetti", label: "Progetti" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/contatti", label: "Contatti" },
    { href: "/recensioni", label: "Recensioni" },
    { href: "/prenotazioni", label: "Prenota" }
  ];
  const isActive = (path) => location.pathname === path;
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MobileNavigation, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" : "bg-white/70 backdrop-blur-sm py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/logo_emmanuel_new_ok.png",
            alt: "Cooperativa Sociale Emmanuel Napoli",
            className: `object-contain transition-all duration-300 hover:scale-105 ${isScrolled ? "h-12 w-12" : "h-16 w-16"}`
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center justify-center flex-1 mx-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-8", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.href,
            className: `transition-colors font-medium text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-blue-600 after:transition-all ${isActive(item.href) ? "text-blue-600 after:w-full" : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"}`,
            children: item.label
          },
          item.href
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/lavora-con-noi",
            className: "px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95 whitespace-nowrap",
            children: "Sei un Professionista Sanitario?"
          }
        ) })
      ] }) })
    }
  );
};
const HIDDEN_CLASS = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "translate-x-8 opacity-0",
  right: "-translate-x-8 opacity-0",
  fade: "opacity-0"
};
const FadeInSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}) => {
  const elementRef = reactExports.useRef(null);
  const [hidden, setHidden] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const rect = element.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) return;
    setHidden(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: elementRef,
      className: `transition-all duration-700 ease-out ${hidden ? HIDDEN_CLASS[direction] : "translate-x-0 translate-y-0 opacity-100"} ${className}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
};
const Footer = () => {
  const footerLinks = [
    { label: "Servizi", href: "/servizi" },
    { label: "Progetti", href: "/progetti" },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Recensioni", href: "/recensioni" },
    { label: "Prenotazioni", href: "/prenotazioni" },
    { label: "Contatti", href: "/contatti" }
  ];
  const services = [
    { label: "Assistenza Domiciliare Integrata (ADI) Napoli", href: "/adi-napoli" },
    { label: "Come richiedere l'ADI in Campania", href: "/come-richiedere-adi" },
    { label: "Infermiere a domicilio Napoli", href: "/infermiere-domicilio-napoli" },
    { label: "Fisioterapia domiciliare Napoli", href: "/fisioterapia-domicilio-napoli" },
    { label: "Servizi educativi e infanzia", href: "/servizi" },
    { label: "Progetti e territori", href: "/progetti" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-gray-900 text-gray-300 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/logo_emmanuel_new_ok.png",
              alt: "Logo Cooperativa Sociale Emmanuel Napoli",
              className: "h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white", children: "Emmanuel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "La Cooperativa Sociale Emmanuel è al servizio di chi ha più bisogno, da oltre 15 anni a Napoli e in Campania. La Cooperativa Sociale Emmanuel è accreditata con la Regione Campania per servizi ADI." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-400 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Con amore e professionalità dal 2010" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-blue-400 font-medium", children: "Accreditata Regione Campania" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-blue-400 font-medium", children: "Certificazione ISO 9001" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Link Rapidi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: footerLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.href,
            className: "text-gray-400 hover:text-blue-400 transition-colors",
            children: link.label
          }
        ) }, link.href)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "I Nostri Servizi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: service.href, className: "text-gray-400 text-sm hover:text-blue-400 transition-colors", children: service.label }) }, service.href + service.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Contatti Cooperativa Sociale Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-blue-400 mr-2 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-gray-400 hover:text-blue-400 transition-colors",
                children: CONTACT_INFO.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-blue-400 mr-2 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-gray-400 hover:text-blue-400 transition-colors break-all",
                children: CONTACT_INFO.email
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-blue-400 mr-2 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "Napoli, Campania - Italia" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-white font-medium mb-2", children: "Orari di Apertura" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-400 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Lun-Ven: 9:00-18:00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Sabato: 9:00-13:00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Domenica: Chiuso" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "fade", delay: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-800 pt-8 mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-500 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/logo_emmanuel_new_ok.png",
            alt: "Logo Cooperativa Sociale Emmanuel",
            className: "h-6 w-6 object-contain"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Cooperativa Sociale Emmanuel. Tutti i diritti riservati."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-blue-400 transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookie", className: "hover:text-blue-400 transition-colors", children: "Cookie Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cooperativa Sociale secondo Legge 381/91" })
      ] })
    ] }) }) })
  ] }) });
};
const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [fontSize, setFontSize] = reactExports.useState(100);
  const [highContrast, setHighContrast] = reactExports.useState(false);
  const [isReading, setIsReading] = reactExports.useState(false);
  const adjustFontSize = (increment) => {
    const newSize = Math.max(80, Math.min(150, fontSize + increment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast", !highContrast);
  };
  const toggleTextToSpeech = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "it-IT";
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };
  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setIsReading(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("high-contrast");
    window.speechSynthesis.cancel();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          .high-contrast {
            filter: contrast(150%) brightness(120%);
          }
          .high-contrast * {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #fff !important;
          }
          .high-contrast img {
            filter: contrast(120%) brightness(80%);
          }
        ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
          "aria-label": "Apri strumenti di accessibilità",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-6 w-6" })
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Accessibilità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Dimensione testo: ",
              fontSize,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => adjustFontSize(-10),
                  className: "px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm",
                  children: "A-"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => adjustFontSize(10),
                  className: "px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm",
                  children: "A+"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: toggleHighContrast,
              className: `w-full flex items-center gap-2 p-2 rounded ${highContrast ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
                "Alto contrasto"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: toggleTextToSpeech,
              className: `w-full flex items-center gap-2 p-2 rounded ${isReading ? "bg-green-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
                isReading ? "Ferma lettura" : "Leggi pagina"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: resetSettings,
              className: "w-full p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm",
              children: "Ripristina impostazioni"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const CookieConsent = () => {
  const [showConsent, setShowConsent] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted"
      });
    }
  };
  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };
  if (!showConsent) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col md:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti la nostra",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy", className: "text-blue-400 hover:text-blue-300 underline", children: "politica sui cookie" }),
      "."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: rejectCookies,
          className: "px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors",
          children: "Rifiuta"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: acceptCookies,
          className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors",
          children: "Accetta"
        }
      )
    ] })
  ] }) });
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const ChatWidget = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      id: 1,
      text: "Ciao! Sono l'assistente virtuale della Cooperativa Emmanuel. Come posso aiutarti oggi?",
      isUser: false,
      timestamp: /* @__PURE__ */ new Date()
    }
  ]);
  const [inputText, setInputText] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const scrollToBottom = () => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  reactExports.useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const quickReplies = [
    "Informazioni sui servizi ADI",
    "Come prenotare una visita",
    "Costi e tariffe",
    "Orari di apertura",
    "Contatti diretti"
  ];
  const autoResponses = {
    "informazioni sui servizi adi": "La Cooperativa Emmanuel offre servizi di Assistenza Domiciliare Integrata accreditati con la Regione Campania. I servizi includono visite mediche, assistenza infermieristica, fisioterapia e supporto psicologico. Vuoi maggiori dettagli su un servizio specifico?",
    "come prenotare una visita": "Puoi prenotare una visita in diversi modi: 1) Online tramite il nostro modulo di prenotazione 2) Chiamando il +39 081 7877064 3) Inviando una email a cooperativa.emmanuel@outlook.it. La prima consulenza è sempre gratuita!",
    "costi e tariffe": "I servizi ADI sono gratuiti per gli aventi diritto con prescrizione medica. Per i servizi privati, offriamo tariffe competitive e trasparenti. Contattaci per un preventivo personalizzato gratuito.",
    "orari di apertura": "Siamo aperti dal Lunedì al Venerdì dalle 9:00 alle 18:00 e il Sabato dalle 9:00 alle 13:00. Per emergenze, abbiamo un servizio di reperibilità 24/7.",
    "contatti diretti": `Puoi contattarci direttamente: 📞 ${CONTACT_INFO.phone} ✉️ ${CONTACT_INFO.email}. Siamo sempre disponibili per aiutarti!`
  };
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let response = "Grazie per il tuo messaggio! Per una risposta più dettagliata, ti consiglio di contattarci direttamente al +39 081 7877064 o via email. Il nostro team sarà felice di aiutarti!";
      for (const [key, value] of Object.entries(autoResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  const handleQuickReply = (reply) => {
    setInputText(reply);
    handleSendMessage();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-20 right-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500",
        "aria-label": "Apri chat di supporto",
        children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
      }
    ) }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-32 right-4 w-80 max-w-[calc(100vw-2rem)] h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-600 text-white p-4 rounded-t-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Supporto Emmanuel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-100", children: "Di solito rispondiamo subito" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "text-white hover:text-blue-200 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
        messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex ${message.isUser ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `max-w-[80%] p-3 rounded-lg ${message.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: message.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-gray-500"}`, children: message.timestamp.toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit"
                  }) })
                ]
              }
            )
          },
          message.id
        )),
        isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 text-gray-800 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
      ] }),
      messages.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Domande frequenti:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quickReplies.slice(0, 3).map((reply, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleQuickReply(reply),
            className: "block w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors",
            children: reply
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: inputText,
              onChange: (e) => setInputText(e.target.value),
              onKeyPress: handleKeyPress,
              placeholder: "Scrivi un messaggio...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleSendMessage,
              disabled: !inputText.trim(),
              className: "p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-4 mt-3 pt-3 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${CONTACT_INFO.phone}`,
              className: "flex items-center text-xs text-blue-600 hover:text-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 mr-1" }),
                "Chiama"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${CONTACT_INFO.email}`,
              className: "flex items-center text-xs text-blue-600 hover:text-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 mr-1" }),
                "Email"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const HeroSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/closeup-support-hands.jpg",
          alt: "Cooperativa Sociale Emmanuel Napoli - Assistenza domiciliare",
          className: "w-full h-full object-cover",
          loading: "eager",
          fetchPriority: "high"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gray-900/40 mix-blend-multiply" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight", children: "Assistenza Domiciliare Integrata a Napoli" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl md:text-2xl text-gray-100 my-8 max-w-3xl mx-auto leading-relaxed", children: "Cooperativa Sociale Emmanuel: ADI accreditata dalla Regione Campania, con infermieri, fisioterapisti e OSS a domicilio per anziani e persone con disabilità, gratuita tramite ASL per gli aventi diritto. Tante famiglie hanno già scelto la Cooperativa Sociale Emmanuel per il loro benessere." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium mb-6 shadow-lg", children: "Accreditata Regione Campania • Certificazione ISO 9001" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contatti",
            className: "w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-colors shadow-lg",
            children: "Richiedi un consulto gratuito"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-blue-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-white hover:text-blue-200 transition-colors",
                children: [
                  "Chiama ora: ",
                  CONTACT_INFO.phone
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-blue-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-white hover:text-blue-200 transition-colors",
                children: [
                  "Scrivici: ",
                  CONTACT_INFO.email
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
};
const StatsSection = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 lg:order-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6", children: "Una realtà concreta, radicata sul territorio campano" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8", children: STATS.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FadeInSection,
        {
          direction: "up",
          delay: index * 150,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:bg-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-blue-600 mb-1", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: stat.label })
          ] })
        },
        stat.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/medium-shot-women-posing-together.jpg",
          alt: "Team professionale Emmanuel",
          className: "rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg",
          alt: "Assistenza domiciliare qualificata",
          className: "rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] mt-8"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/closeup-support-hands.jpg",
          alt: "Supporto e cura",
          className: "rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] -mt-8"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/logo_emmanuel_new_ok.png",
          alt: "Logo Emmanuel",
          className: "rounded-lg shadow-xl w-full h-48 object-contain bg-white p-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        }
      )
    ] }) }) })
  ] }) }) });
};
const EMAILJS_SERVICE_ID = "service_emmanuel";
const EMAILJS_TEMPLATE_ID_CONTACT = "template_contact";
const EMAILJS_TEMPLATE_ID_BOOKING = "template_booking";
const EMAILJS_TEMPLATE_ID_CAREER = "template_career";
const EMAILJS_TEMPLATE_ID_NEWSLETTER = "template_newsletter";
const EMAILJS_PUBLIC_KEY = "WDkpZib98mtjthirk";
emailjs.init(EMAILJS_PUBLIC_KEY);
const sendEmail = async ({ type, data }) => {
  try {
    let templateId;
    switch (type) {
      case "contact":
        templateId = EMAILJS_TEMPLATE_ID_CONTACT;
        break;
      case "booking":
        templateId = EMAILJS_TEMPLATE_ID_BOOKING;
        break;
      case "career":
        templateId = EMAILJS_TEMPLATE_ID_CAREER;
        break;
      case "newsletter":
        templateId = EMAILJS_TEMPLATE_ID_NEWSLETTER;
        break;
      default:
        throw new Error("Tipo di email non supportato");
    }
    const templateParams = {
      // Destinatario (la tua email)
      to_email: "cooperativa.emmanuel@outlook.it",
      to_name: "Cooperativa Sociale Emmanuel",
      // Dati del mittente
      from_name: data.name || data.firstName + " " + data.lastName || "Newsletter Subscriber",
      from_phone: data.phone || "Non fornito",
      from_email: data.email || "Non fornita",
      // Tipo di richiesta
      request_type: type === "contact" ? "Richiesta di Contatto" : type === "booking" ? "Prenotazione Appuntamento" : type === "career" ? "Candidatura Lavoro" : "Iscrizione Newsletter",
      // Tutti i dati del form
      ...data,
      // Data e ora di invio
      sent_date: (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT"),
      sent_time: (/* @__PURE__ */ new Date()).toLocaleTimeString("it-IT")
    };
    console.log("Invio email con parametri:", templateParams);
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams
    );
    if (response.status !== 200) {
      throw new Error(`Errore EmailJS: ${response.status} - ${response.text}`);
    }
    console.log("✅ Email inviata con successo:", response);
    return response;
  } catch (error) {
    console.error("❌ Errore invio email:", error);
    sendEmailFallback({ type, data });
    throw error;
  }
};
const sendEmailFallback = ({ type, data }) => {
  let subject;
  let body;
  switch (type) {
    case "contact":
      subject = "Richiesta di Contatto - Cooperativa Emmanuel";
      body = `NUOVA RICHIESTA DI CONTATTO

`;
      body += `Nome: ${data.name}
`;
      body += `Telefono: ${data.phone}
`;
      body += `
Messaggio:
${data.message}
`;
      break;
    case "booking":
      subject = "Prenotazione Appuntamento - Cooperativa Emmanuel";
      const bookingData = data;
      body = `NUOVA PRENOTAZIONE

`;
      body += `Nome: ${bookingData.name}
`;
      body += `Telefono: ${bookingData.phone}
`;
      body += `Email: ${bookingData.email || "Non fornita"}
`;
      body += `Servizio richiesto: ${bookingData.service}
`;
      body += `Data preferita: ${bookingData.preferredDate}
`;
      body += `Orario preferito: ${bookingData.preferredTime}
`;
      if (bookingData.notes) {
        body += `
Note aggiuntive:
${bookingData.notes}
`;
      }
      break;
    case "career":
      subject = "Nuova Candidatura - Cooperativa Emmanuel";
      const careerData = data;
      body = `NUOVA CANDIDATURA

`;
      body += `Nome: ${careerData.name}
`;
      body += `Email: ${careerData.email}
`;
      body += `Telefono: ${careerData.phone}
`;
      body += `Professione: ${careerData.profession}
`;
      body += `Esperienza: ${careerData.experience}
`;
      body += `Disponibilità: ${careerData.availability}
`;
      body += `Patente: ${careerData.hasLicense}
`;
      body += `Mezzo proprio: ${careerData.hasTransport}
`;
      body += `CV allegato: ${careerData.cvAttached}
`;
      body += `
Lettera di motivazione:
${careerData.motivation}
`;
      break;
    case "newsletter":
      subject = "Nuova Iscrizione Newsletter - Cooperativa Emmanuel";
      const newsletterData = data;
      body = `NUOVA ISCRIZIONE NEWSLETTER

`;
      body += `Email: ${newsletterData.email}
`;
      body += `Data iscrizione: ${newsletterData.subscriptionDate}
`;
      break;
  }
  body += `
---
Inviato il: ${(/* @__PURE__ */ new Date()).toLocaleString("it-IT")}
`;
  body += `Dal sito: ${window.location.href}`;
  const mailtoLink = `mailto:cooperativa.emmanuel@outlook.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
const HEALTH_ARTICLES = [
  {
    id: 1,
    title: "Assistenza Domiciliare Integrata: Guida Completa ai Servizi ADI in Campania",
    excerpt: "Tutto quello che devi sapere sui servizi di Assistenza Domiciliare Integrata nella regione Campania, requisiti e modalità di accesso.",
    date: "2024-01-15",
    category: "Servizi Sanitari",
    readTime: "5 min",
    external: true,
    url: "https://www.regione.campania.it/regione/it/tematiche/sanita-e-sociale/assistenza-domiciliare",
    image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
  },
  {
    id: 2,
    title: "Diritti degli Anziani: Normative e Tutele in Campania",
    excerpt: "Le normative regionali per la tutela degli anziani e delle persone fragili, con focus sui diritti all'assistenza domiciliare.",
    date: "2024-01-10",
    category: "Normative",
    readTime: "7 min",
    external: true,
    url: "https://www.regione.campania.it/regione/it/tematiche/sanita-e-sociale/anziani",
    image: "/images/medium-shot-women-posing-together.jpg"
  },
  {
    id: 3,
    title: "Prevenzione e Benessere: Consigli per l'Assistenza Domiciliare",
    excerpt: "Strategie e consigli pratici per mantenere il benessere fisico e mentale durante l'assistenza domiciliare.",
    date: "2024-01-05",
    category: "Benessere",
    readTime: "4 min",
    external: false,
    image: "/images/closeup-support-hands.jpg",
    content: `
      <h3>Importanza della Prevenzione</h3>
      <p>La prevenzione è fondamentale nell'assistenza domiciliare. Ecco alcuni consigli pratici:</p>
      <ul>
        <li>Mantenere una routine quotidiana strutturata</li>
        <li>Garantire un'alimentazione equilibrata</li>
        <li>Promuovere l'attività fisica adeguata</li>
        <li>Curare l'igiene personale e ambientale</li>
        <li>Stimolare le attività cognitive</li>
      </ul>
      
      <h3>Supporto Emotivo</h3>
      <p>L'aspetto emotivo è cruciale per il benessere della persona assistita:</p>
      <ul>
        <li>Mantenere i contatti sociali</li>
        <li>Rispettare le preferenze personali</li>
        <li>Coinvolgere la famiglia nelle decisioni</li>
        <li>Offrire ascolto e comprensione</li>
      </ul>
    `
  }
];
const BlogSection = () => {
  const handleArticleClick = (article) => {
    if (article.external && article.url) {
      window.open(article.url, "_blank", "noopener,noreferrer");
    } else {
      console.log("Apertura articolo interno:", article.title);
    }
  };
  const handleNewsletterSignup = async () => {
    try {
      await sendEmail({
        type: "newsletter",
        data: {
          email: "richiesta-newsletter@cooperativa-emmanuel.it",
          subscriptionDate: (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT")
        }
      });
      alert("Richiesta di iscrizione inviata! Ti contatteremo per completare l'iscrizione.");
    } catch (error) {
      console.error("Errore iscrizione newsletter:", error);
      window.open("mailto:cooperativa.emmanuel@outlook.it?subject=Iscrizione Newsletter&body=Vorrei iscrivermi alla newsletter della Cooperativa Emmanuel.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Risorse e Informazioni" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Articoli informativi su salute, normative e consigli per l'assistenza domiciliare" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: HEALTH_ARTICLES.map((article, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: article.image,
          alt: article.title,
          className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium", children: article.category }),
          article.external && /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 text-gray-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: article.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(article.date).toLocaleDateString("it-IT") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.readTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleArticleClick(article),
            className: "mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors",
            children: [
              "Leggi di più",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] }) }, article.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/medium-shot-women-posing-together.jpg",
          alt: "Newsletter",
          className: "w-full h-32 object-cover rounded-lg mb-6"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Vuoi rimanere aggiornato sulle ultime novità in ambito sanitario?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleNewsletterSignup,
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
          children: "Iscriviti alla Newsletter"
        }
      )
    ] }) }) })
  ] }) });
};
const NewsletterSection = () => {
  const [email, setEmail] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await sendEmail({
        type: "newsletter",
        data: {
          email,
          subscriptionDate: (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT")
        }
      });
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5e3);
    } catch (error2) {
      console.error("Errore iscrizione newsletter:", error2);
      setError("Si è verificato un errore durante l'iscrizione. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-green-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-16 w-16 text-green-600 mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-4", children: "Iscrizione Completata!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Grazie per esserti iscritto alla nostra newsletter. Riceverai aggiornamenti sui nostri servizi e consigli utili per l'assistenza domiciliare." })
    ] }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-12 w-12 text-blue-200 mx-auto mb-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Rimani Aggiornato" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-8", children: "Iscriviti alla nostra newsletter per ricevere consigli utili, aggiornamenti sui servizi e novità dal mondo dell'assistenza domiciliare." }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 bg-red-100 border border-red-200 rounded-md flex items-center justify-center gap-3 max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "h-5 w-5 text-red-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700 text-sm", children: error })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "La tua email",
            className: "flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 text-gray-800"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 disabled:bg-gray-300 transition-colors whitespace-nowrap",
            children: isSubmitting ? "Iscrizione..." : "Iscriviti"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 text-sm mt-4", children: "Niente spam, solo contenuti di valore. Puoi disiscriverti in qualsiasi momento." })
    ] })
  ] }) }) }) });
};
const AccreditationSection = () => {
  const accreditations = [
    {
      title: "Accreditamento Regione Campania",
      description: "Cooperativa accreditata per l'erogazione di servizi di Assistenza Domiciliare Integrata (ADI) secondo le normative regionali della Campania.",
      authority: "Regione Campania - Settore Sanità",
      validFrom: "",
      link: "https://aslnapoli1centro.portaleamministrazionetrasparente.it/archivio28_provvedimenti-amministrativi_0_288592_725_1.html",
      logo: "/images/logo_emmanuel_new_ok.png"
    },
    {
      title: "Certificazione ISO 9001",
      description: "Sistema di gestione qualità certificato secondo gli standard internazionali per garantire l'eccellenza nei servizi socio-sanitari.",
      authority: "Ente Certificatore Accreditato",
      validFrom: "2020",
      logo: "/images/logo_emmanuel_new_ok.png"
    },
    {
      title: "Autorizzazione ASL Napoli 1 Centro",
      description: "Autorizzazione per l'erogazione di servizi sanitari domiciliari nell'ambito territoriale dell'ASL Napoli 1 Centro.",
      authority: "ASL Napoli 1 Centro",
      validFrom: "",
      link: "https://aslnapoli1centro.portaleamministrazionetrasparente.it/archivio28_provvedimenti-amministrativi_0_288592_725_1.html",
      logo: "/images/logo_emmanuel_new_ok.png"
    }
  ];
  const qualityStandards = [
    "Conformità alle normative regionali della Campania per l'ADI",
    "Rispetto dei protocolli sanitari nazionali",
    "Formazione continua del personale sanitario",
    "Monitoraggio costante della qualità dei servizi",
    "Trasparenza amministrativa e gestionale",
    "Coordinamento con le strutture sanitarie territoriali"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-16 w-16 text-blue-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Accreditamenti e Certificazioni Ufficiali" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "La Cooperativa Emmanuel è ufficialmente accreditata con la Regione Campania per l'erogazione di servizi di Assistenza Domiciliare Integrata" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12", children: accreditations.map((accreditation, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full border-l-4 border-blue-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8 text-blue-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: accreditation.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: accreditation.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "Autorità:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 ml-2", children: accreditation.authority })
        ] }),
        accreditation.validFrom && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-700", children: "Valido dal:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 ml-2", children: accreditation.validFrom })
        ] })
      ] }),
      accreditation.link && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: accreditation.link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm",
          children: [
            "Verifica Accreditamento ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-1 h-4 w-4" })
          ]
        }
      )
    ] }) }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800", children: "Standard di Qualità Garantiti" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: qualityStandards.map((standard, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: standard })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-blue-50 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-3", children: "Riferimenti Normativi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Delibera Regione Campania:" }),
            " Accreditamento per servizi ADI"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "D.G.R. Campania n. 445/2018:" }),
            " Aggiornamento requisiti strutturali e organizzativi"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 1 Centro:" }),
            " Autorizzazione servizi sanitari domiciliari"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "• ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Certificazione ISO 9001:" }),
            " Sistema di gestione qualità"
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
};
const PROJECT_AREAS = {
  sanitario: {
    label: "Assistenza domiciliare",
    description: "ADI e SAD per anziani e persone con disabilità, in accreditamento con la Regione Campania e con i Comuni."
  },
  educativo: {
    label: "Servizi educativi e infanzia",
    description: "Nidi e micronidi, educativa domiciliare e assistenza educativa scolastica."
  },
  inclusione: {
    label: "Inclusione sociale e cultura",
    description: "Progetti con enti pubblici per giovani, persone fragili e comunità locali."
  }
};
const PROJECTS = [
  {
    title: 'Asilo Nido Comunale "De Baggis" – Isernia',
    description: "Servizio educativo per l'infanzia 0-3 anni presso il nido comunale del Comune di Isernia, anno educativo 2026/27.",
    features: ["Educatori qualificati", "Progetto pedagogico personalizzato", "Alleanza con le famiglie"],
    link: "/nido-de-baggis-isernia",
    area: "educativo",
    territory: "Isernia (IS)",
    activationDate: "2026-10-19"
  },
  {
    title: "SosteniAMO il quartiere",
    description: "Progetto della Città Metropolitana di Napoli (POC Legalità 2014-2020): percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio, con Emmanuel mandataria del Raggruppamento.",
    features: ["Équipe di prossimità", "Laboratori di orientamento al mestiere", "Portfolio delle competenze"],
    link: "/sosteniamo-il-quartiere",
    area: "inclusione",
    territory: "Afragola, Castello di Cisterna, Marigliano, Caivano, Giugliano, Napoli",
    activationDate: "2026-10-19"
  },
  {
    title: "PALMULA. San Vitaliano si racconta",
    description: `Festival diffuso delle radici, delle voci e dei saperi di San Vitaliano: partner del Comune per l'Avviso ministeriale "Cultura nei piccoli comuni".`,
    features: ["Cantieri di comunità", "Rassegna Palmula Live", "Archivio della memoria e mappa narrativa"],
    link: "/palmula-san-vitaliano",
    area: "inclusione",
    territory: "San Vitaliano (NA)",
    activationDate: "2026-10-19"
  },
  {
    title: "SAD anziani e disabili – Comune di Casoria",
    description: "Assistenza domiciliare per anziani e persone con disabilità nel Comune di Casoria.",
    features: ["Supporto nelle attività quotidiane", "Monitoraggio e continuità", "Integrazione con i servizi"],
    link: "/sad-casoria",
    area: "sanitario",
    territory: "Casoria (NA)"
  },
  {
    title: "SAD anziani e disabili – Comune di Portici",
    description: "Servizio di assistenza domiciliare per supporto alla vita quotidiana e al benessere.",
    features: ["Cura della persona e igiene", "Supporto domestico e relazionale", "Piani personalizzati"],
    link: "/sad-portici",
    area: "sanitario",
    territory: "Portici (NA)"
  },
  {
    title: "ADI anziani e disabili – Comune di Portici",
    description: "Assistenza domiciliare integrata per anziani e persone con disabilità nel Comune di Portici.",
    features: ["Valutazione dei bisogni", "Interventi sanitari e socio-assistenziali", "Continuità e coordinamento"],
    link: "/adi-portici",
    area: "sanitario",
    territory: "Portici (NA)"
  },
  {
    title: "Nido d'Infanzia – San Gemini",
    description: "Un ecosistema educativo 0-3 innovativo e sostenibile.",
    features: ["Approccio Reggio Children", "Outdoor education", "Family Hub per le famiglie"],
    link: "/nido-san-gemini",
    area: "educativo",
    territory: "San Gemini (TR)",
    activationDate: "2026-03-02"
  },
  {
    title: "Educativa Domiciliare – Ambito N12",
    description: "Percorsi educativi per minori e famiglie in situazione di fragilità.",
    features: ["PEI personalizzato", "Lavoro di rete territoriale", "Sviluppo dell'autonomia"],
    link: "/educativa-domiciliare-ambito-n12",
    area: "educativo",
    territory: "Ambito N12 (NA)",
    activationDate: "2026-03-02"
  },
  {
    title: "Micronido – Albisola Superiore",
    description: "Servizio educativo individualizzato presso asilo nido comunale.",
    features: ["Educatore dedicato", "Continuità garantita", "Monitoraggio mensile"],
    link: "/micronido-albisola-superiore",
    area: "educativo",
    territory: "Albisola Superiore (SV)",
    activationDate: "2026-03-02"
  },
  {
    title: "Micronido d'Infanzia – Romagnano Sesia",
    description: "Servizio educativo per bambini 0-3 anni con progetto pedagogico completo, educazione all'aperto e laboratori specializzati.",
    features: ["Educatori qualificati 1:6", "Laboratori creativi", "Sportello psicopedagogico"],
    link: "/micronido-romagnano-sesia",
    area: "educativo",
    territory: "Romagnano Sesia (NO)"
  },
  {
    title: "ADI Napoli – Assistenza Domiciliare Integrata",
    description: "Servizi sanitari e socio-assistenziali a domicilio per anziani e persone con disabilità, accreditati con la Regione Campania.",
    features: ["Visite mediche specialistiche", "Assistenza infermieristica", "Fisioterapia domiciliare"],
    link: "/adi-napoli",
    area: "sanitario",
    territory: "Napoli e provincia"
  }
];
const isProjectNew = (activationDate, expiryMonths = 6) => {
  if (!activationDate) return false;
  const activation = new Date(activationDate);
  const now = /* @__PURE__ */ new Date();
  const monthsDiff = (now.getFullYear() - activation.getFullYear()) * 12 + (now.getMonth() - activation.getMonth());
  return monthsDiff < expiryMonths;
};
const AREA_STYLES = {
  sanitario: "bg-blue-100 text-blue-700",
  educativo: "bg-purple-100 text-purple-700",
  inclusione: "bg-amber-100 text-amber-700"
};
const ProjectCard = ({ project, compact = false }) => {
  const isNew = isProjectNew(project.activationDate);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: project.link,
      className: "group relative flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 p-6",
      children: [
        isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow", children: "NEW" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${AREA_STYLES[project.area]}`, children: PROJECT_AREAS[project.area].label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2 pr-12 group-hover:text-blue-700 transition-colors", children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center text-sm text-gray-500 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          project.territory
        ] }),
        !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mb-4", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-4", children: project.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 text-blue-600 text-[10px] font-bold mr-2 flex-shrink-0", children: "✓" }),
            feature
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-auto inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700", children: [
          "Scopri di più ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] })
      ]
    }
  );
};
const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: "Assistenza Personalizzata",
      description: "Ogni piano di cura è studiato sulle specifiche esigenze della persona e della famiglia, seguendo l'insegnamento cristiano di amare il prossimo.",
      link: "/servizi",
      image: "/images/closeup-support-hands.jpg"
    },
    {
      icon: Users,
      title: "Team Qualificato",
      description: "Professionisti sanitari esperti e formati per garantire il massimo livello di assistenza con compassione cristiana.",
      link: "/chi-siamo",
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      icon: Shield,
      title: "Accreditamento Ufficiale",
      description: "Accreditati con la Regione Campania per l'erogazione di servizi ADI.",
      link: "/recensioni",
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      icon: Award,
      title: "Qualità Certificata ISO",
      description: "Servizi ADI autorizzati e conformi alle normative regionali della Campania con certificazione ISO.",
      link: "/servizi",
      image: "/images/closeup-support-hands.jpg"
    }
  ];
  const serviceAreas = [
    {
      icon: Stethoscope,
      title: "Assistenza domiciliare",
      description: "ADI accreditata con la Regione Campania e SAD per i Comuni: cure sanitarie e supporto quotidiano a casa, per anziani e persone con disabilità.",
      items: ["Infermieri e fisioterapisti a domicilio", "Operatori socio-sanitari", "Piani di cura personalizzati"],
      link: "/come-richiedere-adi",
      cta: "Come richiedere l'ADI"
    },
    {
      icon: BookOpen,
      title: "Servizi educativi e infanzia",
      description: "Nidi e micronidi comunali, educativa domiciliare, doposcuola e assistenza educativa scolastica per minori e famiglie.",
      items: ["Asili nido e micronidi 0-3", "Educativa domiciliare", "Supporto scolastico e doposcuola"],
      link: "/servizi",
      cta: "Scopri i servizi educativi"
    },
    {
      icon: HeartHandshake,
      title: "Inclusione sociale e cultura",
      description: "Progetti con enti pubblici e partner del terzo settore per giovani, persone fragili e comunità locali.",
      items: ["Percorsi di inserimento sociale e lavorativo", "Supporto psicologico e alle famiglie", "Progetti culturali di comunità"],
      link: "/progetti",
      cta: "Vedi i progetti"
    }
  ];
  const latestProjects = PROJECTS.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Cooperativa Sociale Emmanuel: assistenza domiciliare integrata (ADI) a Napoli accreditata Regione Campania. Infermieri, fisioterapisti e OSS a domicilio per anziani e disabili, gratuita tramite ASL. ☎ 081 7877064" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "assistenza domiciliare integrata napoli, ADI napoli, assistenza domiciliare napoli, infermiere domicilio asl napoli, cooperativa sociale emmanuel, cooperativa sociale napoli, assistenza anziani napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "ADI a Napoli accreditata Regione Campania: infermieri, fisioterapisti e OSS a domicilio per anziani e persone con disabilità, gratuita tramite ASL per gli aventi diritto." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://cooperativaemmanuel.it/#organization",
            "name": "Cooperativa Sociale Emmanuel",
            "alternateName": ["Emmanuel Napoli", "Cooperativa Emmanuel", "Emmanuel ADI"],
            "url": "https://cooperativaemmanuel.it",
            "logo": {
              "@type": "ImageObject",
              "@id": "https://cooperativaemmanuel.it/#logo",
              "url": "https://cooperativaemmanuel.it/images/logo_emmanuel_new_ok.png",
              "contentUrl": "https://cooperativaemmanuel.it/images/logo_emmanuel_new_ok.png",
              "width": 512,
              "height": 512,
              "caption": "Cooperativa Sociale Emmanuel Logo"
            },
            "image": { "@id": "https://cooperativaemmanuel.it/#logo" },
            "description": "Cooperativa Sociale Emmanuel: leader assistenza domiciliare Napoli. ADI Campania accreditata, assistenza anziani e disabilità. ISO certificata.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Napoli",
              "addressRegion": "Campania",
              "addressCountry": "IT"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+39-081-7877064",
              "contactType": "customer service",
              "areaServed": "IT",
              "availableLanguage": ["Italian"]
            },
            "foundingDate": "2010",
            "founder": {
              "@type": "Person",
              "name": "Luigi Borriello"
            },
            "sameAs": [
              "https://www.facebook.com/cooperativaemmanuel",
              "https://www.linkedin.com/company/cooperativa-emmanuel"
            ]
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://cooperativaemmanuel.it/#localbusiness",
            "name": "Cooperativa Sociale Emmanuel",
            "image": { "@id": "https://cooperativaemmanuel.it/#logo" },
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Napoli",
              "addressRegion": "Campania",
              "postalCode": "80100",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.8518,
              "longitude": 14.2681
            },
            "url": "https://cooperativaemmanuel.it",
            "telephone": "+39-081-7877064",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://cooperativaemmanuel.it/#website",
            "url": "https://cooperativaemmanuel.it",
            "name": "Cooperativa Sociale Emmanuel",
            "description": "Assistenza domiciliare Napoli - Cooperativa Sociale",
            "publisher": { "@id": "https://cooperativaemmanuel.it/#organization" },
            "inLanguage": "it-IT"
          },
          {
            "@type": "WebPage",
            "@id": "https://cooperativaemmanuel.it/#webpage",
            "url": "https://cooperativaemmanuel.it",
            "name": "Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel",
            "isPartOf": { "@id": "https://cooperativaemmanuel.it/#website" },
            "about": { "@id": "https://cooperativaemmanuel.it/#organization" },
            "description": "Cooperativa Sociale Emmanuel: assistenza domiciliare Napoli accreditata. ADI Campania, anziani, disabilità. ISO certificata.",
            "inLanguage": "it-IT"
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://cooperativaemmanuel.it/#breadcrumb",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cooperativaemmanuel.it/"
            }]
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccreditationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Perché Scegliere la Cooperativa Sociale Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4", children: "Accreditata con la Regione Campania" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-6", children: "La Cooperativa Sociale Emmanuel porta conforto, dignità e sostegno a chi è in difficoltà con servizi accreditati e certificazione ISO di qualità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 italic text-lg mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"Ama il tuo prossimo come te stesso"' }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-600 font-medium text-sm", children: "Matteo 22:39 - Il fondamento biblico della nostra missione" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: feature.link,
          className: "group bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 block",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: feature.image,
                alt: `${feature.title} - Cooperativa Sociale Emmanuel`,
                className: "w-full h-32 object-cover rounded-lg mb-4",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-blue-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: feature.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700", children: [
              "Scopri di più ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] })
          ]
        }
      ) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Di cosa ci occupiamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Tre aree di intervento, un unico modo di lavorare: vicino alle persone e in rete con il territorio" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: serviceAreas.map((area, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(area.icon, { className: "h-7 w-7 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-3", children: area.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-5", children: area.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: area.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-blue-100 h-5 w-5 text-blue-600 font-medium text-xs mr-3 flex-shrink-0", children: "✓" }),
          item
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: area.link,
            className: "mt-auto inline-flex items-center text-blue-600 font-medium hover:text-blue-700",
            children: [
              area.cta,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ]
          }
        )
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-2", children: "Gli ultimi progetti" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Servizi e progetti che gestiamo oggi per Comuni ed enti pubblici" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/progetti",
            className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap",
            children: [
              "Tutti i progetti e i territori ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: latestProjects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, compact: true }) }, project.link)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/closeup-support-hands.jpg",
          alt: "Inizia il tuo percorso con Emmanuel Accreditata",
          className: "w-full max-w-md mx-auto h-48 object-cover rounded-lg mb-8"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Contatta la Cooperativa Sociale Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-2 bg-white/20 rounded-full text-white font-medium mb-6", children: "Accreditata Regione Campania • Certificazione ISO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-6 max-w-3xl mx-auto", children: "La prima consulenza è sempre gratuita. Contatta la Cooperativa Sociale Emmanuel per scoprire come possiamo aiutarti." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white italic text-lg mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: `"Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l'avete fatto a me"` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-200 font-medium text-sm", children: "Matteo 25:40 - La nostra ispirazione quotidiana" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/prenotazioni",
            className: "px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors",
            children: "Prenota Consulenza Gratuita"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contatti",
            className: "px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors",
            children: "Contattaci Ora"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterSection, {})
  ] });
};
const Breadcrumb = () => {
  const location = useLocation();
  const pathMap = {
    "/": "Home",
    "/servizi": "Servizi",
    "/chi-siamo": "Chi Siamo",
    "/recensioni": "Recensioni",
    "/prenotazioni": "Prenotazioni",
    "/contatti": "Contatti"
  };
  const currentPath = location.pathname;
  const currentLabel = pathMap[currentPath];
  if (currentPath === "/") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-gray-100 py-3 border-b", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center space-x-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center text-gray-500 hover:text-blue-600 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { className: "h-4 w-4 mr-1" }),
          "Home"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-gray-400 mx-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 font-medium", children: currentLabel })
    ] })
  ] }) }) });
};
const PageHeader = ({
  title,
  description: descriptionProp,
  subtitle,
  manageMeta = true,
  metaTitle,
  metaDescription,
  keywords,
  showBreadcrumb = true
}) => {
  const description = descriptionProp ?? subtitle ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    manageMeta && /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: metaTitle || `${title} - Cooperativa Sociale Emmanuel` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: metaDescription || description }),
      keywords && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: keywords })
    ] }),
    showBreadcrumb && /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 max-w-3xl mx-auto", children: description })
    ] }) })
  ] });
};
const COLOR_STYLES = {
  blue: { card: "bg-blue-50 border-blue-600", iconBg: "bg-blue-100", icon: "text-blue-600", box: "bg-blue-100", dot: "bg-blue-600" },
  green: { card: "bg-green-50 border-green-600", iconBg: "bg-green-100", icon: "text-green-600", box: "bg-green-100", dot: "bg-green-600" },
  purple: { card: "bg-purple-50 border-purple-600", iconBg: "bg-purple-100", icon: "text-purple-600", box: "bg-purple-100", dot: "bg-purple-600" }
};
const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: Stethoscope,
      title: "Assistenza Domiciliare Integrata (ADI)",
      description: "Servizi sanitari autorizzati dalla Regione Campania per garantire cure professionali a domicilio.",
      services: ADI_SERVICES,
      color: "blue",
      benefits: [
        "Servizi gratuiti per gli aventi diritto",
        "Personale sanitario qualificato",
        "Coordinamento con il medico di famiglia",
        "Piani di cura personalizzati"
      ],
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      icon: Home,
      title: "Assistenza Privata Domiciliare",
      description: "Servizi di supporto quotidiano per anziani e persone con disabilità, personalizzati sulle esigenze familiari.",
      services: EXTRA_SERVICES,
      color: "green",
      benefits: [
        "Assistenza 24/7 disponibile",
        "Operatori formati e selezionati",
        "Flessibilità negli orari",
        "Tariffe competitive"
      ],
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      icon: BookOpen,
      title: "Servizi Educativi e Assistenza Scolastica",
      description: "Servizi educativi specialistici, supporto scolastico e attività formative per contrastare la dispersione scolastica e la povertà educativa.",
      services: EDUCATIONAL_SERVICES,
      color: "purple",
      benefits: [
        "Educatori qualificati e specializzati",
        "Programmi personalizzati per ogni studente",
        "Collaborazione con scuole e famiglie",
        "Attività innovative e coinvolgenti"
      ],
      image: "/images/closeup-support-hands.jpg"
    }
  ];
  const additionalServices = [
    {
      icon: Heart,
      title: "Supporto Psicologico",
      description: "Accompagnamento emotivo per pazienti e famiglie durante il percorso di cura.",
      features: ["Colloqui individuali", "Supporto familiare", "Gestione dello stress", "Elaborazione del lutto"],
      image: "/images/closeup-support-hands.jpg"
    },
    {
      icon: Users,
      title: "Formazione Caregiver",
      description: "Corsi per familiari e badanti per migliorare la qualità dell'assistenza.",
      features: ["Tecniche di mobilizzazione", "Gestione farmaci", "Primo soccorso", "Comunicazione efficace"],
      image: "/images/medium-shot-women-posing-together.jpg"
    }
  ];
  const educationalDetails = [
    {
      title: "Servizi Pre e Post Scuola",
      description: "Supporto educativo prima e dopo l'orario scolastico per garantire continuità formativa.",
      features: [
        "Accoglienza mattutina degli studenti",
        "Assistenza nei compiti pomeridiani",
        "Attività ricreative ed educative",
        "Merenda e momenti di socializzazione",
        "Coordinamento con le famiglie"
      ],
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      title: "Tutoraggio e Doposcuola",
      description: "Supporto didattico personalizzato per studenti con difficoltà di apprendimento o bisogni educativi speciali.",
      features: [
        "Supporto didattico individualizzato",
        "Metodi di studio personalizzati",
        "Recupero materie scolastiche",
        "Preparazione verifiche ed esami",
        "Sviluppo autonomia nello studio"
      ],
      image: "/images/closeup-support-hands.jpg"
    },
    {
      title: "Contrasto alla Povertà Educativa",
      description: "Programmi specifici per prevenire la dispersione scolastica e garantire pari opportunità formative.",
      features: [
        "Identificazione precoce delle difficoltà",
        "Interventi di sostegno personalizzati",
        "Coinvolgimento attivo delle famiglie",
        "Collaborazione con servizi sociali",
        "Progetti di inclusione sociale"
      ],
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      title: "Mediazione Culturale per Stranieri",
      description: "Supporto specializzato per studenti stranieri nell'integrazione scolastica e sociale.",
      features: [
        "Assistenza linguistica italiana",
        "Mediazione culturale famiglia-scuola",
        "Supporto nell'inserimento scolastico",
        "Valorizzazione delle culture d'origine",
        "Progetti di integrazione interculturale"
      ],
      image: "/images/medium-shot-women-posing-together.jpg"
    }
  ];
  const campaniaNorms = [
    {
      title: "Requisiti per l'ADI in Campania",
      items: [
        "Residenza nella Regione Campania",
        "Prescrizione del medico di medicina generale",
        "Valutazione dell'Unità di Valutazione Multidimensionale (UVM)",
        "Condizioni di non autosufficienza certificate"
      ],
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      title: "Procedure di Accesso",
      items: [
        "Richiesta tramite medico di famiglia",
        "Valutazione domiciliare gratuita",
        "Elaborazione piano assistenziale personalizzato",
        "Attivazione servizi entro 72 ore"
      ],
      image: "/images/medium-shot-women-posing-together.jpg"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "I Nostri Servizi",
        description: "Assistenza domiciliare, servizi educativi e supporto personalizzato per anziani, persone con disabilità e minori in Campania",
        metaTitle: "Servizi - Cooperativa Emmanuel Napoli",
        metaDescription: "Scopri tutti i servizi della Cooperativa Emmanuel: ADI, assistenza domiciliare, servizi educativi, doposcuola, tutoraggio e molto altro in Campania.",
        keywords: "assistenza domiciliare, ADI Campania, servizi educativi, doposcuola napoli, tutoraggio, assistenza scolastica, fisioterapia domiciliare, infermiere a domicilio, supporto psicologico"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: serviceCategories.map((category, index) => {
      const c = COLOR_STYLES[category.color];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${c.card} rounded-xl shadow-lg p-8 border-t-4 h-full`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: category.image,
              alt: category.title,
              className: "w-full h-48 object-cover rounded-lg mb-4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 ${c.iconBg} rounded-full mr-4`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(category.icon, { className: `h-8 w-8 ${c.icon}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-800", children: category.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: category.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4", children: "Servizi Inclusi:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: category.services.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: `h-4 w-4 ${c.icon} mr-2 mt-0.5 flex-shrink-0` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-sm", children: service })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${c.box} rounded-lg p-4`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Vantaggi:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: category.benefits.map((benefit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-gray-700 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 ${c.dot} rounded-full mr-2 flex-shrink-0` }),
            benefit
          ] }, idx)) })
        ] })
      ] }) }, index);
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-2", children: "Progetti e servizi sul territorio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "I servizi che gestiamo oggi per Comuni, Ambiti ed enti pubblici" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/progetti", className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap", children: [
          "Vedi tutti ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: PROJECTS.slice(0, 8).map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, compact: true }) }, project.link)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-purple-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-16 w-16 text-purple-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Servizi Educativi e Assistenza Scolastica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto", children: "La Cooperativa Emmanuel offre servizi educativi specialistici per contrastare la dispersione scolastica, la povertà educativa e promuovere l'integrazione sociale attraverso percorsi formativi personalizzati." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: educationalDetails.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: index % 2 === 0 ? "left" : "right", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: service.image,
            alt: service.title,
            className: "w-full h-48 object-cover rounded-lg mb-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: service.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-purple-600 mr-3 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-sm", children: feature })
        ] }, idx)) })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-white rounded-xl shadow-md p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Metodologie Innovative per l'Educazione" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 max-w-3xl mx-auto", children: "I nostri servizi educativi utilizzano metodologie innovative e personalizzate, adattate alle specifiche esigenze di ogni studente per garantire il successo formativo." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-8 w-8 text-purple-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Apprendimento Personalizzato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Metodi di studio adattati alle caratteristiche individuali" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8 text-purple-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Lavoro di Gruppo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Attività collaborative per sviluppare competenze sociali" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-50 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8 text-purple-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Obiettivi Specifici" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Piani educativi con traguardi chiari e misurabili" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Servizi Specializzati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Soluzioni complete per ogni esigenza di assistenza domiciliare e supporto educativo, con particolare attenzione al benessere psicologico" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: additionalServices.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: service.image,
            alt: service.title,
            className: "w-full h-32 object-cover rounded-lg mb-4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-8 w-8 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3 text-center", children: service.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 text-center", children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-gray-700 flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" }),
          feature
        ] }, idx)) })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-16 w-16 text-blue-600 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Supporto Psicologico Specializzato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Il benessere psicologico è fondamentale nel percorso di cura. I nostri psicologi specializzati offrono supporto professionale per pazienti, famiglie e caregivers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8 text-blue-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Supporto Familiare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Accompagnamento psicologico per tutta la famiglia nel percorso di cura" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 text-purple-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Elaborazione del Lutto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Supporto specializzato nei momenti di perdita e transizione" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-green-600 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Gestione dello Stress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Tecniche per gestire ansia e stress legati alla malattia" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "ADI in Campania: Requisiti e Procedure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Informazioni complete sui servizi di Assistenza Domiciliare Integrata nella Regione Campania" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: campaniaNorms.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: index % 2 === 0 ? "left" : "right", delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: section.image,
            alt: section.title,
            className: "w-full h-48 object-cover rounded-lg mb-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: section.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5 flex-shrink-0", children: idx + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
        ] }, idx)) })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/closeup-support-hands.jpg",
            alt: "Assistenza personalizzata",
            className: "w-full h-48 object-cover rounded-lg mb-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Hai Bisogno di Maggiori Informazioni?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "I nostri esperti sono a disposizione per una consulenza gratuita e per guidarti nell'accesso ai servizi ADI e educativi in Campania." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/prenotazioni",
              className: "px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center",
              children: [
                "Prenota Consulenza ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contatti",
              className: "px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors",
              children: "Contattaci"
            }
          )
        ] })
      ] }) }) })
    ] }) })
  ] });
};
const AboutPage = () => {
  const teamMembers = [
    {
      name: "Luigi Borriello",
      role: "Presidente e Fondatore",
      qualifications: "Imprenditore Sociale",
      description: "Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili. Con oltre 15 anni di esperienza nel settore dell'assistenza domiciliare, è il visionario che ha fondato la Cooperativa Emmanuel nel 2010.",
      specialties: ["Leadership aziendale", "Gestione servizi socio-sanitari", "Relazioni istituzionali", "Sviluppo strategico"],
      image: "/images/Luigi Borriello.png"
    },
    {
      name: "Dott. Gennaro Borriello",
      role: "Socio e Coordinatore Sanitario",
      qualifications: "Coordinatore infermieristico",
      description: "Coordinatore infermieristico specializzato nel coordinamento e management dei servizi socio-sanitari. Si occupa della supervisione clinica di tutti i servizi ADI e della formazione continua del personale sanitario.",
      specialties: ["Coordinamento sanitario", "Management ADI", "Supervisione clinica", "Formazione personale sanitario"],
      image: "/images/Dott. Gennaro Borriello.png"
    },
    {
      name: "Dott. Umberto Borriello",
      role: "Socio e Responsabile Amministrativo",
      qualifications: "Laureato in Economia",
      description: "Laureato in Economia con specializzazione in gestione delle organizzazioni sanitarie. Si occupa della pianificazione economica, del controllo di gestione e dell'ottimizzazione dei processi amministrativi della cooperativa.",
      specialties: ["Controllo di gestione", "Pianificazione economica", "Amministrazione sanitaria", "Ottimizzazione processi"],
      image: "/images/Dott. Umberto Borriello.png"
    },
    {
      name: "Dott.ssa Imma Angelone",
      role: "Coordinatrice Servizi Educativi e Assistenziali",
      qualifications: "Laureata in Scienze dell'Educazione",
      description: "Moglie del presidente Luigi Borriello, laureata in Scienze dell'Educazione, coordina tutti i servizi educativi e assistenziali della cooperativa. La sua esperienza nel campo educativo garantisce un approccio professionale e umano nell'assistenza alle famiglie.",
      specialties: ["Coordinamento servizi educativi", "Progettazione educativa", "Supporto familiare", "Gestione équipe educative"],
      image: "/images/medium-shot-women-posing-together.jpg"
    }
  ];
  const values = [
    {
      icon: Heart,
      title: "Compassione",
      description: "Ogni intervento è guidato dall'amore e dal rispetto per la dignità umana.",
      image: "/images/closeup-support-hands.jpg"
    },
    {
      icon: Users,
      title: "Professionalità",
      description: "Team qualificato e costantemente aggiornato sulle migliori pratiche assistenziali.",
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      icon: Award,
      title: "Qualità Certificata ISO 9001",
      description: "Standard elevati nei servizi, conformi alle normative regionali della Campania con certificazione ISO 9001.",
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      icon: Target,
      title: "Personalizzazione",
      description: "Ogni piano di assistenza è studiato sulle specifiche esigenze della persona.",
      image: "/images/closeup-support-hands.jpg"
    }
  ];
  const missionAreas = [
    {
      icon: Stethoscope,
      title: "Assistenza Domiciliare Integrata (ADI)",
      description: "Servizi sanitari autorizzati dalla Regione Campania per garantire cure mediche e infermieristiche professionali direttamente a domicilio.",
      features: [
        "Visite mediche specialistiche",
        "Assistenza infermieristica 24/7",
        "Fisioterapia e riabilitazione",
        "Supporto psicologico",
        "Coordinamento con medici di famiglia"
      ],
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      icon: Heart,
      title: "Assistenza agli Anziani e Persone con Disabilità",
      description: "Supporto completo per persone anziane e con disabilità, garantendo dignità, autonomia e qualità della vita nel proprio ambiente familiare.",
      features: [
        "Assistenza nelle attività quotidiane",
        "Compagnia e socializzazione",
        "Controllo parametri vitali",
        "Gestione terapie farmacologiche",
        "Supporto nutrizionale"
      ],
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      icon: BookOpen,
      title: "Servizi Educativi e Assistenza Scolastica",
      description: "Servizi educativi specialistici, supporto scolastico e attività formative per contrastare la dispersione scolastica e la povertà educativa.",
      features: [
        "Servizi pre e post scuola",
        "Tutoraggio educativo e doposcuola",
        "Supporto didattico personalizzato",
        "Laboratori creativi e didattici",
        "Mediazione culturale per stranieri"
      ],
      image: "/images/closeup-support-hands.jpg"
    }
  ];
  const milestones = [
    {
      year: "2010",
      title: "Fondazione della Cooperativa",
      description: "Nasce la Cooperativa Sociale Emmanuel secondo la Legge 381/91, con la missione di assistere anziani, persone con disabilità e minori.",
      image: "/images/logo_emmanuel_new_ok.png"
    },
    {
      year: "Accreditamento",
      title: "Accreditamento Regione Campania",
      description: "Ottenimento dell'accreditamento ufficiale per i servizi di Assistenza Domiciliare Integrata dalla Regione Campania.",
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      year: "Autorizzazione",
      title: "Autorizzazione ASL Napoli 1 Centro",
      description: "Autorizzazione per l'erogazione di servizi sanitari domiciliari nell'ambito territoriale dell'ASL Napoli 1 Centro.",
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      year: "2018",
      title: "1000 Famiglie Assistite",
      description: "Raggiungimento del traguardo di 1000 famiglie assistite con servizi di qualità certificata.",
      image: "/images/closeup-support-hands.jpg"
    },
    {
      year: "2020",
      title: "Certificazione ISO 9001",
      description: "Ottenimento della certificazione ISO 9001 per il sistema di gestione qualità nei servizi socio-sanitari.",
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      year: "2024",
      title: "185 Persone Assistite",
      description: "Consolidamento come punto di riferimento per l'assistenza domiciliare e i servizi educativi in Campania.",
      image: "/images/medium-shot-women-posing-together.jpg"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Chi Siamo",
        description: "La storia, i valori e le persone che rendono Emmanuel un punto di riferimento per l'assistenza domiciliare e i servizi educativi in Campania",
        metaTitle: "Chi Siamo - Cooperativa Sociale Emmanuel Napoli",
        metaDescription: "Scopri la storia della Cooperativa Emmanuel, i nostri principi cooperativi, il team qualificato e i valori che ci guidano nell'assistenza domiciliare e nei servizi educativi.",
        keywords: "cooperativa sociale, Emmanuel, Napoli, assistenza domiciliare, Luigi Borriello, Gennaro Borriello infermiere, Umberto Borriello economia, Imma Angelone educazione, team sanitario, legge 381/91"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-10 w-10 text-blue-600 mr-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-10 w-10 text-blue-600" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "La Nostra Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4", children: "🏛️ Cooperativa Sociale secondo la Legge 381/91" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto mb-6", children: "La Cooperativa Sociale Emmanuel opera senza scopo di lucro in conformità alla Legge 381/91. Il nostro obiettivo principale è perseguire l'interesse generale della comunità promuovendo l'integrazione sociale e umana dei cittadini." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 italic text-lg mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"Ama il tuo prossimo come te stesso"' }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-600 font-medium text-sm", children: "Matteo 22:39 - Il fondamento biblico della nostra missione" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: missionAreas.map((area, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: area.image,
              alt: area.title,
              className: "w-full h-48 object-cover rounded-lg mb-4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(area.icon, { className: "h-8 w-8 text-blue-600" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4 text-center", children: area.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 text-center", children: area.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 text-sm", children: "Servizi Offerti:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: area.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-gray-600 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" }),
            feature
          ] }, idx)) })
        ] })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Il Team Dirigenziale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Professionisti qualificati uniti dalla passione per l'assistenza e dal rispetto per la dignità umana" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-64 object-contain bg-gray-50"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
            member.qualifications.includes("Infermiere") && /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5 text-blue-600 mr-2" }),
            member.qualifications.includes("Economia") && /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-5 w-5 text-green-600 mr-2" }),
            member.qualifications.includes("Imprenditore") && /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-purple-600 mr-2" }),
            member.qualifications.includes("Scienze dell'Educazione") && /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5 text-orange-600 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-600", children: member.qualifications })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2", children: member.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-600 font-medium mb-3", children: member.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: member.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Competenze Specialistiche:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: member.specialties.map((specialty, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs", children: specialty }, idx)) })
          ] })
        ] })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Team di Professionisti Qualificati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 max-w-3xl mx-auto", children: "La Cooperativa Emmanuel si avvale di un team multidisciplinare di professionisti qualificati: medici specialisti, infermieri professionali, fisioterapisti, operatori socio-sanitari, psicologi ed educatori, tutti formati e costantemente aggiornati per garantire il massimo livello di assistenza." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "15+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Infermieri Professionali" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "8+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Fisioterapisti" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "20+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "OSS Qualificati" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "10+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Educatori" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "I Nostri Valori" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Principi che guidano ogni nostra azione nell'assistenza domiciliare e nei servizi educativi" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: value.image,
            alt: value.title,
            className: "w-full h-32 object-cover rounded-lg mb-4"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(value.icon, { className: "h-8 w-8 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: value.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: value.description })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "I Nostri Numeri" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 max-w-3xl mx-auto", children: "Oltre 15 anni di impegno nel territorio campano secondo la Legge 381/91" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: STATS.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-bold text-white mb-2", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-100", children: stat.label })
      ] }) }, stat.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "La Nostra Storia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Un percorso di crescita e dedizione al servizio delle famiglie campane secondo i principi cooperativi" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: milestones.map((milestone, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: index % 2 === 0 ? "left" : "right", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-24 text-right mr-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-bold", children: milestone.year }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow bg-white rounded-lg shadow-md p-6 flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: milestone.image,
              alt: milestone.title,
              className: "w-20 h-20 object-cover rounded-lg flex-shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2", children: milestone.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: milestone.description })
          ] })
        ] })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6", children: "La Nostra Sede" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "La Cooperativa Emmanuel ha sede nel cuore di Napoli, da dove coordina tutti i servizi di assistenza domiciliare e educativi per la Campania. La nostra posizione strategica ci permette di raggiungere rapidamente ogni zona della regione con servizi certificati." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-blue-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Napoli, Campania - Italia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-blue-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "+39 081 7877064" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-blue-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Lun-Ven: 9:00-18:00, Sab: 9:00-13:00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-blue-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Certificazione ISO 9001" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "right", delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Vuoi Conoscerci Meglio?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Siamo sempre disponibili per raccontarti la nostra storia e spiegarti come possiamo aiutarti con i nostri servizi secondo i principi cooperativi." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contatti",
              className: "px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center",
              children: [
                "Contattaci ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/prenotazioni",
              className: "px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors text-center",
              children: "Prenota Visita"
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const INITIAL_REVIEWS = [
  {
    id: 1,
    name: "Maria R.",
    rating: 5,
    comment: "Servizio eccellente per mia madre anziana. Gli operatori sono professionali, gentili e sempre disponibili. Consiglio vivamente la Cooperativa Emmanuel.",
    date: "2024-01-10",
    service: "Assistenza Domiciliare",
    image: "/images/medium-shot-women-posing-together.jpg"
  },
  {
    id: 2,
    name: "Giuseppe L.",
    rating: 5,
    comment: "Dopo l'intervento di mio padre, l'assistenza domiciliare è stata fondamentale. Personale qualificato e grande umanità. Grazie di cuore.",
    date: "2024-01-05",
    service: "Fisioterapia Domiciliare",
    image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
  },
  {
    id: 3,
    name: "Anna M.",
    rating: 5,
    comment: "La professionalità e la dedizione del team Emmanuel hanno fatto la differenza per la cura di mia nonna. Servizio di altissima qualità.",
    date: "2023-12-28",
    service: "Assistenza Infermieristica",
    image: "/images/closeup-support-hands.jpg"
  }
];
const ReviewsSection = () => {
  const [reviews, setReviews] = reactExports.useState(INITIAL_REVIEWS);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [newReview, setNewReview] = reactExports.useState({
    name: "",
    rating: 5,
    comment: "",
    service: ""
  });
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      service: newReview.service,
      image: "/images/closeup-support-hands.jpg"
      // Immagine di default
    };
    const updatedReviews = [review, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("emmanuelReviews", JSON.stringify(updatedReviews));
    setNewReview({ name: "", rating: 5, comment: "", service: "" });
    setShowForm(false);
    alert("Grazie per la tua recensione! È stata pubblicata con successo.");
  };
  React.useEffect(() => {
    const savedReviews = localStorage.getItem("emmanuelReviews");
    if (savedReviews) {
      try {
        const parsedReviews = JSON.parse(savedReviews);
        setReviews(parsedReviews);
      } catch (error) {
        console.error("Errore nel caricamento delle recensioni salvate:", error);
      }
    }
  }, []);
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: `h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`
      },
      i
    ));
  };
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Cosa Dicono le Famiglie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: renderStars(Math.round(averageRating)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-medium text-gray-700", children: [
          averageRating.toFixed(1),
          " su 5"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
          "(",
          reviews.length,
          " recensioni)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Le testimonianze delle famiglie che hanno scelto i nostri servizi" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: reviews.slice(0, 6).map((review, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-blue-200 absolute top-4 right-4" }),
      review.image && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: review.image,
          alt: "Testimonianza",
          className: "w-full h-32 object-cover rounded-lg mb-4"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: renderStars(review.rating) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-4 italic", children: [
        '"',
        review.comment,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-800", children: review.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: review.service }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400", children: new Date(review.date).toLocaleDateString("it-IT") })
      ] })
    ] }) }, review.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: !showForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setShowForm(true),
        className: "inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors touch-target",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5" }),
          "Lascia una Recensione"
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto bg-gray-50 rounded-xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Condividi la Tua Esperienza" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmitReview, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Nome" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: newReview.name,
                onChange: (e) => setNewReview({ ...newReview, name: e.target.value }),
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px]",
                placeholder: "Il tuo nome"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Servizio Utilizzato" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                required: true,
                value: newReview.service,
                onChange: (e) => setNewReview({ ...newReview, service: e.target.value }),
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona servizio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Assistenza Domiciliare", children: "Assistenza Domiciliare" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Fisioterapia Domiciliare", children: "Fisioterapia Domiciliare" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Assistenza Infermieristica", children: "Assistenza Infermieristica" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Supporto Psicologico", children: "Supporto Psicologico" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Servizi Educativi", children: "Servizi Educativi" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Valutazione" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setNewReview({ ...newReview, rating: i + 1 }),
              className: "focus:outline-none touch-target min-h-[44px] min-w-[44px] flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: `h-8 w-8 ${i < newReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"} hover:text-yellow-400 transition-colors`
                }
              )
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "La Tua Recensione" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              required: true,
              rows: 4,
              value: newReview.comment,
              onChange: (e) => setNewReview({ ...newReview, comment: e.target.value }),
              className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
              placeholder: "Condividi la tua esperienza con i nostri servizi..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowForm(false),
              className: "px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors touch-target min-h-[44px]",
              children: "Annulla"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors touch-target min-h-[44px]",
              children: "Pubblica Recensione"
            }
          )
        ] })
      ] })
    ] }) }) })
  ] }) });
};
const ReviewsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Recensioni e Testimonianze",
        description: "Scopri cosa dicono le famiglie che hanno scelto i nostri servizi di assistenza domiciliare",
        metaTitle: "Recensioni Clienti - Cooperativa Emmanuel Napoli",
        metaDescription: "Leggi le testimonianze delle famiglie assistite dalla Cooperativa Emmanuel. Recensioni verificate sui nostri servizi di assistenza domiciliare in Campania.",
        keywords: "recensioni Emmanuel, testimonianze assistenza domiciliare, opinioni clienti, Napoli, Campania"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, {})
  ] });
};
const SERVICES = [
  "Consulenza gratuita",
  "Assistenza domiciliare",
  "Fisioterapia domiciliare",
  "Assistenza infermieristica",
  "Supporto psicologico",
  "Valutazione multidimensionale"
];
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00"
];
const BookingSection = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await sendEmail({
        type: "booking",
        data: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          notes: formData.notes
        }
      });
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        notes: ""
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5e3);
    } catch (error2) {
      console.error("Errore invio prenotazione:", error2);
      setError("Si è verificato un errore durante l'invio. Il tuo client email si aprirà come alternativa.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const getMinDate = () => {
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "prenotazioni\\", className: "py-16 md:py-24 bg-green-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-16 w-16 text-green-600 mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Prenotazione Ricevuta!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-6", children: "Grazie per aver scelto la Cooperativa Emmanuel. Ti contatteremo entro 24 ore per confermare l'appuntamento all'indirizzo cooperativa.emmanuel@outlook.it" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsSubmitted(false),
          className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
          children: "Prenota un Altro Appuntamento"
        }
      )
    ] }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "prenotazioni", className: "py-16 md:py-24 bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Prenota il Tuo Appuntamento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Scegli il giorno e l'orario che preferisci per la tua consulenza gratuita o per iniziare il percorso di assistenza" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 lg:p-10 bg-blue-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Perché Prenotare Online?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-blue-200 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Flessibilità Totale" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Scegli il giorno e l'orario più comodo per te, anche nei weekend" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-blue-200 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Risposta Rapida" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Ti contatteremo entro 24 ore per confermare l'appuntamento" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-6 w-6 text-blue-200 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "Consulenza Personalizzata" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Ogni appuntamento è studiato sulle tue specifiche esigenze" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 p-4 bg-blue-700 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-100 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nota:" }),
          " La prima consulenza è sempre gratuita e senza impegno. Valuteremo insieme il percorso di assistenza più adatto."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Compila il Modulo" }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "h-5 w-5 text-orange-600 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700 text-sm", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nome e Cognome *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  value: formData.name,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  placeholder: "Il tuo nome completo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-2", children: "Telefono *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  required: true,
                  value: formData.phone,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  placeholder: "Il tuo numero di telefono"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                placeholder: "La tua email (opzionale)"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-gray-700 mb-2", children: "Servizio Richiesto *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "service",
                name: "service",
                required: true,
                value: formData.service,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona un servizio" }),
                  SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: service, children: service }, service))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "preferredDate", className: "block text-sm font-medium text-gray-700 mb-2", children: "Data Preferita *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  id: "preferredDate",
                  name: "preferredDate",
                  required: true,
                  min: getMinDate(),
                  value: formData.preferredDate,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "preferredTime", className: "block text-sm font-medium text-gray-700 mb-2", children: "Orario Preferito *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "preferredTime",
                  name: "preferredTime",
                  required: true,
                  value: formData.preferredTime,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona orario" }),
                    TIME_SLOTS.map((time) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: time, children: time }, time))
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "notes", className: "block text-sm font-medium text-gray-700 mb-2", children: "Note Aggiuntive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "notes",
                name: "notes",
                rows: 3,
                value: formData.notes,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none",
                placeholder: "Descrivi brevemente le tue esigenze o richieste particolari..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md font-medium transition-colors shadow-sm flex items-center justify-center gap-2",
              children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" }),
                "Invio in corso..."
              ] }) : "Prenota Appuntamento"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "* Campi obbligatori. Inviando questo modulo acconsenti al trattamento dei tuoi dati personali." })
        ] })
      ] })
    ] }) }) })
  ] }) });
};
const BookingPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Prenota il Tuo Appuntamento",
        description: "Scegli il giorno e l'orario che preferisci per la tua consulenza gratuita o per iniziare il percorso di assistenza",
        metaTitle: "Prenotazione Online - Cooperativa Emmanuel Napoli",
        metaDescription: "Prenota online la tua consulenza gratuita con la Cooperativa Emmanuel. Assistenza domiciliare personalizzata a Napoli e in Campania.",
        keywords: "prenotazione online, consulenza gratuita, appuntamento assistenza domiciliare, Napoli"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookingSection, {})
  ] });
};
const ContactSection = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await sendEmail({
        type: "contact",
        data: formData
      });
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5e3);
    } catch (error2) {
      console.error("Errore invio contatto:", error2);
      setError("Si è verificato un errore durante l'invio. Il tuo client email si aprirà come alternativa.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contatti", className: "py-16 md:py-24 bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Il primo passo verso un'assistenza sicura, amorevole e personalizzata" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600", children: "Hai un familiare anziano o con disabilità che necessita di cure? Vuoi conoscere le opportunità offerte dall'Assistenza Domiciliare Integrata?" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 bg-blue-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Contattaci" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Non aspettare: la prima consulenza è completamente gratuita. Scopri come possiamo aiutarti con amore, competenza e rispetto." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 text-blue-200 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Telefono" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `tel:${CONTACT_INFO.phone}`,
                  className: "text-blue-100 hover:text-white transition-colors",
                  children: CONTACT_INFO.phone
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 text-blue-200 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:${CONTACT_INFO.email}`,
                  className: "text-blue-100 hover:text-white transition-colors",
                  children: CONTACT_INFO.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-blue-200 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Sede" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Napoli, Italia" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-blue-200 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Orari" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Lun-Ven: 9:00-18:00" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Sab: 9:00-13:00" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-10", children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-16 w-16 text-green-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Messaggio Inviato!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Grazie per averci contattato. Ti risponderemo entro 24 ore all'indirizzo cooperativa.emmanuel@outlook.it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsSubmitted(false),
            className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors",
            children: "Invia un Altro Messaggio"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Richiedi informazioni" }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "h-5 w-5 text-orange-600 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700 text-sm", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Nome e Cognome *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                required: true,
                value: formData.name,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                placeholder: "Inserisci il tuo nome"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-1", children: "Telefono *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                required: true,
                value: formData.phone,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                placeholder: "Inserisci il tuo numero"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1", children: "Messaggio *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                rows: 4,
                required: true,
                value: formData.message,
                onChange: handleInputChange,
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none",
                placeholder: "Come possiamo aiutarti?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md font-medium transition-colors shadow-sm flex items-center justify-center gap-2",
              children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" }),
                "Invio in corso..."
              ] }) : "Invia richiesta"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-4", children: "* Campi obbligatori. Inviando questo modulo acconsenti al trattamento dei tuoi dati personali in conformità con la nostra politica sulla privacy." })
        ] })
      ] }) })
    ] }) }) })
  ] }) });
};
const ContactPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Contattaci",
        description: "Siamo qui per aiutarti. Contatta la Cooperativa Emmanuel per informazioni sui nostri servizi di assistenza domiciliare",
        metaTitle: "Contatti - Cooperativa Emmanuel Napoli",
        metaDescription: "Contatta la Cooperativa Emmanuel per informazioni sui servizi di assistenza domiciliare a Napoli e in Campania. Consulenza gratuita disponibile.",
        keywords: "contatti Emmanuel, assistenza domiciliare Napoli, telefono, email, informazioni"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
};
const CareersPage = () => {
  const [formData, setFormData] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    experience: "",
    availability: "",
    motivation: "",
    hasLicense: true,
    hasTransport: true,
    cvFile: null
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const professions = [
    "Infermiere/a Professionale",
    "Fisioterapista",
    "Operatore Socio Sanitario (OSS)",
    "Medico Specialista",
    "Psicologo/a",
    "Assistente Sociale",
    "Operatore di Assistenza",
    "Coordinatore Sanitario",
    "Altro (specificare nella motivazione)"
  ];
  const experienceLevels = [
    "Neolaureato/a",
    "1-2 anni",
    "3-5 anni",
    "5-10 anni",
    "Oltre 10 anni"
  ];
  const availabilityOptions = [
    "Full-time (40 ore/settimana)",
    "Part-time mattino",
    "Part-time pomeriggio",
    "Weekend",
    "Turni notturni",
    "Disponibilità flessibile"
  ];
  const benefits = [
    {
      icon: Briefcase,
      title: "Contratto Regolare",
      description: "CCNL Cooperative Sociali, contributi e ferie pagate"
    },
    {
      icon: GraduationCap,
      title: "Formazione Continua",
      description: "Corsi di aggiornamento e specializzazione gratuiti"
    },
    {
      icon: User,
      title: "Ambiente Stimolante",
      description: "Team affiatato e supporto costante nella crescita professionale"
    }
  ];
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (error) setError(null);
  };
  const handleFileChange = (e) => {
    var _a;
    const file = ((_a = e.target.files) == null ? void 0 : _a[0]) || null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError("Il file CV non può superare i 5MB");
      return;
    }
    setFormData((prev) => ({ ...prev, cvFile: file }));
    if (error) setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const emailData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        experience: formData.experience,
        availability: formData.availability,
        motivation: formData.motivation,
        hasLicense: formData.hasLicense ? "Sì" : "No",
        hasTransport: formData.hasTransport ? "Sì" : "No",
        cvAttached: formData.cvFile ? "Sì (file allegato)" : "No"
      };
      await sendEmail({
        type: "career",
        data: emailData
      });
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        profession: "",
        experience: "",
        availability: "",
        motivation: "",
        hasLicense: true,
        hasTransport: true,
        cvFile: null
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5e3);
    } catch (error2) {
      console.error("Errore invio candidatura:", error2);
      setError("Si è verificato un errore durante l'invio. Il tuo client email si aprirà come alternativa.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PageHeader,
        {
          title: "Candidatura Inviata!",
          description: "Grazie per il tuo interesse. Ti contatteremo presto per valutare la tua candidatura.",
          showBreadcrumb: false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-green-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-16 w-16 text-green-600 mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Candidatura Ricevuta!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-6", children: "Grazie per aver scelto di candidarti con la Cooperativa Emmanuel. Il nostro team HR esaminerà la tua candidatura e ti contatterà entro 7 giorni lavorativi." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-2", children: "Prossimi Passi:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-left text-gray-600 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Revisione del CV e della candidatura" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📞 Eventuale colloquio telefonico preliminare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🤝 Colloquio in sede (se selezionato/a)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "📋 Verifica referenze e documentazione" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsSubmitted(false),
            className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
            children: "Invia Altra Candidatura"
          }
        )
      ] }) }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Lavora Con Noi",
        description: "Unisciti al nostro team di professionisti sanitari. Insieme possiamo fare la differenza nella vita delle persone.",
        metaTitle: "Lavora Con Noi - Cooperativa Emmanuel Napoli",
        metaDescription: "Candidati per lavorare con la Cooperativa Emmanuel. Cerchiamo infermieri, fisioterapisti, OSS e altri professionisti sanitari per l'assistenza domiciliare in Campania.",
        keywords: "lavoro infermiere Napoli, lavoro fisioterapista, lavoro OSS, cooperativa sociale, assistenza domiciliare, carriere sanitarie"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6", children: "Fai Parte della Famiglia Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Cerchiamo professionisti sanitari motivati e competenti che condividano i nostri valori di compassione, professionalità e dedizione verso chi ha più bisogno." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Lavorare con Emmanuel significa entrare a far parte di un team che considera l'assistenza domiciliare non solo un lavoro, ma una missione di vita." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-3", children: "Profili Ricercati:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Infermieri Professionali" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fisioterapisti" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Operatori Socio Sanitari (OSS)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Medici Specialisti" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Psicologi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Coordinatori Sanitari" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "right", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/medium-shot-women-posing-together.jpg",
          alt: "Team Cooperativa Emmanuel",
          className: "rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Perché Scegliere Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Offriamo un ambiente di lavoro stimolante e gratificante" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(benefit.icon, { className: "h-8 w-8 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: benefit.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: benefit.description })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Invia la Tua Candidatura" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Compila il modulo sottostante per candidarti. Ti contatteremo entro 7 giorni lavorativi." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-600 text-white p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "Modulo di Candidatura" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Tutti i campi contrassegnati con * sono obbligatori" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "h-5 w-5 text-orange-600 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-700 text-sm", children: error })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-800 mb-4", children: "Dati Personali" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nome *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "firstName",
                      name: "firstName",
                      required: true,
                      value: formData.firstName,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      placeholder: "Il tuo nome"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 mb-2", children: "Cognome *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      id: "lastName",
                      name: "lastName",
                      required: true,
                      value: formData.lastName,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      placeholder: "Il tuo cognome"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-800 mb-4", children: "Contatti" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      required: true,
                      value: formData.email,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      placeholder: "la.tua.email@esempio.com"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-2", children: "Telefono *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      required: true,
                      value: formData.phone,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      placeholder: "+39 123 456 7890"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-800 mb-4", children: "Informazioni Professionali" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "profession", className: "block text-sm font-medium text-gray-700 mb-2", children: "Professione *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "profession",
                      name: "profession",
                      required: true,
                      value: formData.profession,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona la tua professione" }),
                        professions.map((prof) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: prof, children: prof }, prof))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "experience", className: "block text-sm font-medium text-gray-700 mb-2", children: "Esperienza *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "experience",
                      name: "experience",
                      required: true,
                      value: formData.experience,
                      onChange: handleInputChange,
                      className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona anni di esperienza" }),
                        experienceLevels.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: level, children: level }, level))
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "availability", className: "block text-sm font-medium text-gray-700 mb-2", children: "Disponibilità *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "availability",
                  name: "availability",
                  required: true,
                  value: formData.availability,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Seleziona la tua disponibilità" }),
                    availabilityOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: option }, option))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-800 mb-4", children: "Requisiti" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      name: "hasLicense",
                      checked: formData.hasLicense,
                      onChange: handleInputChange,
                      className: "mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Possiedo patente di guida" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      name: "hasTransport",
                      checked: formData.hasTransport,
                      onChange: handleInputChange,
                      className: "mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Ho un mezzo di trasporto proprio" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cvFile", className: "block text-sm font-medium text-gray-700 mb-2", children: "Curriculum Vitae (PDF, max 5MB)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-gray-400 mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    id: "cvFile",
                    name: "cvFile",
                    accept: ".pdf,.doc,.docx",
                    onChange: handleFileChange,
                    className: "hidden"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "cvFile", className: "cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 hover:text-blue-700 font-medium", children: "Clicca per caricare il CV" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: formData.cvFile ? formData.cvFile.name : "PDF, DOC, DOCX fino a 5MB" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "motivation", className: "block text-sm font-medium text-gray-700 mb-2", children: "Lettera di Motivazione *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "motivation",
                  name: "motivation",
                  rows: 5,
                  required: true,
                  value: formData.motivation,
                  onChange: handleInputChange,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
                  placeholder: "Raccontaci perché vuoi lavorare con noi, le tue motivazioni e cosa puoi portare al nostro team..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md font-medium transition-colors shadow-sm flex items-center justify-center gap-2",
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" }),
                  "Invio in corso..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
                  "Invia Candidatura"
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 text-center", children: [
              "Inviando questo modulo acconsenti al trattamento dei tuoi dati personali secondo la nostra",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy", className: "text-blue-600 hover:text-blue-700 ml-1", children: "Privacy Policy" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "I dati saranno utilizzati esclusivamente per la valutazione della candidatura."
            ] })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
};
const PrivacyPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Privacy Policy",
        description: "Informazioni sul trattamento dei dati personali secondo il GDPR",
        metaTitle: "Privacy Policy - Cooperativa Emmanuel",
        metaDescription: "Privacy Policy della Cooperativa Emmanuel. Informazioni complete sul trattamento dei dati personali secondo il GDPR.",
        keywords: "privacy policy, GDPR, trattamento dati, cooperativa Emmanuel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-blue-600 mr-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-0", children: "Informativa sulla Privacy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-0", children: "La Cooperativa Sociale Emmanuel rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "1. Titolare del Trattamento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cooperativa Sociale Emmanuel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sede: Napoli, Italia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Email: cooperativa.emmanuel@outlook.it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Telefono: +39 081 7877064" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "2. Dati Raccolti" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Raccogliamo i seguenti tipi di dati personali:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 mb-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dati di contatto:" }),
          " nome, cognome, telefono, email"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dati professionali:" }),
          " professione, esperienza, CV (solo per candidature)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dati di navigazione:" }),
          " indirizzo IP, browser, pagine visitate"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cookie tecnici:" }),
          " per il funzionamento del sito"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "3. Finalità del Trattamento" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "I tuoi dati vengono utilizzati per:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 mb-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rispondere alle tue richieste di informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Gestire prenotazioni e appuntamenti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Valutare candidature lavorative" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Migliorare i nostri servizi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Adempiere agli obblighi di legge" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "4. Base Giuridica" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "Il trattamento dei dati è basato sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) e sull'interesse legittimo del titolare (art. 6, par. 1, lett. f GDPR)." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "5. Conservazione dei Dati" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 mb-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Richieste di contatto:" }),
          " 2 anni dalla richiesta"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Candidature:" }),
          " 2 anni dalla candidatura"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dati di navigazione:" }),
          " 13 mesi"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "6. I Tuoi Diritti" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Hai diritto a:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 mb-6 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Accedere ai tuoi dati personali" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Rettificare dati inesatti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cancellare i tuoi dati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Limitare il trattamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Portabilità dei dati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Opporti al trattamento" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "7. Cookie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "Utilizziamo cookie tecnici necessari per il funzionamento del sito. Non utilizziamo cookie di profilazione senza il tuo consenso esplicito." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "8. Sicurezza" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati da accessi non autorizzati, perdita o distruzione." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6 mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Contattaci" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:cooperativa.emmanuel@outlook.it",
              className: "flex items-center text-blue-600 hover:text-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-2" }),
                "cooperativa.emmanuel@outlook.it"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+390817877064",
              className: "flex items-center text-blue-600 hover:text-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mr-2" }),
                "+39 081 7877064"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-8", children: [
        "Ultimo aggiornamento: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT")
      ] })
    ] }) }) }) })
  ] });
};
const CookiePage = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Cookie Tecnici",
      description: "Necessari per il funzionamento del sito",
      required: true,
      examples: ["Sessione utente", "Preferenze lingua", "Carrello acquisti"]
    },
    {
      icon: BarChart,
      title: "Cookie Analitici",
      description: "Per migliorare le performance del sito",
      required: false,
      examples: ["Google Analytics", "Statistiche visite", "Comportamento utenti"]
    },
    {
      icon: Shield,
      title: "Cookie di Sicurezza",
      description: "Per proteggere il sito da attacchi",
      required: true,
      examples: ["Protezione CSRF", "Prevenzione bot", "Sicurezza form"]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Cookie Policy",
        description: "Informazioni sui cookie utilizzati dal nostro sito web",
        metaTitle: "Cookie Policy - Cooperativa Emmanuel",
        metaDescription: "Cookie Policy della Cooperativa Emmanuel. Informazioni complete sui cookie utilizzati dal nostro sito web.",
        keywords: "cookie policy, cookie tecnici, privacy, cooperativa Emmanuel"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cookie, { className: "h-8 w-8 text-blue-600 mr-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-0", children: "Cosa sono i Cookie?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-0", children: "I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Ci aiutano a migliorare la tua esperienza di navigazione." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Tipi di Cookie Utilizzati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: cookieTypes.map((type, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-100 rounded-lg mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(type.icon, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800", children: type.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${type.required ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: type.required ? "Necessari" : "Opzionali" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: type.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-800 mb-2", children: "Esempi:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm text-gray-600 space-y-1", children: type.examples.map((example, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" }),
              example
            ] }, idx)) })
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Cookie Specifici del Nostro Sito" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border border-gray-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left", children: "Nome Cookie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left", children: "Scopo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left", children: "Durata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left", children: "Tipo" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "cookieConsent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Memorizza le preferenze sui cookie" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "1 anno" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Tecnico" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "_ga" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Google Analytics - Identificazione utenti" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "2 anni" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Analitico" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "_gid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Google Analytics - Identificazione sessioni" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "24 ore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Analitico" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Come Gestire i Cookie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 rounded-xl p-6 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-3", children: "Impostazioni del Browser" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Puoi gestire i cookie direttamente dalle impostazioni del tuo browser:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Chrome:" }),
              " Impostazioni → Privacy e sicurezza → Cookie"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Firefox:" }),
              " Opzioni → Privacy e sicurezza → Cookie"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Safari:" }),
              " Preferenze → Privacy → Cookie"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Edge:" }),
              " Impostazioni → Privacy → Cookie"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "I Tuoi Diritti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 mb-6 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Accettare o rifiutare i cookie non necessari" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Modificare le tue preferenze in qualsiasi momento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Eliminare i cookie già memorizzati" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Navigare in modalità privata/incognito" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-3", children: "Nota Importante" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-0", children: "Disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento del sito web. I cookie analitici sono opzionali e puoi rifiutarli senza influire sulla navigazione." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-8", children: [
          "Ultimo aggiornamento: ",
          (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT")
        ] })
      ] }) })
    ] }) })
  ] });
};
const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Pagina Non Trovata - Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "La pagina che stai cercando non esiste. Torna alla homepage della Cooperativa Emmanuel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "robots", content: "noindex, nofollow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/images/logo_emmanuel_new_ok.png",
            alt: "Cooperativa Emmanuel",
            className: "h-20 w-20 mx-auto mb-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-bold text-gray-800 mb-4", children: "404" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Pagina Non Trovata" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-8", children: "La pagina che stai cercando non esiste o è stata spostata. Torna alla homepage per continuare la navigazione." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { className: "h-5 w-5 mr-2" }),
              "Torna alla Homepage"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => window.history.back(),
            className: "inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
              "Torna Indietro"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Hai bisogno di aiuto? Contattaci:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+390817877064", className: "text-blue-600 hover:text-blue-700", children: "📞 +39 081 7877064" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:cooperativa.emmanuel@outlook.it", className: "text-blue-600 hover:text-blue-700", children: "✉️ cooperativa.emmanuel@outlook.it" }) })
        ] })
      ] })
    ] }) })
  ] });
};
const ADIProcessPage = () => {
  const processSteps = [
    {
      step: 1,
      title: "Richiesta del Medico di Famiglia",
      description: "Il medico di medicina generale valuta le condizioni del paziente e compila la richiesta per l'ADI.",
      details: [
        "Valutazione clinica del paziente",
        "Compilazione modulo di richiesta ADI",
        "Invio della richiesta all'ASL di competenza",
        "Allegazione della documentazione clinica necessaria"
      ],
      icon: Stethoscope,
      image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
    },
    {
      step: 2,
      title: "Valutazione UVM (Unità di Valutazione Multidimensionale)",
      description: "L'équipe multidisciplinare dell'ASL valuta le condizioni del paziente e definisce il piano assistenziale.",
      details: [
        "Valutazione multidimensionale del paziente",
        "Definizione del livello di intensità assistenziale",
        "Elaborazione del Piano Assistenziale Individualizzato (PAI)",
        "Autorizzazione all'erogazione dei servizi ADI"
      ],
      icon: Users,
      image: "/images/medium-shot-women-posing-together.jpg"
    },
    {
      step: 3,
      title: "Attivazione dei Servizi",
      description: "La Cooperativa Emmanuel attiva i servizi ADI autorizzati entro 72 ore dalla richiesta.",
      details: [
        "Assegnazione del team assistenziale",
        "Prima visita domiciliare di valutazione",
        "Avvio del piano assistenziale personalizzato",
        "Coordinamento con il medico di famiglia"
      ],
      icon: CheckCircle,
      image: "/images/closeup-support-hands.jpg"
    }
  ];
  const requirements = [
    {
      title: "Requisiti del Paziente",
      items: [
        "Residenza nella Regione Campania",
        "Condizioni di non autosufficienza certificate",
        "Necessità di assistenza sanitaria domiciliare",
        "Impossibilità di recarsi presso strutture sanitarie"
      ]
    },
    {
      title: "Documentazione Necessaria",
      items: [
        "Richiesta del medico di medicina generale",
        "Documentazione clinica aggiornata",
        "Tessera sanitaria del paziente",
        "Documento di identità del paziente o del familiare"
      ]
    }
  ];
  const services = [
    "Visite mediche specialistiche domiciliari",
    "Assistenza infermieristica professionale",
    "Fisioterapia e riabilitazione domiciliare",
    "Fornitura di ausili sanitari",
    "Supporto psicologico per paziente e famiglia",
    "Educazione sanitaria al caregiver",
    "Coordinamento con il medico di famiglia"
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Come si attiva l'ADI (Assistenza Domiciliare Integrata)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'attivazione dell'ADI inizia con una valutazione del medico di medicina generale o dello specialista ospedaliero, che identifica la necessità di assistenza domiciliare integrata. Il medico compila la richiesta e la invia all'ASL competente del territorio (per Napoli, l'ASL Napoli 1 Centro). L'ASL valuta il caso attraverso l'Unità di Valutazione Multidimensionale (UVM) e, in caso di approvazione, autorizza l'ente accreditato (come la Cooperativa Emmanuel) a erogare i servizi necessari."
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Helmet, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Come Accedere all'ADI in Campania",
        description: "Guida completa per richiedere l'Assistenza Domiciliare Integrata nella Regione Campania",
        metaTitle: "Come Richiedere ADI Campania - Cooperativa Emmanuel",
        metaDescription: "Guida passo-passo per accedere ai servizi di Assistenza Domiciliare Integrata in Campania. Requisiti, documentazione e procedura completa.",
        keywords: "ADI Campania, come richiedere assistenza domiciliare, procedura ADI, requisiti assistenza domiciliare, UVM Campania, supporto psicologico ADI, come attivare ADI Napoli",
        showBreadcrumb: false
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6", children: "Procedura per Richiedere l'ADI in Campania" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-8", children: "L'Assistenza Domiciliare Integrata (ADI) è un servizio gratuito per gli aventi diritto, erogato dalla Regione Campania attraverso cooperative accreditate come Emmanuel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: "Importante" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "I servizi ADI sono completamente gratuiti per i pazienti che rispettano i requisiti. La Cooperativa Emmanuel è accreditata con la Regione Campania per l'erogazione di questi servizi." })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6", children: "Come si attiva l'ADI (Assistenza Domiciliare Integrata)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6 leading-relaxed", children: "L'attivazione dell'ADI inizia con una valutazione del medico di medicina generale o dello specialista ospedaliero, che identifica la necessità di assistenza domiciliare integrata. Il medico compila la richiesta e la invia all'ASL competente del territorio (per Napoli, l'ASL Napoli 1 Centro). L'ASL valuta il caso attraverso l'Unità di Valutazione Multidimensionale (UVM) e, in caso di approvazione, autorizza l'ente accreditato (come la Cooperativa Emmanuel) a erogare i servizi necessari." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: "Se ritieni di avere i requisiti per accedere all'ADI a Napoli, parla con il tuo medico di base per avviare il percorso." })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Procedura Passo-Passo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Segui questi semplici passaggi per richiedere l'assistenza domiciliare integrata" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: processSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: index % 2 === 0 ? "left" : "right", delay: index * 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col lg:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: step.image,
            alt: step.title,
            className: "w-full h-64 object-cover rounded-xl shadow-lg"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-1/2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mr-4", children: step.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-8 w-8 text-blue-600" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: step.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: step.details.map((detail, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: detail })
          ] }, idx)) })
        ] })
      ] }) }, step.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Requisiti e Documentazione" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Verifica di avere tutti i requisiti e la documentazione necessaria" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: requirements.map((req, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: index % 2 === 0 ? "left" : "right", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8 text-blue-600 mr-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: req.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: req.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
        ] }, idx)) })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Servizi Inclusi nell'ADI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Tutti i servizi erogati dalla Cooperativa Emmanuel nell'ambito dell'ADI, incluso il supporto psicologico specializzato" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: service })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-3", children: "Nota Importante" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Tutti i servizi ADI sono erogati gratuitamente per i pazienti che rispettano i requisiti. La Cooperativa Emmanuel è accreditata con la Regione Campania e l'ASL Napoli 1 Centro per garantire la massima qualità nell'assistenza domiciliare, incluso il supporto psicologico per pazienti e famiglie." })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24 bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Hai Bisogno di Maggiori Informazioni?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto", children: "I nostri esperti sono a disposizione per guidarti nella procedura di richiesta ADI e rispondere a tutte le tue domande." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contatti",
            className: "px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center",
            children: [
              "Contattaci per Informazioni ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/prenotazioni",
            className: "px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors",
            children: "Prenota Consulenza Gratuita"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-lg p-6 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Contatti Diretti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${CONTACT_INFO.phone}`,
              className: "flex items-center justify-center text-white hover:text-blue-200 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 mr-2" }),
                CONTACT_INFO.phone
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${CONTACT_INFO.email}`,
              className: "flex items-center justify-center text-white hover:text-blue-200 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 mr-2" }),
                CONTACT_INFO.email
              ]
            }
          )
        ] })
      ] })
    ] }) }) })
  ] });
};
const MicronidoRomaganoPage = () => {
  const teamFeatures = [
    { icon: Users, text: "Educatrici qualificate e specializzate" },
    { icon: Target, text: "Rapporto educatore/bambino ottimale per ogni fascia di età" },
    { icon: Heart, text: "Coordinamento pedagogico costante" },
    { icon: CheckCircle, text: "Personale ausiliario dedicato" }
  ];
  const outdoorActivities = [
    "Orto didattico e cura delle piante",
    "Percorsi sensoriali naturali",
    "Giochi con materiali naturali",
    "Esplorazione stagionale",
    "Osservazione di piccoli animali"
  ];
  const laboratoryPrograms = [
    { icon: Music, title: "Musica", description: "Ritmo, canto, strumenti musicali" },
    { icon: Palette, title: "Arte", description: "Manipolazione, pittura, espressione creativa" },
    { icon: Target, title: "Psicomotricità", description: "Movimento, coordinazione, schema corporeo" },
    { icon: Globe, title: "Inglese Ludico", description: "Avvicinamento alla lingua attraverso il gioco" }
  ];
  const qualityServices = [
    "Osservazioni sistematiche e portfolio personalizzato",
    "Questionari di soddisfazione annuali",
    "Focus group con le famiglie",
    "Audit interni e supervisione pedagogica",
    "Protocollo PDCA per miglioramento continuo",
    "Riunioni di équipe settimanali"
  ];
  const familyServices = [
    { icon: MessageCircle, title: "Sportello Psicopedagogico", text: "Minimo 6 ore/mese per consulenze" },
    { icon: Users, title: "Incontri Formativi", text: "Minimo 4 incontri tematici all'anno" },
    { icon: Calendar, title: "Colloqui Individuali", text: "2 colloqui personalizzati per famiglia" },
    { icon: CheckCircle, title: "Piattaforma Digitale", text: 'Sistema "Nido Connesso" con foto e aggiornamenti' }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Micronido d'Infanzia Romagnano Sesia | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Micronido 0-3 anni a Romagnano Sesia: progetto pedagogico innovativo, educazione all'aperto, laboratori specializzati. Educatori qualificati 1:6." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "micronido romagnano sesia, asilo nido 0-3 anni, educazione infanzia, nido d'infanzia piemonte, cooperativa emmanuel, educazione all'aperto, giardino delle meraviglie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/micronido-romagnano-sesia" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ChildCare",
        "name": "Micronido d'Infanzia Romagnano Sesia - Cooperativa Emmanuel",
        "description": "Servizio educativo per bambini 0-3 anni con progetto pedagogico innovativo, educazione all'aperto e laboratori specializzati.",
        "provider": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Romagnano Sesia",
          "addressRegion": "Piemonte",
          "addressCountry": "IT"
        },
        "areaServed": "Romagnano Sesia",
        "audience": {
          "@type": "PeopleAudience",
          "suggestedMinAge": 0,
          "suggestedMaxAge": 3
        }
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cooperativaemmanuel.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servizi",
            "item": "https://cooperativaemmanuel.it/servizi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Micronido Romagnano Sesia",
            "item": "https://cooperativaemmanuel.it/micronido-romagnano-sesia"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Micronido d'Infanzia – Romagnano Sesia",
        description: "Un ambiente educativo accogliente per bambini 0-3 anni",
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: "Micronido Romagnano Sesia" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Un luogo speciale per crescere" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Il Micronido d'Infanzia di Romagnano Sesia della Cooperativa Sociale Emmanuel è un servizio educativo innovativo dedicato ai bambini da 0 a 3 anni, progettato per garantire benessere, sviluppo armonico e continuità educativa in un ambiente sicuro, stimolante e accogliente." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cos'è il Micronido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Il nostro micronido è molto più di un semplice servizio di custodia: è un ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ambiente educativo qualificato" }),
            " dove ogni bambino è accolto come individuo unico, con i suoi tempi, bisogni ed emozioni."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Accogliamo bambini ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "da 0 a 3 anni" }),
            " in piccoli gruppi, garantendo:"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Routine personalizzate che rispettano i ritmi individuali" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continuità affettiva con educatori di riferimento stabili" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: 'Ambienti curati e flessibili che fungono da "terzo educatore"' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sicurezza affettiva e relazioni significative" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "Il nostro obiettivo è accompagnare i bambini nella costruzione della loro ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "identità, autonomia e competenze sociali" }),
            ", in stretta collaborazione con le famiglie."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cosa offre il servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-800 mb-4 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-blue-600 mr-2" }),
              "Routine Quotidiane"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Accoglienza personalizzata"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Gestione pasti equilibrati"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Cambio e cura dell'igiene"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Riposo individualizzato"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Gioco libero e strutturato"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-800 mb-4 flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6 text-blue-600 mr-2" }),
              "Attività Educative"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Laboratori di manipolazione"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Gioco simbolico e sensoriale"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Lettura animata"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Attività motorie"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mr-2", children: "•" }),
                "Esplorazione e scoperta"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3", children: "Gestione Completa del Servizio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
            "La Cooperativa Sociale Emmanuel garantisce la ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "gestione amministrativa, organizzativa e pedagogica completa" }),
            " del servizio, occupandosi di tutti gli aspetti: dal coordinamento educativo alla gestione del personale, dalla sanificazione degli ambienti alla consulenza nutrizionale per i menu."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Il nostro approccio pedagogico" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-6", children: [
          "Il progetto pedagogico del micronido si fonda sullo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "sviluppo integrato" }),
          " di tutte le dimensioni della personalità infantile:"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-blue-600 mb-3", children: "Sviluppo Motorio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Coordinazione, equilibrio, motricità fine e grossolana attraverso gioco libero, percorsi psicomotori e manipolazione." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-green-600 mb-3", children: "Sviluppo Cognitivo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Esplorazione, problem solving, memoria e attenzione attraverso giochi euristici, costruzioni e attività sensoriali." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-purple-600 mb-3", children: "Sviluppo Emotivo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Riconoscimento e gestione delle emozioni, sicurezza affettiva, costruzione dell'identità personale e autostima." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-orange-600 mb-3", children: "Sviluppo Linguistico" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Comunicazione verbale e non verbale, ascolto, comprensione, arricchimento lessicale attraverso letture, canzoni e conversazioni." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-800 mb-3 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-purple-600 mr-2" }),
            "Metodologia"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Utilizziamo una metodologia attiva e partecipativa che valorizza:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gioco" }),
                " come strumento privilegiato di apprendimento"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Osservazione sistematica" }),
                " per conoscere ogni bambino"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Documentazione pedagogica" }),
                " per tracciare i percorsi di crescita"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ambiente come terzo educatore" }),
                ", curato e stimolante"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 400, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Team Educativo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-8", children: "Il nostro team è composto da professionisti qualificati e appassionati, selezionati per competenza, esperienza e sensibilità educativa." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: teamFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-blue-200 rounded-xl p-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Organizzazione e Continuità" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Per garantire la massima continuità educativa e relazionale, il nostro team lavora con:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Organizzazione strutturata" }),
                " che assicura presenza costante degli educatori di riferimento"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Continuità del servizio" }),
                " garantita in ogni momento"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coordinamento costante" }),
                " per progettazione educativa condivisa"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Formazione continua" }),
                " su metodologie innovative e bisogni educativi speciali"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 500, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-800 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TreePine, { className: "h-8 w-8 text-green-600 mr-3" }),
          "Educazione all'Aperto – Il Giardino delle Meraviglie"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed mb-6", children: [
            "Una delle nostre ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "innovazioni più significative" }),
            " è il progetto di ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: `educazione all'aperto "Il Giardino delle Meraviglie"` }),
            ", con ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 sessioni settimanali" }),
            " dedicate all'esplorazione e al contatto con la natura."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Attività Outdoor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: outdoorActivities.map((activity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-white rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: activity })
          ] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-3", children: "Obiettivi Educativi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mr-2", children: "•" }),
                "Sviluppare il rispetto per l'ambiente e gli esseri viventi"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mr-2", children: "•" }),
                "Stimolare curiosità scientifica e spirito di osservazione"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mr-2", children: "•" }),
                "Favorire il movimento libero e lo sviluppo motorio"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mr-2", children: "•" }),
                "Rafforzare il sistema immunitario attraverso l'esposizione naturale"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 mr-2", children: "•" }),
                "Promuovere benessere psicofisico e serenità"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 600, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Laboratori Settimanali con Esperti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-8", children: [
          "Per arricchire l'offerta educativa, proponiamo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "laboratori specializzati condotti da professionisti esterni" }),
          ", integrati nel progetto pedagogico annuale."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: laboratoryPrograms.map((lab, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 rounded-full p-3 mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(lab.icon, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: lab.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: lab.description })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Progetto Educativo Annuale:" }),
          " Ogni anno sviluppiamo un tema conduttore che attraversa tutte le attività, garantendo coerenza pedagogica e continuità educativa."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 700, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Inclusione Bambini con BES e Disabilità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed mb-6", children: [
            "Il nostro micronido è un ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ambiente inclusivo" }),
            " che accoglie bambini con Bisogni Educativi Speciali (BES) e disabilità, garantendo pari opportunità di partecipazione e crescita."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "PEI e PDP Personalizzati" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-3", children: "Elaboriamo Piani Educativi Individualizzati (PEI) e Piani Didattici Personalizzati (PDP) in collaborazione con:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Famiglie" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ASL e specialisti di riferimento" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Équipe educativa del nido" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Supporto Specialistico" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ambienti accessibili e adattati" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Materiali didattici specifici" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Formazione continua del personale" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Monitoraggio costante dei progressi" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 800, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Rapporto con le Famiglie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-8", children: [
          "La ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "partnership educativa con le famiglie" }),
          " è al centro del nostro progetto. Crediamo nella condivisione quotidiana e nella costruzione di un rapporto di fiducia reciproca."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: familyServices.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 rounded-full p-3 mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-6 w-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: service.text })
          ] })
        ] }) }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-12 w-12 text-blue-600 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2", children: "Eventi Pubblici" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "2 eventi all'anno aperti alla comunità" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-12 w-12 text-green-600 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2", children: "Laboratori Condivisi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Attività genitori-bambini durante l'anno" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-12 w-12 text-purple-600 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2", children: "Canale Feedback" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Sistema strutturato per segnalazioni e reclami" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-800 mb-3 flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-blue-600 mr-2" }),
            'Sistema "Nido Connesso"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
            "Attraverso la nostra ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "piattaforma digitale" }),
            ", le famiglie ricevono quotidianamente aggiornamenti sulle attività, foto dei momenti più belli, report sulle routine (pasti, sonno, cambio) e comunicazioni dirette con le educatrici. Un modo moderno e trasparente per rimanere sempre connessi con il nido."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 900, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-800 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8 text-yellow-600 mr-3" }),
          "Qualità del Servizio"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-8", children: [
          "La qualità è garantita attraverso un ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "sistema di monitoraggio continuo" }),
          " basato sul metodo PDCA (Plan-Do-Check-Act) e su strumenti di valutazione costanti."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-6", children: "Strumenti di Monitoraggio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: qualityServices.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-white rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: service })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-yellow-200 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Portfolio Bambino" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
              "Per ogni bambino viene creato un ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "portfolio personalizzato" }),
              " che documenta il percorso di crescita attraverso osservazioni, foto, elaborati e note educative. Un prezioso ricordo che viene consegnato alla famiglia al termine del percorso."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-orange-200 rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800 mb-4", children: "Supervisione Pedagogica" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
              "Il ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "coordinatore pedagogico" }),
              " è presente 10 ore/settimana per supervisione, formazione in servizio, supporto alla progettazione e verifica della qualità educativa. Un presidio costante di competenza e professionalità."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Consulenza Nutrizionale:" }),
          " Collaboriamo con un nutrizionista che verifica annualmente i menu, garantendo pasti equilibrati, variati e adeguati alle esigenze nutrizionali dei bambini 0-3 anni, con attenzione a intolleranze e allergie alimentari."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 1e3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Informazioni e Contatti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "Per informazioni sul servizio Micronido di Romagnano Sesia, contattaci." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-xl font-bold hover:text-blue-200 transition-colors block",
                children: CONTACT_INFO.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-lg hover:text-blue-200 transition-colors break-all",
                children: CONTACT_INFO.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul Micronido di Romagnano Sesia`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
              "Contattaci su WhatsApp"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 1100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-gray-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4 text-center", children: "Perché scegliere il Micronido della Cooperativa Emmanuel?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 text-blue-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Professionalità" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "15+ anni di esperienza nei servizi educativi e sociali" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-8 w-8 text-green-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Qualità Certificata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Certificazione ISO 9001:2015 per la gestione dei servizi" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-purple-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-800 mb-2", children: "Innovazione" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Metodologie moderne e attenzione alle nuove esigenze educative" })
          ] })
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const ADINapoliPage = () => {
  const services = [
    {
      title: "Assistenza Infermieristica",
      description: "Visite mediche, somministrazione terapie, monitoraggio parametri vitali, medicazioni specializzate",
      icon: CheckCircle
    },
    {
      title: "Fisioterapia Domiciliare",
      description: "Esercizi terapeutici, recupero post-operatorio, prevenzione complicanze, rieducazione funzionale",
      icon: Heart
    },
    {
      title: "Assistenza Socio-Sanitaria",
      description: "Aiuto attività quotidiane, supporto mobilità, accompagnamento visite, sostegno psicologico",
      icon: Award
    }
  ];
  const faqs = [
    {
      question: "Cos'è l'ADI e come accedervi?",
      answer: "L'ADI è l'Assistenza Domiciliare Integrata, un servizio sanitario che garantisce cure mediche professionali a domicilio. Accedi attraverso il medico di famiglia che prescrive il servizio all'ASL."
    },
    {
      question: "Quanto tempo prima iniziano i servizi?",
      answer: "Con SSN: 5-10 giorni lavorativi dopo autorizzazione ASL. Percorso privato: entro 24-48 ore dal primo contatto."
    },
    {
      question: "Quali professionisti intervengono?",
      answer: "Infermieri professionali, fisioterapisti, operatori socio-sanitari (OSS), medici, e quando necessario psicologi."
    },
    {
      question: "Posso scegliere i professionisti?",
      answer: "Sì, valutiamo le preferenze personali e garantiamo continuità con gli stessi operatori per favorire la relazione terapeutica."
    },
    {
      question: "A chi è rivolta l'ADI?",
      answer: "Anziani con patologie croniche, persone con disabilità, pazienti post-operatori, malati cronici non autosufficienti, persone in cure palliative."
    },
    {
      question: "L'ADI a Napoli è gratuita?",
      answer: "Sì: l'Assistenza Domiciliare Integrata erogata tramite l'ASL è a carico del Servizio Sanitario Nazionale e gratuita per gli aventi diritto. La Cooperativa Emmanuel è ente accreditato dalla Regione Campania: dopo l'autorizzazione dell'ASL, le prestazioni di infermieri, fisioterapisti e OSS a domicilio non hanno alcun costo per la famiglia."
    },
    {
      question: "Come si richiede un infermiere a domicilio tramite l'ASL di Napoli?",
      answer: "Il medico di medicina generale (o il medico ospedaliero alla dimissione) compila la richiesta di ADI e la invia al Distretto sanitario dell'ASL di residenza (ASL Napoli 1 Centro per la città, ASL Napoli 2 Nord e ASL Napoli 3 Sud per la provincia). Dopo la valutazione dell'UVM viene definito il piano assistenziale e la famiglia può indicare la Cooperativa Emmanuel come ente erogatore."
    },
    {
      question: "Quale zone di Napoli servite?",
      answer: "Copriamo Napoli centro e provincia: Vomero, Chiaia, Posillipo, Pozzuoli, Portici, Ercolano, Torre del Greco e altri comuni della Campania."
    }
  ];
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://cooperativaemmanuel.it/adi-napoli#service",
    "name": "Assistenza Domiciliare Integrata (ADI) Napoli – Cooperativa Sociale Emmanuel",
    "url": "https://cooperativaemmanuel.it/adi-napoli",
    "description": "Assistenza Domiciliare Integrata a Napoli e provincia: infermieri, fisioterapisti e operatori socio-sanitari a domicilio. Ente accreditato dalla Regione Campania, servizio gratuito tramite ASL per gli aventi diritto.",
    "telephone": "+39-081-7877064",
    "email": "cooperativa.emmanuel@outlook.it",
    "image": "https://cooperativaemmanuel.it/images/Logo.png",
    "priceRange": "Gratuito tramite ASL",
    "address": { "@type": "PostalAddress", "addressLocality": "Napoli", "addressRegion": "Campania", "addressCountry": "IT" },
    "areaServed": ["Napoli", "Pozzuoli", "Portici", "Ercolano", "Torre del Greco", "Giugliano in Campania", "Casoria", "Afragola", "Acerra", "Frattamaggiore"].map((name) => ({ "@type": "City", "name": name })),
    "parentOrganization": { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Prestazioni ADI",
      "itemListElement": ["Assistenza infermieristica domiciliare", "Fisioterapia domiciliare", "Assistenza socio-sanitaria (OSS)", "Visite mediche specialistiche a domicilio"].map((name) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "MedicalProcedure", "name": name }
      }))
    }
  };
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
      { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
      { "@type": "ListItem", "position": 3, "name": "ADI Napoli", "item": "https://cooperativaemmanuel.it/adi-napoli" }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "ADI Napoli – Assistenza Domiciliare Integrata | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Assistenza Domiciliare Integrata (ADI) a Napoli accreditata Regione Campania: infermieri, fisioterapisti e OSS a domicilio, gratuita tramite ASL per gli aventi diritto. ☎ 081 7877064" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "ADI Napoli, assistenza domiciliare integrata Napoli, assistenza domiciliare Napoli, ADI ASL Napoli, infermiere domicilio ASL Napoli, cure domiciliari Napoli, assistenza domiciliare anziani Napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/adi-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "ADI Napoli – Assistenza Domiciliare Integrata | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Assistenza Domiciliare Integrata a Napoli accreditata Regione Campania. Infermieri, fisioterapisti e OSS a casa tua, gratuita tramite ASL per gli aventi diritto." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/adi-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFAQ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaBreadcrumb) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Assistenza Domiciliare Integrata (ADI) a Napoli",
        subtitle: "Servizi sanitari certificati dalla Regione Campania"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "ADI Napoli: Assistenza Domiciliare Certificata" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "L'Assistenza Domiciliare Integrata (ADI) è il servizio sanitario completo per anziani, persone con disabilità e pazienti in convalescenza che desiderano ricevere cure professionali a domicilio. La Cooperativa Sociale Emmanuel è accreditata dalla Regione Campania dal 2015." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-8", children: "I nostri team multidisciplinari garantiscono infermieri professionali, fisioterapisti e operatori socio-sanitari qualificati, disponibili 24 ore su 24. Con 185 persone assistite e 15 anni di esperienza, sappiamo come prendersi cura chi ha più bisogno." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "ADI tramite ASL Napoli: gratuita per chi ne ha diritto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 leading-relaxed mb-4", children: [
          "L'Assistenza Domiciliare Integrata è un servizio del Servizio Sanitario Nazionale: viene attivata dall'",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL" }),
          " su richiesta del medico di famiglia o del medico ospedaliero e, per gli aventi diritto, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "non ha alcun costo per la famiglia" }),
          ". La Cooperativa Emmanuel è ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ente accreditato dalla Regione Campania" }),
          " per l'erogazione dell'ADI e lavora con i Distretti sanitari dell'",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 1 Centro" }),
          " (città di Napoli), dell'",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 2 Nord" }),
          " e dell'",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 3 Sud" }),
          " (provincia)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "list-decimal pl-6 space-y-2 text-gray-700 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Richiesta del medico" }),
            ": il medico di medicina generale (o il reparto alla dimissione) compila la richiesta di ADI."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Valutazione dell'ASL" }),
            ": l'Unità di Valutazione Multidimensionale (UVM) del Distretto valuta i bisogni e definisce il Piano Assistenziale Individuale."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scelta dell'ente erogatore" }),
            ": la famiglia può indicare la Cooperativa Emmanuel tra gli enti accreditati."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Avvio a domicilio" }),
            ": infermieri, fisioterapisti e OSS iniziano le prestazioni previste dal piano, coordinandosi con il medico curante."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700", children: [
          "Se i requisiti per l'ADI non sono presenti, o nell'attesa dell'autorizzazione, è possibile attivare ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/infermiere-domicilio-napoli", className: "text-blue-700 underline font-medium", children: "l'infermiere a domicilio in forma privata" }),
          " entro 24-48 ore. Qui trovi la ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/come-richiedere-adi", className: "text-blue-700 underline font-medium", children: "procedura completa per richiedere l'ADI in Campania" }),
          "."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Servizi ADI Inclusi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: services.map((service, index) => {
          const IconComponent = service.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-blue-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: service.description })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Perché Scegliere Emmanuel per l'ADI?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Accreditata Regione Campania" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Certificazione ufficiale dal 2015 per erogazione ADI" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-8 h-8 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Team Multidisciplinare" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Infermieri, fisioterapisti, OSS, medici coordinati" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-8 h-8 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Disponibilità 24/7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Assistenza continua per emergenze e necessità" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-8 h-8 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: "Copertura Completa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Napoli, provincia e Campania" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "A Chi È Rivolta l'ADI?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-6", children: [
          "Anziani 65+ con malattie croniche",
          "Persone con disabilità che necessitano monitoraggio",
          "Pazienti post-operatori in fase di recupero",
          "Malati cronici non autosufficienti",
          "Persone in convalescenza da malattie gravi",
          "Pazienti terminali in cure palliative"
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Domande Frequenti su ADI Napoli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-bold text-gray-900 text-lg flex items-center justify-between", children: [
            faq.question,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-4 pl-4 border-l-4 border-blue-600", children: faq.answer })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Aree Servite a Napoli e Provincia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-4", children: "Napoli Quartieri" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-4", children: "Provincia Campania" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano in Campania, Casoria, Afragola, Acerra, Frattamaggiore, Frattaminore" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-6", children: "Garantiamo intervento rapido (24-48 ore) su tutto il territorio con team coordinati e professionali." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Inizia Oggi la Tua Assistenza Domiciliare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Una valutazione gratuita a domicilio per comprendere le tue necessità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contatti", className: "bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors", children: "Compila il Modulo di Contatto" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/infermiere-domicilio-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Infermiere a Domicilio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Assistenza infermieristica 24/7 a Napoli" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/fisioterapia-domicilio-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Fisioterapia Domiciliare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Riabilitazione professionale a casa tua" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/come-richiedere-adi", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Come Richiedere ADI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Procedura completa step-by-step" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const InfermiereDomicilioPage = () => {
  const services = [
    {
      title: "Somministrazione Terapie",
      description: "Iniezioni, infusioni endovenose, pompe infusionali, gestione farmaci e controllo assunzione",
      icon: Stethoscope
    },
    {
      title: "Monitoraggio Clinico",
      description: "Pressione arteriosa, frequenza cardiaca, saturazione ossigeno, glicemia, parametri vitali",
      icon: Clock
    },
    {
      title: "Medicazioni Specializzate",
      description: "Post-chirurgiche, piaghe, ferite, cambio medicazioni, prevenzione infezioni",
      icon: CheckCircle
    }
  ];
  const faqs = [
    {
      question: "Cos'è l'assistenza infermieristica domiciliare?",
      answer: "È un servizio sanitario professionale erogato da infermieri certificati a domicilio, non semplice badanza ma intervento medico coordinato con il medico curante."
    },
    {
      question: "Chi sono gli infermieri?",
      answer: "Professionisti laureati e iscritti all'ordine, specializzati in geriatria e assistenza domiciliare con formazione continua."
    },
    {
      question: "Quando è necessaria l'infermieristica domiciliare?",
      answer: "Dopo dimissioni ospedaliere, malattie croniche, terapie complesse, gestione ferite, prevenzione piaghe, pazienti allettati a lungo termine."
    },
    {
      question: "Quanto dura una visita?",
      answer: "Mediamente 30-45 minuti a seconda dell'intervento necessario. Alcuni pazienti richiedono visite più brevi, altri più lunghe."
    },
    {
      question: "Posso avere un infermiere a domicilio tramite l'ASL di Napoli?",
      answer: "Sì. Tramite l'Assistenza Domiciliare Integrata (ADI) l'ASL Napoli 1 Centro, l'ASL Napoli 2 Nord e l'ASL Napoli 3 Sud garantiscono gratuitamente le prestazioni infermieristiche a domicilio agli aventi diritto. La richiesta parte dal medico di famiglia; la Cooperativa Emmanuel è ente accreditato dalla Regione Campania e può essere scelta come erogatore del servizio."
    },
    {
      question: "Qual è la differenza tra infermiere ASL e infermiere privato?",
      answer: "L'infermiere tramite ASL (ADI) è gratuito ma richiede la prescrizione del medico e l'autorizzazione del Distretto, con tempi di alcuni giorni. L'infermiere privato si attiva in 24-48 ore senza prescrizione, con tariffe concordate. Molte famiglie iniziano con il servizio privato in attesa dell'attivazione dell'ADI."
    },
    {
      question: "Come prenoto un infermiere?",
      answer: "Chiama 081 7877064 oppure scrivi email a cooperativa.emmanuel@outlook.it. Risposta garantita entro 2 ore."
    },
    {
      question: "È disponibile anche festivi e notte?",
      answer: "Sì, disponibilità 24/7 inclusi festivi per esigenze urgenti di pazienti in condizioni critiche."
    }
  ];
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Assistenza Infermieristica Domiciliare Napoli",
    "provider": {
      "@type": "Organization",
      "name": "Cooperativa Sociale Emmanuel",
      "telephone": "+39-081-7877064",
      "url": "https://cooperativaemmanuel.it"
    },
    "areaServed": "Napoli, Campania, Italia",
    "availableLanguage": "it"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Infermiere a Domicilio Napoli – tramite ASL (ADI) o privato | Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Infermiere a domicilio a Napoli: gratuito tramite ASL con l'ADI per gli aventi diritto, oppure privato in 24-48 ore. Medicazioni, terapie, prelievi, monitoraggio. Cooperativa Emmanuel accreditata Regione Campania." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "infermiere domicilio ASL Napoli, infermiere a domicilio Napoli, assistenza infermieristica domiciliare Napoli, infermiere ADI Napoli, infermiere domicilio Napoli, infermiere a casa Napoli, assistenza infermieristica domiciliare, cure infermieristiche Napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/infermiere-domicilio-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Infermiere a Domicilio Napoli | Assistenza 24/7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Infermieri qualificati a domicilio a Napoli. Medicazioni, terapie, monitoraggio. Disponibilità 24 ore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/infermiere-domicilio-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFAQ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Infermiere a Domicilio a Napoli",
        subtitle: "Assistenza infermieristica professionale 24/7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Assistenza Infermieristica Domiciliare a Napoli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "Un infermiere a domicilio rappresenta la soluzione ideale quando la salute richiede monitoraggio medico costante, ma il ricovero non è necessario. La Cooperativa Sociale Emmanuel mette a disposizione infermieri professionali qualificati, disponibili 24 ore su 24 a Napoli e provincia." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-8", children: "Dalla somministrazione di terapie farmacologiche al cambio di medicazioni, dal monitoraggio di parametri vitali alle gestioni di accessi vascolari: i nostri infermieri sanno come prendersi cura con dedizione e professionalità." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Infermiere a domicilio tramite ASL Napoli (ADI) o privato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Tramite ASL: gratuito con l'ADI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-3", children: [
              "Per anziani non autosufficienti, persone con disabilità, pazienti dimessi dall'ospedale o con patologie croniche, l'",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 1 Centro" }),
              ", l'",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 2 Nord" }),
              " e l'",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ASL Napoli 3 Sud" }),
              " attivano l'Assistenza Domiciliare Integrata. Le prestazioni infermieristiche a domicilio sono ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "a carico del Servizio Sanitario Nazionale" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-3", children: [
              "La richiesta parte dal ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "medico di famiglia" }),
              "; dopo la valutazione del Distretto, la famiglia può scegliere la Cooperativa Emmanuel, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "accreditata dalla Regione Campania" }),
              ", come ente erogatore."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/come-richiedere-adi", className: "text-blue-700 underline font-medium", children: "Come richiedere l'ADI all'ASL →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: "Privato: attivo in 24-48 ore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 mb-3", children: [
              "Senza prescrizione e senza attese: un infermiere della cooperativa viene a casa per ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "medicazioni, terapie iniettive e infusionali, prelievi, gestione cateteri e stomie, monitoraggio dei parametri" }),
              ", anche la sera e nei festivi."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-3", children: "È la soluzione ideale per esigenze brevi, per chi non ha i requisiti ADI o nell'attesa che l'ASL autorizzi il servizio." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "text-blue-700 underline font-medium", children: [
              "Chiama ",
              CONTACT_INFO.phone,
              " →"
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Servizi Infermieristici Principali" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: services.map((service, index) => {
          const IconComponent = service.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-blue-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: service.description })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "I Nostri Infermieri Sono Diversi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Professionisti Certificati" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Laureati e iscritti all\\'ordine nazionale degli infermieri" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Disponibilità 24/7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Interventi urgenti garantiti tutti i giorni inclusi festivi" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Continuità Relazionale" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Stessi professionisti quando possibile per fiducia e relazione" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Coordinamento Medico" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Contatto costante con medico curante e strutture sanitarie" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Per Chi È Necessaria l'Infermieristica Domiciliare?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-6", children: [
          "Pazienti in dimissione ospedaliera",
          "Anziani con malattie croniche",
          "Persone con disabilità motoria",
          "Pazienti post-operatori",
          "Persone allettate a lungo termine",
          "Chi ha terapie endovenose a domicilio",
          "Pazienti terminali in cure palliative",
          "Famiglie che non possono gestire terapie complesse"
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Domande Frequenti su Infermieri a Domicilio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-bold text-gray-900 text-lg flex items-center justify-between", children: [
            faq.question,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-4 pl-4 border-l-4 border-blue-600", children: faq.answer })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Aree di Intervento a Napoli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Copriamo l'intera provincia di Napoli con tempi di risposta garantiti:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Napoli Città" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: "Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Provincia Campania" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: "Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano in Campania, Casoria, Afragola, Acerra e limitrofi" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Hai Bisogno di un Infermiere Domiciliare?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Chiama subito o compila il form di contatto per ricevere una valutazione gratuita" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contatti", className: "bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors", children: "Richiedi Assistenza" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Servizi Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/adi-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "ADI Napoli" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Assistenza Domiciliare Integrata Certificata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/fisioterapia-domicilio-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Fisioterapia Domiciliare" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Riabilitazione professionale personalizzata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/servizi", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Tutti i Servizi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Scopri l\\'intera gamma di servizi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const FisioterapiaDomicilioPage = () => {
  const services = [
    {
      title: "Valutazione Iniziale",
      description: "Anamnesi clinica completa, test forza muscolare, valutazione equilibrio e deambulazione, identificazione deficit",
      icon: Activity
    },
    {
      title: "Esercizi Terapeutici",
      description: "Mobilizzazione, esercizi attivi, rinforzo muscolare, rieducazione deambulazione, propriocettività",
      icon: TrendingUp
    },
    {
      title: "Tecniche Specializzate",
      description: "Massoterapia terapeutica, terapia manuale, stretching, tecniche posturali, elettroterapia",
      icon: Heart
    }
  ];
  const faqs = [
    {
      question: "Quando si vedono i risultati dalla fisioterapia?",
      answer: "Percezione soggettiva dopo 2-3 settimane. Miglioramenti oggettivi e misurabili dopo 4-6 settimane di trattamento regolare."
    },
    {
      question: "Cos'è la fisioterapia domiciliare?",
      answer: "È un trattamento riabilitativo presso il domicilio del paziente con scopo di migliorare mobilità, forza, equilibrio e indipendenza nelle attività quotidiane."
    },
    {
      question: "Quanto dura una seduta di fisioterapia?",
      answer: "Generalmente 45-60 minuti, a seconda del programma personalizzato e della patologia del paziente."
    },
    {
      question: "Devo avere prescrizione medica?",
      answer: "Non obbligatoria, ma consigliata per continuità clinica. Contattaci per coordinamento con il tuo medico."
    },
    {
      question: "Posso fare fisioterapia se sono allettato?",
      answer: "Sì, abbiamo protocolli specifici per pazienti con mobilità molto ridotta o completamente allettati."
    },
    {
      question: "Sarà sempre lo stesso fisioterapista?",
      answer: "Sì, garantiamo continuità professionale per favorire il rapporto terapeutico e il monitoraggio dei progressi."
    }
  ];
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fisioterapia Domiciliare Napoli",
    "provider": {
      "@type": "Organization",
      "name": "Cooperativa Sociale Emmanuel",
      "telephone": "+39-081-7877064",
      "url": "https://cooperativaemmanuel.it"
    },
    "areaServed": "Napoli, Campania, Italia",
    "availableLanguage": "it"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Fisioterapia a Domicilio Napoli | Riabilitazione Professionale Personalizzata" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Fisioterapia a domicilio a Napoli con fisioterapisti qualificati. Post-operatorio, anziani, disabili. Riabilitazione personalizzata. Cooperativa Emmanuel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "fisioterapia domicilio Napoli, fisioterapia domiciliare Napoli, riabilitazione domiciliare Napoli, fisioterapista Napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/fisioterapia-domicilio-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Fisioterapia a Domicilio Napoli | Riabilitazione Professionale" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Fisioterapisti qualificati a domicilio a Napoli. Riabilitazione personalizzata, post-operatorio, anziani. Contatta Emmanuel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/fisioterapia-domicilio-napoli" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFAQ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Fisioterapia a Domicilio a Napoli",
        subtitle: "Riabilitazione professionale personalizzata"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Fisioterapia Domiciliare a Napoli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "La fisioterapia domiciliare rappresenta il modo migliore per recuperare mobilità e autonomia personale senza lo stress di raggiungere strutture sanitarie. La Cooperativa Sociale Emmanuel mette a disposizione fisioterapisti certificati che si recano direttamente a casa tua." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-8", children: "Che si tratti di recupero post-operatorio, miglioramento della mobilità in anziani, supporto per disabilità motoria o trattamento di patologie croniche: i nostri professionisti sanno come restituire qualità della vita e autonomia funzionale." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Servizi Fisioterapici Domiciliari" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: services.map((service, index) => {
          const IconComponent = service.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-blue-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: service.description })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "I Nostri Fisioterapisti" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Laureati Specializzati" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Fisioterapisti con formazione universitaria e specializzazione geriatrica" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Approccio Personalizzato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Ogni programma è costruito sulle necessità specifiche del singolo paziente" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Risultati Misurabili" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Monitoraggio costante dei progressi con valutazioni mensili e adattamenti" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-blue-600 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900", children: "Continuità Terapeutica" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Stesso professionista quando possibile per relazione continuativa e fiducia" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Per Chi È Indicata la Fisioterapia?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-6", children: [
          "Persone in recupero post-operatorio",
          "Anziani con problemi di mobilità",
          "Pazienti affetti da ictus",
          "Persone con disabilità fisica",
          "Pazienti con artrosi e patologie articolari",
          "Chi ha difficoltà a deambulare",
          "Persone che desiderano prevenire cadute",
          "Famiglie che cercano riabilitazione domiciliare"
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Patologie Trattate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Post-Operatorio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-gray-700 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Protesi d'anca e ginocchio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Fratture e interventi ortopedici" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Interventi addominali" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Riabilitazione post-chirurgica" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Patologie Croniche" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-gray-700 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ictus e esiti neurologici" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Artrosi e artriti" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Disabilità motoria" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Rigidità e limitazioni articolari" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Domande Frequenti su Fisioterapia Domiciliare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "font-bold text-gray-900 text-lg flex items-center justify-between", children: [
            faq.question,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mt-4 pl-4 border-l-4 border-blue-600", children: faq.answer })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Aree di Servizio a Napoli" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Garantiamo intervento rapido in tutta la provincia:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Napoli Città" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: "Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-3", children: "Provincia Campania" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: "Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano, Casoria, Afragola, Acerra, Frattamaggiore, Frattaminore" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Recupera Mobilità e Autonomia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Una valutazione fisioterapica gratuita a domicilio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contatti", className: "bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors", children: "Richiedi Valutazione" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Servizi Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/adi-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "ADI Napoli" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Assistenza Domiciliare Integrata Certificata" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/infermiere-domicilio-napoli", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Infermiere a Domicilio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Assistenza infermieristica 24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/servizi", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Tutti i Servizi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Scopra l\\'intera gamma di servizi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const MicronidoAlbiolaPage = () => {
  const guarantees = [
    { icon: Users, title: "Educatore Dedicato", text: "Professionista stabile e competente" },
    { icon: CheckCircle, title: "Continuità Garantita", text: "Senza interruzioni durante l'anno educativo" },
    { icon: Award, title: "Qualifica Pari", text: "Sostituto con pari competenze in caso di assenza" },
    { icon: Heart, title: "Monitoraggio Mensile", text: "Report dettagliati delle attività svolte" }
  ];
  const networkActivities = [
    "Coordinamento con lo staff del nido",
    "Partecipazione alle riunioni di programmazione",
    "Comunicazione giornaliera famiglia-educatore",
    "Condivisione obiettivi pedagogici"
  ];
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Micronido – Albisola Superiore - Cooperativa Emmanuel",
    "description": "Servizio di assistenza educativa individualizzata presso l'asilo nido comunale per il sostegno allo sviluppo, all'autonomia e al benessere della minore.",
    "provider": {
      "@type": "Organization",
      "name": "Cooperativa Sociale Emmanuel",
      "url": "https://cooperativaemmanuel.it"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Albisola Superiore",
      "addressRegion": "Liguria",
      "addressCountry": "IT"
    },
    "areaServed": "Albisola Superiore",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 0,
      "suggestedMaxAge": 3
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Micronido Albisola Superiore | Educativa Individualizzata" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Micronido Albisola Superiore: educativa individualizzata presso asilo nido comunale. Educatore dedicato, continuità garantita, rendicontazione mensile." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "micronido albisola, assistenza educativa nido, educativa individuale, asilo nido liguria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/micronido-albisola-superiore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Micronido Albisola Superiore | Educativa Individualizzata" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Educativa individualizzata presso asilo nido comunale di Albisola Superiore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/micronido-albisola-superiore" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Micronido – Albisola Superiore",
        subtitle: "Intervento educativo individualizzato nel contesto del nido"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Educativa Individualizzata al Nido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "Il servizio di assistenza educativa presso l'asilo nido comunale di Albisola Superiore rappresenta un intervento mirato allo sviluppo dell'autonomia, delle competenze relazionali e della partecipazione inclusiva del bambino alle attività didattiche ordinarie." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Un Servizio su Misura" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-gray-700 leading-relaxed mb-8", children: [
          "Il progetto prevede un intervento educativo personalizzato per ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6 ore settimanali" }),
          ", finalizzato allo sviluppo dell'autonomia, delle competenze relazionali e della partecipazione alle attività del nido in un contesto inclusivo e continuativo. L'educatore dedicato opera all'interno della struttura in coordinamento con lo staff pedagogico del nido."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 border-l-4 border-blue-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-4", children: "Modalità di Intervento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Affiancamento educativo individualizzato" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Facilitazione della partecipazione alle attività di gruppo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Supporto allo sviluppo di competenze autonome" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold mt-1", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coordinamento costante con la famiglia e lo staff del nido" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Cosa Garantiamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: guarantees.map((item, index) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-blue-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: item.text })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-gray-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Lavoro in Rete con il Nido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: networkActivities.map((activity, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-lg", children: activity })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Rendicontazione Mensile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Ogni mese viene redatto un report dettagliato che documenta:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-3", children: "Aspetti Osservati" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Progressi nello sviluppo autonomia" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Qualità delle relazioni con pari e adulti" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Partecipazione alle attività" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Benessere e adattamento al contesto" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-3", children: "Condivisione con" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Famiglia" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Staff pedagogico del nido" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Coordinatore del servizio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Équipe di supervisione" })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Scopri il Nostro Intervento Educativo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Contattaci per una consulenza gratuita su questo servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contatti", className: "bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center gap-2", children: [
            "Contattaci ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Servizi Educativi Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/educativa-domiciliare-ambito-n12", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Educativa Domiciliare – Ambito N12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Modello ecosistemico per minori e famiglie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/nido-san-gemini", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Nido d'Infanzia – San Gemini" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Ecosistema educativo 0-3 innovativo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const EducativaDomiciliareAmbito12Page = () => {
  const objectives = [
    { icon: Heart, title: "Competenze Genitoriali", text: "Supporto al ruolo genitoriale e empowerment familiare" },
    { icon: BookOpen, title: "Percorso Scolastico", text: "Accompagnamento e supporto al successo formativo" },
    { icon: Target, title: "Autonomia Personale", text: "Sviluppo di competenze autonome e autodeterminazione" },
    { icon: Users, title: "Inclusione Sociale", text: "Accesso a opportunità e contesti sociali" }
  ];
  const tools = [
    "Piano Educativo Individualizzato (PEI) digitale e condiviso",
    "Monitoraggio sistematico di indicatori di progresso",
    "Incontri di rete periodici con scuola e servizi territoriali",
    "Attivazione di opportunità educative e ricreative sul territorio"
  ];
  const approaches = [
    { title: "Ecosistemico", description: "Minore, famiglia, scuola, territorio come sistemi interconnessi" },
    { title: "Partecipativo", description: "Co-progettazione con la famiglia e la rete territoriale" },
    { title: "Empowering", description: "Valorizzazione delle risorse familiari e comunitarie" },
    { title: "Data-driven", description: "Monitoraggio sistematico e adattamento continuo" }
  ];
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Servizio Educativo Domiciliare – Ambito N12 Pozzuoli",
    "description": "Percorsi di educativa domiciliare ecosistemica per minori e famiglie in condizioni di fragilità.",
    "provider": {
      "@type": "Organization",
      "name": "Cooperativa Sociale Emmanuel",
      "url": "https://cooperativaemmanuel.it"
    },
    "areaServed": "Pozzuoli, Campania",
    "audience": {
      "@type": "PeopleAudience",
      "name": "Minori e famiglie in situazioni di fragilità"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Educativa Domiciliare Ambito N12 Pozzuoli | Modello Ecosistemico" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Educativa domiciliare ecosistemica per minori e famiglie - Ambito N12 Pozzuoli. PEI, empowerment familiare, supporto scolastico. Cooperativa Emmanuel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "educativa domiciliare pozzuoli, educativa minori, intervento educativo famiglia, ambito n12, minori in difficoltà" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/educativa-domiciliare-ambito-n12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Educativa Domiciliare Ambito N12 | Modello Ecosistemico" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Educativa domiciliare per minori e famiglie con approccio ecosistemico. Pozzuoli, Campania." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/educativa-domiciliare-ambito-n12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Educativa Domiciliare – Ambito N12",
        subtitle: "Un modello ecosistemico per minori e famiglie"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Educativa Domiciliare Ecosistemica" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "Il servizio di educativa domiciliare dell'Ambito N12 Pozzuoli rappresenta un intervento innovativo basato sul modello ecosistemico, che mette al centro il minore e la sua famiglia come parte di una rete di sistemi interconnessi: scuola, servizi sanitari, territorio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Destinato a minori e famiglie in situazioni di fragilità, il servizio prevede percorsi personalizzati che combinano supporto educativo, accompagnamento alla scolarità e attivazione delle risorse territoriali." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Il Nostro Approccio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 leading-relaxed mb-8", children: "Il modello di Educazione Domiciliare Ecosistemica riconosce che il benessere del minore dipende dall'interazione positiva tra più sistemi: la famiglia, la scuola, la comunità, i servizi. L'intervento educativo non si limita al domicilio, ma attiva una rete di relazioni e risorse territoriali." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: approaches.map((approach, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: approach.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: approach.description })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Obiettivi del Servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: objectives.map((obj, index) => {
          const IconComponent = obj.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-blue-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: obj.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: obj.text })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-gray-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Strumenti Operativi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: tools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-lg", children: tool })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Chi Può Accedere" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Il servizio è rivolto a minori e famiglie che si trovano in situazioni di fragilità socio-educativa, quali:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid md:grid-cols-2 gap-4", children: [
            "Difficoltà di scolarizzazione o abbandono scolastico",
            "Situazioni di disagio familiare o economico",
            "Minori con esigenze educative speciali",
            "Famiglie monoparentali in difficoltà",
            "Minori con comportamenti problematici",
            "Situazioni di isolamento sociale"
          ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
          ] }, index)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-blue-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Il Processo di Intervento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [
          { num: "1", title: "Presa in carico", desc: "Valutazione dei bisogni della famiglia e del minore" },
          { num: "2", title: "Co-progettazione", desc: "Elaborazione partecipata del Piano Educativo Individualizzato" },
          { num: "3", title: "Intervento educativo", desc: "Affiancamento e supporto nel domicilio e sul territorio" },
          { num: "4", title: "Monitoraggio", desc: "Osservazione sistematica del progresso verso gli obiettivi" },
          { num: "5", title: "Rete territoriale", desc: "Incontri periodici con scuola, servizi e comunità" },
          { num: "6", title: "Valutazione", desc: "Verifica degli obiettivi raggiunti e prosecuzione o chiusura" }
        ].map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex-shrink-0", children: step.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: step.desc })
          ] })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Scopri se il Servizio Fa per Te" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Contattaci per una valutazione gratuita e senza impegno" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contatti", className: "bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center gap-2", children: [
            "Contattaci ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Servizi Educativi Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/micronido-albisola-superiore", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Micronido – Albisola Superiore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Educativa individualizzata nel nido" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/nido-san-gemini", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Nido d'Infanzia – San Gemini" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Ecosistema educativo 0-3 innovativo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const NidoSanGeminiPage = () => {
  const pillars = [
    { icon: BookOpen, title: "Ascolto e Osservazione", text: "Pedagogia dell'ascolto con documentazione sistematica" },
    { icon: Users, title: "Co-progettazione", text: "Coinvolgimento attivo delle famiglie nella progettazione" },
    { icon: Palette, title: "Documentazione", text: "Portfolio pedagogico come strumento educativo" },
    { icon: TreePine, title: "Atelier e Giardino", text: "Ambienti progettati come terzo educatore" }
  ];
  const qualityTools = [
    "Supervisione pedagogica periodica da esperti Reggio Children",
    "Riunioni di équipe strutturate e supervisione settimanale",
    "Bilancio di qualità educativa annuale",
    "Piattaforma digitale Family Hub per condivisione con famiglie"
  ];
  const activities = [
    { icon: Music, title: "Laboratorio Musicale", desc: "Ritmo, canto, scoperta degli strumenti" },
    { icon: Palette, title: "Atelier Creativo", desc: "Pittura, manipolazione, espressione artistica" },
    { icon: Target, title: "Motricità Consapevole", desc: "Movimento, gioco corporeo, equilibrio" },
    { icon: TreePine, title: "Outdoor Education", desc: "Giardino pedagogico, naturalistico, sensoriale" }
  ];
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Nido d'Infanzia – San Gemini - Cooperativa Emmanuel",
    "description": "Un hub civico per l'infanzia basato su approccio Reggio Children e Outdoor Education.",
    "provider": {
      "@type": "Organization",
      "name": "Cooperativa Sociale Emmanuel",
      "url": "https://cooperativaemmanuel.it"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Gemini",
      "addressRegion": "Umbria",
      "addressCountry": "IT"
    },
    "areaServed": "San Gemini",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 0,
      "suggestedMaxAge": 3
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Nido d'Infanzia San Gemini | Innovativo Reggio Children" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Nido d'Infanzia San Gemini: approccio Reggio Children e Outdoor Education. Hub civico per infanzia 0-3 anni. Reggio Children, atelier, giardino pedagogico." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "nido san gemini, asilo nido reggio children, educazione infanzia 0-3, outdoor education, cooperativa emmanuel, nido innovative umbria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/nido-san-gemini" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Nido d'Infanzia San Gemini | Innovativo Reggio Children" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Nido 0-3 anni con approccio Reggio Children e Outdoor Education. San Gemini, Umbria." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/nido-san-gemini" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaService) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "Nido d'Infanzia – San Gemini",
        subtitle: "Un ecosistema educativo 0-3 innovativo e sostenibile"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "py-12 px-4 md:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Un Nido Pensato Diversamente" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-6", children: "Il Nido d'Infanzia di San Gemini rappresenta un hub civico innovativo che integra l'approccio Reggio Children e l'Outdoor Education, promuovendo il bambino come protagonista attivo del proprio apprendimento in un ambiente dove la pedagogia incontra la sostenibilità." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Non semplice custode di bambini, ma comunità educante che accoglie, ascolta, osserva e documenta il processo di crescita in un contesto ricco di stimoli naturali e opportunità relazionali." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Il Modello Educativo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 leading-relaxed mb-8", children: "Il servizio integra il pensiero di Reggio Emilia (bambino competente, ambiente come terzo educatore, documentazione pedagogica) con la pratica dell'Outdoor Education (apprendimento in natura, sostenibilità, benessere). L'approccio riconosce che il bambino apprende attraverso i sensi, l'esplorazione, il gioco libero e la relazione." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-8 h-8 text-green-600 mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-900 mb-2", children: pillar.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm", children: pillar.text })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "I Nostri Pilastri Pedagogici" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: [
          {
            num: "1",
            title: "Pedagogia dell'Ascolto",
            desc: "L'adulto osserva sistematicamente il bambino per comprendere gli interessi, le curiosità e il processo di apprendimento. L'osservazione diventa base della progettazione."
          },
          {
            num: "2",
            title: "Co-progettazione con le Famiglie",
            desc: "Le famiglie non sono semplici fruitori, ma co-progettatori attivi del percorso educativo. Riunioni collaborative e Bilancio di qualità partecipato."
          },
          {
            num: "3",
            title: "Documentazione Pedagogica",
            desc: "Foto, video e diari narrano il processo di apprendimento. Ogni bambino ha un portfolio che racconta il suo percorso e diventa strumento di riflessione."
          },
          {
            num: "4",
            title: "Atelier e Giardino Pedagogico",
            desc: "Lo spazio è progettato come terzo educatore. Ambienti multisensoriali, atelier creativo, orto biologico e giardino naturalistico favoriscono scoperta e benessere."
          }
        ].map((pillar, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold flex-shrink-0", children: pillar.num }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: pillar.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: pillar.desc })
          ] })
        ] }) }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-10", children: "Laboratori e Attività" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: activities.map((activity, index) => {
          const IconComponent = activity.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-12 h-12 text-green-600 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: activity.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: activity.desc })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16 bg-teal-50 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Strumenti per la Qualità Educativa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: qualityTools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-lg", children: tool })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Un Hub per la Comunità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Family Hub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Uno spazio per le famiglie con incontri formativi, gruppi di discussione, consulenze pedagogiche e opportunità di connessione con altri genitori." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Incontri formativi tematici" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Sportello genitoriale" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Comunità genitoriale" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Sostenibilità e Comunità" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Il nido opera come hub civico: condivide spazi con la comunità, attiva progetti di volontariato, promuove sostenibilità ambientale." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Orto biologico condiviso" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Progetti ambientali" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Connessioni territoriali" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Chi Siamo Diventati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-800 leading-relaxed", children: "Non un semplice nido, ma una comunità educante dove il bambino è ascoltato e valorizzato, dove la famiglia è co-progettista, dove lo spazio parla pedagogia e dove la sostenibilità è pratica quotidiana. Un luogo dove cresce non solo il bambino, ma la consapevolezza di una comunità che sa prendersi cura." }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-lg p-12 text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Scopri il Nido d'Infanzia San Gemini" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 text-green-100", children: "Visita il nido o contattaci per una consulenza gratuita" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${CONTACT_INFO.phone}`, className: "bg-white text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            CONTACT_INFO.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contatti", className: "bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2", children: [
            "Contattaci ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Servizi Educativi Correlati" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/micronido-albisola-superiore", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Micronido – Albisola Superiore" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Educativa individualizzata nel nido" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/educativa-domiciliare-ambito-n12", className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: "Educativa Domiciliare – Ambito N12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 mb-4", children: "Modello ecosistemico per minori e famiglie" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 font-bold", children: "Scopri di più →" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const ADIPorticiPage = () => {
  const serviceFeatures = [
    { icon: Users, text: "Valutazione multidimensionale dei bisogni" },
    { icon: Heart, text: "Assistenza sanitaria e supporto socio-assistenziale" },
    { icon: Shield, text: "Coordinamento tra tutti i servizi coinvolti" },
    { icon: Calendar, text: "Monitoraggio continuo e adattamento del piano" }
  ];
  const benefits = [
    "Assistenza professionale a domicilio",
    "Riduzione degli accessi ospedalieri",
    "Mantenimento dell'autonomia nel proprio ambiente",
    "Supporto continuo a paziente e famiglia",
    "Integrazione tra servizi sanitari e sociali"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "ADI anziani e disabili – Comune di Portici | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Assistenza Domiciliare Integrata per anziani e persone con disabilità nel Comune di Portici. Servizio ADI coordinato e professionale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "ADI Portici, assistenza domiciliare Portici, anziani Portici, disabilità Portici, cooperativa emmanuel, ADI Comune Portici" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/adi-portici" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "ADI anziani e disabili – Comune di Portici - Cooperativa Emmanuel",
        "description": "Assistenza domiciliare integrata per anziani e persone con disabilità nel Comune di Portici.",
        "provider": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Portici",
          "addressRegion": "Campania",
          "addressCountry": "IT"
        },
        "areaServed": "Portici"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cooperativaemmanuel.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servizi",
            "item": "https://cooperativaemmanuel.it/servizi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "ADI Portici",
            "item": "https://cooperativaemmanuel.it/adi-portici"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "ADI anziani e disabili – Comune di Portici",
        description: "Assistenza domiciliare integrata per un supporto continuo e coordinato.",
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: "ADI Portici" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Assistenza integrata nel Comune di Portici" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Il servizio di Assistenza Domiciliare Integrata (ADI) nel Comune di Portici rappresenta un modello di assistenza che integra interventi sanitari e socio-assistenziali, garantendo un supporto completo e coordinato alle persone anziane e con disabilità nel proprio domicilio." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cos'è il servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "L'ADI è un servizio che offre ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "assistenza sanitaria e socio-assistenziale a domicilio" }),
            ", evitando o riducendo il ricovero ospedaliero e permettendo alla persona di rimanere nel proprio ambiente familiare."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Nel ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Comune di Portici" }),
            ", la Cooperativa Emmanuel eroga questo servizio con professionalità e dedizione, distinguendosi dal servizio ADI ASL NA1 per la specifica collaborazione con l'amministrazione comunale e per l'attenzione alle esigenze territoriali locali."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "Il servizio prevede un ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "approccio multidisciplinare" }),
            " che coinvolge medici, infermieri, fisioterapisti, operatori socio-sanitari e assistenti sociali, tutti coordinati per garantire la continuità assistenziale e il miglior outcome per il paziente."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cosa offriamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: serviceFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Interventi Principali" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Valutazione e presa in carico:" }),
                " Analisi completa dei bisogni sanitari e sociali della persona"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Assistenza sanitaria:" }),
                " Prestazioni infermieristiche, riabilitative e mediche specialistiche"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Supporto socio-assistenziale:" }),
                " Aiuto nelle attività quotidiane e cura della persona"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Coordinamento e continuità:" }),
                " Gestione integrata con medico di famiglia, ASL e servizi sociali"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Vantaggi del servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-blue-100 rounded-xl p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: benefit })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Richiedi Informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "Per informazioni sul servizio ADI nel Comune di Portici, contattaci." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-xl font-bold hover:text-blue-200 transition-colors block",
                children: CONTACT_INFO.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-lg hover:text-blue-200 transition-colors break-all",
                children: CONTACT_INFO.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/390817877064?text=Ciao! Vorrei informazioni sull'ADI nel Comune di Portici`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                "Contattaci su WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/prenotazioni",
              className: "inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl",
              children: [
                "Prenota Consulenza ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const SADPorticiPage = () => {
  const serviceFeatures = [
    { icon: Users, text: "Cura della persona e assistenza igienica" },
    { icon: Heart, text: "Supporto domestico e relazionale" },
    { icon: Shield, text: "Piani assistenziali personalizzati" },
    { icon: Calendar, text: "Monitoraggio continuo e flessibilità" }
  ];
  const benefits = [
    "Supporto nelle attività quotidiane della persona",
    "Mantenimento dell'autonomia e della dignità",
    "Accompagnamento e stimolazione relazionale",
    "Sollievo per i familiari caregiver",
    "Flessibilità negli orari e nelle modalità di intervento"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "SAD anziani e disabili – Comune di Portici | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Servizio di Assistenza Domiciliare per anziani e persone con disabilità nel Comune di Portici. Supporto alla vita quotidiana e al benessere." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "SAD Portici, assistenza domiciliare Portici, anziani Portici, disabilità Portici, cooperativa emmanuel, servizio assistenza domiciliare Portici" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/sad-portici" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "SAD anziani e disabili – Comune di Portici - Cooperativa Emmanuel",
        "description": "Servizio di assistenza domiciliare per supporto alla vita quotidiana e al benessere.",
        "provider": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Portici",
          "addressRegion": "Campania",
          "addressCountry": "IT"
        },
        "areaServed": "Portici"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cooperativaemmanuel.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servizi",
            "item": "https://cooperativaemmanuel.it/servizi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SAD Portici",
            "item": "https://cooperativaemmanuel.it/sad-portici"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "SAD anziani e disabili – Comune di Portici",
        description: "Supporto alla vita quotidiana e al benessere della persona a domicilio.",
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: "SAD Portici" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { className: "h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Assistenza domiciliare nel Comune di Portici" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Il Servizio di Assistenza Domiciliare (SAD) nel Comune di Portici offre supporto qualificato alle persone anziane e con disabilità, favorendo il mantenimento dell'autonomia e della qualità della vita nel proprio ambiente domestico." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cos'è il servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Il SAD è un servizio di ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "assistenza domiciliare socio-assistenziale" }),
            " che supporta le persone anziane e con disabilità nelle attività della vita quotidiana, promuovendo il benessere psicofisico e prevenendo l'isolamento sociale."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Gli operatori della Cooperativa Emmanuel intervengono con ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "professionalità e umanità" }),
            ", offrendo aiuto concreto nella cura della persona, nelle attività domestiche e nel supporto relazionale, con un piano personalizzato costruito sulle esigenze specifiche di ogni utente."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "Il servizio si integra con la rete familiare e territoriale, garantendo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "continuità assistenziale" }),
            "e collaborazione con i servizi sociali e sanitari del Comune di Portici."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cosa offriamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: serviceFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Interventi Principali" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cura della persona:" }),
                " Igiene personale, vestizione, mobilizzazione e alimentazione"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Supporto domestico:" }),
                " Gestione della casa, preparazione pasti, spesa e commissioni"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Supporto relazionale:" }),
                " Accompagnamento, stimolazione cognitiva, socializzazione"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Piano personalizzato e monitoraggio:" }),
                " Progetto individuale condiviso con famiglia e servizi"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Vantaggi del servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-green-100 rounded-xl p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 text-green-600 font-medium text-sm mr-3 mt-0.5", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: benefit })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Richiedi Informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-green-100 mb-8 max-w-2xl mx-auto", children: "Per informazioni sul servizio SAD nel Comune di Portici, contattaci." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-xl font-bold hover:text-green-200 transition-colors block",
                children: CONTACT_INFO.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-lg hover:text-green-200 transition-colors break-all",
                children: CONTACT_INFO.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul SAD nel Comune di Portici`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:bg-gray-100",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                "Contattaci su WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/prenotazioni",
              className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
              children: [
                "Prenota Consulenza ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const SADCasoriaPage = () => {
  const serviceFeatures = [
    { icon: Users, text: "Supporto nelle attività quotidiane" },
    { icon: Heart, text: "Continuità assistenziale e monitoraggio" },
    { icon: Shield, text: "Integrazione con i servizi territoriali" },
    { icon: Calendar, text: "Flessibilità e personalizzazione" }
  ];
  const benefits = [
    "Autonomia e sicurezza nel proprio domicilio",
    "Qualità della vita migliorata",
    "Supporto concreto nelle attività quotidiane",
    "Prevenzione dell'isolamento sociale",
    "Collaborazione con famiglia e servizi sociali"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "SAD anziani e disabili – Comune di Casoria | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Servizio di Assistenza Domiciliare per anziani e persone con disabilità nel Comune di Casoria. Supporto per autonomia, sicurezza e qualità della vita." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "SAD Casoria, assistenza domiciliare Casoria, anziani Casoria, disabilità Casoria, cooperativa emmanuel, servizio assistenza domiciliare Casoria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/sad-casoria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "SAD anziani e disabili – Comune di Casoria - Cooperativa Emmanuel",
        "description": "Assistenza domiciliare per anziani e persone con disabilità nel Comune di Casoria.",
        "provider": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Casoria",
          "addressRegion": "Campania",
          "addressCountry": "IT"
        },
        "areaServed": "Casoria"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cooperativaemmanuel.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servizi",
            "item": "https://cooperativaemmanuel.it/servizi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SAD Casoria",
            "item": "https://cooperativaemmanuel.it/sad-casoria"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "SAD anziani e disabili – Comune di Casoria",
        description: "Assistenza domiciliare per promuovere autonomia, sicurezza e qualità della vita.",
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Servizi", href: "/servizi" },
          { label: "SAD Casoria" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Assistenza domiciliare nel Comune di Casoria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Il Servizio di Assistenza Domiciliare (SAD) nel Comune di Casoria della Cooperativa Emmanuel rappresenta un sostegno concreto per anziani e persone con disabilità, promuovendo autonomia, sicurezza e qualità della vita nel proprio ambiente familiare." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cos'è il servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Il SAD è un ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "servizio di assistenza domiciliare" }),
            " che supporta le persone anziane e con disabilità nelle attività della vita quotidiana, favorendo il mantenimento dell'autonomia personale e prevenendo situazioni di emarginazione e isolamento sociale."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Nel ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Comune di Casoria" }),
            ", la Cooperativa Emmanuel opera con operatori qualificati che intervengono al domicilio dell'utente offrendo aiuto concreto nella cura della persona, nelle attività domestiche e nel supporto relazionale, secondo un piano assistenziale personalizzato."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "Il servizio si integra perfettamente con la rete dei servizi sociali e sanitari del territorio, garantendo",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " continuità e coordinamento" }),
            " per il benessere complessivo della persona assistita."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cosa offriamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: serviceFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "Interventi Principali" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Supporto nelle attività quotidiane:" }),
                " Igiene personale, vestizione, alimentazione, mobilità domestica"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Continuità e monitoraggio:" }),
                " Verifica costante delle condizioni e adeguamento del piano assistenziale"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Integrazione con i servizi:" }),
                " Collaborazione con assistenti sociali, medici e strutture territoriali"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Vantaggi del servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-blue-100 rounded-xl p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: benefit })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Richiedi Informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "Per informazioni sul servizio SAD nel Comune di Casoria, contattaci." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${CONTACT_INFO.phone}`,
                className: "text-xl font-bold hover:text-blue-200 transition-colors block",
                children: CONTACT_INFO.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `mailto:${CONTACT_INFO.email}`,
                className: "text-lg hover:text-blue-200 transition-colors break-all",
                children: CONTACT_INFO.email
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul SAD nel Comune di Casoria`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                "Contattaci su WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/prenotazioni",
              className: "inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl",
              children: [
                "Prenota Consulenza ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const NidoDeBaggisIserniaPage = () => {
  const serviceFeatures = [
    { icon: Users, text: "Educatori qualificati e rapporto numerico adeguato" },
    { icon: BookOpen, text: "Progetto pedagogico e piani educativi personalizzati" },
    { icon: Sun, text: "Attività ludiche, laboratori e gioco all'aperto" },
    { icon: Heart, text: "Alleanza educativa con le famiglie" }
  ];
  const benefits = [
    "Accoglienza e cura quotidiana dei bambini da 0 a 3 anni",
    "Ambienti sicuri, organizzati per fasce d'età e bisogni",
    "Routine di cura: pasti, riposo, igiene e autonomia",
    "Osservazione e documentazione del percorso di crescita",
    "Colloqui, incontri e momenti di partecipazione per le famiglie",
    "Continuità educativa con la scuola dell'infanzia"
  ];
  const tenderInfo = [
    { label: "Ente", value: "Comune di Isernia" },
    { label: "Anno educativo", value: "2026/27" },
    { label: "CPV", value: "80110000-8 – Servizi di istruzione prescolastica" },
    { label: "CIG", value: "BC978ED1CF" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: 'Asilo Nido Comunale "De Baggis" – Isernia | Cooperativa Emmanuel' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "Servizio educativo per l'infanzia presso l'Asilo Nido Comunale De Baggis di Isernia, anno educativo 2026/27. Educatori qualificati, progetto pedagogico e cura quotidiana dei bambini 0-3 anni." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "asilo nido isernia, nido de baggis, asilo nido comunale isernia, servizio educativo infanzia isernia, nido 0-3 isernia, cooperativa emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/nido-de-baggis-isernia" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: 'Asilo Nido Comunale "De Baggis" – Isernia | Cooperativa Emmanuel' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Servizio educativo per l'infanzia 0-3 anni presso l'Asilo Nido Comunale De Baggis di Isernia, anno educativo 2026/27." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/nido-de-baggis-isernia" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ChildCare",
        "name": "Asilo Nido Comunale De Baggis – Isernia - Cooperativa Emmanuel",
        "description": "Servizio educativo per l'infanzia presso l'Asilo Nido Comunale De Baggis del Comune di Isernia, anno educativo 2026/27.",
        "provider": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Isernia",
          "addressRegion": "Molise",
          "addressCountry": "IT"
        },
        "areaServed": "Isernia",
        "audience": {
          "@type": "PeopleAudience",
          "suggestedMinAge": 0,
          "suggestedMaxAge": 3
        }
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
          { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
          { "@type": "ListItem", "position": 3, "name": "Nido De Baggis Isernia", "item": "https://cooperativaemmanuel.it/nido-de-baggis-isernia" }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: 'Asilo Nido Comunale "De Baggis" – Isernia',
        description: "Servizio educativo per l'infanzia 0-3 anni – Anno educativo 2026/27"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Un nido per crescere insieme, a Isernia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed", children: [
            "La Cooperativa Emmanuel gestisce il servizio educativo per l'infanzia presso l'",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: 'Asilo Nido Comunale "De Baggis"' }),
            " del Comune di Isernia per l'anno educativo 2026/27: un luogo di cura, gioco e scoperta pensato per il benessere dei bambini e per accompagnare le famiglie nei primi anni di vita."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cos'è il servizio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "L'asilo nido è un ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "servizio educativo e sociale" }),
            " rivolto ai bambini da 0 a 3 anni che promuove lo sviluppo armonico delle competenze affettive, relazionali, cognitive e motorie, in un ambiente accogliente e organizzato secondo i bisogni di ogni fascia d'età."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
            "Presso il nido ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"De Baggis" di Isernia' }),
            " la Cooperativa Emmanuel mette a disposizione un'équipe di educatori qualificati e personale ausiliario, un progetto pedagogico condiviso con il Comune e le famiglie e una programmazione educativa fatta di routine rassicuranti, laboratori e attività all'aperto."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "Il servizio sostiene inoltre la ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "conciliazione dei tempi di vita e di lavoro" }),
            " dei genitori, offrendo un contesto educativo sicuro e continuativo per tutto l'anno educativo."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Cosa offriamo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: serviceFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: feature.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "La giornata al nido" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: benefit })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Riferimenti dell'affidamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-purple-100 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-purple-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800", children: `Servizio educativo per l'infanzia – Asilo Nido Comunale "De Baggis"` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: tenderInfo.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wide text-gray-500 font-semibold", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-gray-800 font-medium mt-1", children: item.value })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Richiedi Informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-purple-100 mb-8 max-w-2xl mx-auto", children: `Per informazioni sul servizio educativo presso l'Asilo Nido "De Baggis" di Isernia, contattaci.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${CONTACT_INFO.phone}`, className: "text-xl font-bold hover:text-purple-200 transition-colors block", children: CONTACT_INFO.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT_INFO.email}`, className: "text-lg hover:text-purple-200 transition-colors break-all", children: CONTACT_INFO.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/390817877064?text=Ciao! Vorrei informazioni sull'Asilo Nido De Baggis di Isernia",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                "Contattaci su WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contatti",
              className: "inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl",
              children: [
                "Vai ai Contatti ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const SosteniamoIlQuartierePage = () => {
  const phases = [
    {
      icon: Compass,
      title: "Aggancio e presa in carico",
      text: "Un'équipe di prossimità (coordinatrice, educatori-case manager) lavora nei luoghi di aggregazione dei quartieri, con le famiglie e con i Comuni, per incontrare e accompagnare i ragazzi."
    },
    {
      icon: Briefcase,
      title: "Laboratori e corsi",
      text: "Percorsi di orientamento al mestiere condotti da esperti di mestiere affiancati da tutor d'aula: teoria, dimostrazioni, sicurezza, esercitazioni e schede di valutazione delle competenze."
    },
    {
      icon: Award,
      title: "Restituzione",
      text: "Ogni ragazzo riceve il Portfolio individuale delle competenze e un attestato di partecipazione; il percorso si chiude con un evento pubblico di restituzione."
    }
  ];
  const emmanuelLabs = [
    { icon: Hammer, title: "Bottega del fabbro", text: "Orientamento al mestiere del fabbro, carpenteria e sartoria: sicurezza, materiali, lettura del disegno, misura e assemblaggio di piccoli manufatti, con esercitazioni a freddo e dimostrazioni dell'esperto." },
    { icon: ChefHat, title: "Enogastronomia", text: "Arte bianca e cucina di base: igiene, procedure igienico-sanitarie, farine, impasti e lievitazione, con ricettario didattico e scheda di orientamento alle professioni della ristorazione." },
    { icon: Music, title: "Musica e produzione audio", text: "Dalle basi al brano strutturato: scrittura del testo, metrica, beat, voce, registrazione, editing e mix con strumentazione portatile. Il brano del gruppo viene presentato all'evento di restituzione." },
    { icon: Wrench, title: "Motori – ciclomeccanica", text: "Laboratorio teorico su funzionamento del ciclomotore, manutenzione ordinaria, diagnosi dei guasti più comuni e sicurezza su strada, con lezioni, schemi e dimostrazioni su componenti." },
    { icon: LifeBuoy, title: "Corso sportivo di salvamento e sicurezza acquatica", text: 'Percorso "a secco" con istruttore brevettato FIN: regole di sicurezza in acqua e in mare, riconoscimento del pericolo, catena dei soccorsi e primo soccorso di base, con orientamento al brevetto di assistente bagnanti.' },
    { icon: HeartPulse, title: "Modulo orientativo di assistenza alla persona e primo soccorso", text: "Le basi dell'assistenza alla persona (igiene, mobilizzazione, parametri, manovre di emergenza) con docente infermiere e co-docenza di un Operatore Socio-Sanitario; orientamento ai profili socio-sanitari." }
  ];
  const partnerLabs = [
    {
      partner: "EITD S.r.l.",
      where: "Giugliano in Campania (Casacelle) e Napoli-Ponticelli",
      labs: [
        { icon: Monitor, text: "Alfabetizzazione digitale e orientamento all'intelligenza artificiale" },
        { icon: HeartPulse, text: "Assistenza alla persona e primo soccorso (modulo orientativo)" },
        { icon: Sprout, text: "Giardinaggio" },
        { icon: Dumbbell, text: "Educazione allo sport" }
      ]
    },
    {
      partner: "Associazione Maestri di Strada ETS",
      where: "Napoli-Ponticelli, Centro Ciro Colonna",
      labs: [
        { icon: Music, text: "Musica e produzione audio" },
        { icon: Video, text: "Video making e fotografia digitale" },
        { icon: Printer, text: "Informatica e stampa 3D" },
        { icon: ChefHat, text: "Enogastronomia" }
      ]
    }
  ];
  const territories = [
    { name: "Afragola", note: "Biblioteca Comunale" },
    { name: "Castello di Cisterna", note: "Spazio comunale" },
    { name: "Marigliano", note: "Presidio dell'équipe di prossimità" },
    { name: "Caivano", note: "Sede in avvio" },
    { name: "Giugliano in Campania", note: "Quartiere Casacelle" },
    { name: "Napoli", note: "Ponticelli e San Giovanni a Teduccio" }
  ];
  const projectInfo = [
    { label: "Titolo", value: "SosteniAMO il quartiere" },
    { label: "Ente", value: "Città Metropolitana di Napoli" },
    { label: "Programma", value: "POC Legalità 2014-2020 – Asse IV, azione 4.1.2" },
    { label: "CUP", value: "H69G25000020001" },
    { label: "CUI", value: "S01263370635202500037" },
    { label: "Raggruppamento", value: "Cooperativa Sociale Emmanuel (mandataria), EITD S.r.l., Associazione Maestri di Strada ETS, Esculapio Cooperativa Sociale" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "SosteniAMO il quartiere – Percorsi per giovani a rischio | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "SosteniAMO il quartiere: progetto della Città Metropolitana di Napoli (POC Legalità 2014-2020) per percorsi personalizzati di inserimento sociale e lavorativo di giovani a rischio. Équipe di prossimità, laboratori di orientamento al mestiere e Portfolio delle competenze ad Afragola, Castello di Cisterna, Marigliano, Caivano, Giugliano e Napoli." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "sosteniamo il quartiere, poc legalità, città metropolitana di napoli, giovani a rischio, inserimento sociale e lavorativo, laboratori di orientamento, afragola, castello di cisterna, marigliano, caivano, giugliano, ponticelli, cooperativa emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/sosteniamo-il-quartiere" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "SosteniAMO il quartiere – Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio nell'area metropolitana di Napoli. POC Legalità 2014-2020." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/sosteniamo-il-quartiere" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "SosteniAMO il quartiere",
        "description": "Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio. Progetto della Città Metropolitana di Napoli finanziato dal POC Legalità 2014-2020 (Asse IV, azione 4.1.2), realizzato da un Raggruppamento Temporaneo di Imprese con mandataria Cooperativa Sociale Emmanuel.",
        "funder": {
          "@type": "GovernmentOrganization",
          "name": "Città Metropolitana di Napoli"
        },
        "member": [
          { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
          { "@type": "Organization", "name": "EITD S.r.l." },
          { "@type": "Organization", "name": "Associazione Maestri di Strada ETS" },
          { "@type": "Organization", "name": "Esculapio Cooperativa Sociale" }
        ],
        "areaServed": territories.map((t) => ({ "@type": "City", "name": t.name }))
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
          { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
          { "@type": "ListItem", "position": 3, "name": "SosteniAMO il quartiere", "item": "https://cooperativaemmanuel.it/sosteniamo-il-quartiere" }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "SosteniAMO il quartiere",
        description: "Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio – POC Legalità 2014-2020, Città Metropolitana di Napoli"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Il progetto in poche righe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"SosteniAMO il quartiere"' }),
            " è un progetto della ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Città Metropolitana di Napoli" }),
            ", finanziato dal ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "POC Legalità 2014-2020" }),
            " (Asse IV, azione 4.1.2 – percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio) e realizzato da un Raggruppamento Temporaneo di Imprese con ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cooperativa Sociale Emmanuel" }),
            " mandataria, insieme a EITD S.r.l., Associazione Maestri di Strada ETS ed Esculapio Cooperativa Sociale."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "A chi si rivolge e come funziona" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed mb-4", children: [
          "Il progetto si rivolge ad ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "adolescenti e giovani" }),
          " dei quartieri dell'area metropolitana di Napoli, incontrati attraverso i Comuni e l'",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "educativa di strada" }),
          ", e propone un percorso in tre tempi che parte dalla relazione e arriva a competenze riconosciute e documentate."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: phases.map((phase, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full bg-orange-500 text-white h-8 w-8 font-bold mr-3 flex-shrink-0", children: index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(phase.icon, { className: "h-6 w-6 text-orange-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-2", children: phase.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: phase.text })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "I laboratori e i corsi della Cooperativa Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Afragola, Castello di Cisterna, Marigliano e Caivano. I laboratori sono percorsi teorico-pratici di avvicinamento al mestiere, con esercitazioni dimostrative e materiali portatili, condotti da esperti di mestiere con tutor d'aula in compresenza." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: emmanuelLabs.map((lab, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(lab.icon, { className: "h-8 w-8 text-orange-500 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-2", children: lab.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: lab.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-orange-100 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-orange-500 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "Intorno ai laboratori: l'équipe di prossimità" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Coordinatrice ed educatori presenti nei luoghi di aggregazione dei quartieri (educativa di strada), in contatto con le famiglie e con i Comuni" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Servizio di ascolto e sostegno alla genitorialità con una psicologa, a cura del partner Esculapio Cooperativa Sociale" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: "Documentazione individuale del percorso di ogni ragazzo: al termine, Portfolio delle competenze e attestato" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "I laboratori dei partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: partnerLabs.map((p2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-5 w-5 text-orange-500 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800", children: p2.partner })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-4", children: p2.where }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: p2.labs.map((lab, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center text-gray-700 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(lab.icon, { className: "h-4 w-4 text-orange-500 mr-2 flex-shrink-0" }),
            lab.text
          ] }, idx)) })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "I territori" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-orange-100 rounded-xl p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: territories.map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium block", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: t.note })
          ] })
        ] }, index)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Riferimenti del progetto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-orange-100 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-orange-500 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800", children: '"Realizzazione di percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza"' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: projectInfo.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gray-50 rounded-lg p-4 ${index === projectInfo.length - 1 ? "sm:col-span-2" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wide text-gray-500 font-semibold", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-gray-800 font-medium mt-1 break-words", children: item.value })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 400, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-8 md:p-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Richiedi Informazioni" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-orange-100 mb-8 max-w-2xl mx-auto", children: "Per informazioni sul progetto SosteniAMO il quartiere e sulle attività nei territori, contattaci." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${CONTACT_INFO.phone}`, className: "text-xl font-bold hover:text-orange-200 transition-colors block", children: CONTACT_INFO.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT_INFO.email}`, className: "text-lg hover:text-orange-200 transition-colors break-all", children: CONTACT_INFO.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul progetto SosteniAMO il quartiere",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                  "Contattaci su WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contatti",
                className: "inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl",
                children: [
                  "Vai ai Contatti ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 text-center mt-6", children: "Progetto finanziato dal POC Legalità 2014-2020 – Città Metropolitana di Napoli. Realizzato dal Raggruppamento Temporaneo di Imprese Cooperativa Sociale Emmanuel (mandataria), EITD S.r.l., Associazione Maestri di Strada ETS, Esculapio Cooperativa Sociale." })
      ] })
    ] }) }) })
  ] });
};
const PalmulaSanVitalianoPage = () => {
  const cantieri = [
    { icon: Mic, title: "La Banca della Memoria", text: "Laboratorio di storia orale: studenti e volontari adulti, guidati da un antropologo e da un videomaker, raccolgono le video-testimonianze degli anziani del paese. Chi non può raggiungere le sedi viene intervistato a domicilio." },
    { icon: Drama, title: "Il Teatro delle Radici", text: "Laboratorio di teatro di comunità, intergenerazionale e aperto a tutti dai 14 anni in su, che trasforma le memorie raccolte in uno spettacolo originale sulla storia di Palmola." },
    { icon: Camera, title: "Obiettivo Palmula", text: "Laboratorio di fotografia partecipata con un fotografo documentarista: adolescenti e adulti ritraggono il paese, dalle chiese ai casolari dei Regi Lagni, per una mostra diffusa nelle piazze e nelle vetrine." },
    { icon: Wheat, title: "Sapori e Saperi", text: "Incontri con agricoltori, pasticcieri e custodi delle ricette di casa sulla tradizione corilicola e la cucina della piana, con sessioni per le famiglie e per le scuole." }
  ];
  const lines = [
    { icon: Music, title: "Palmula Live", text: "Una rassegna di serate gratuite di musica popolare, musica sacra, cinema, reading teatrali e narrazione popolare in piazze, chiese e spazi civici del capoluogo e della frazione Frascatoli." },
    { icon: Database, title: "Palmula Digitale", text: "L'Archivio della Memoria di Palmola, una serie podcast scritta con i giovani dei laboratori e la Mappa Narrativa: dieci luoghi con segnaletica permanente e codici QR che rimandano alle voci dell'archivio." },
    { icon: PartyPopper, title: "La Festa di Palmula", text: "Le giornate conclusive: inaugurazione della mostra e della segnaletica, debutto dello spettacolo, presentazione dell'archivio e del podcast, giornata per le scuole, concerto finale e forum di restituzione." }
  ];
  const accessibility = [
    "Tutte le attività sono gratuite, con iscrizioni ai laboratori anche cartacee presso la casa comunale",
    "Sedi accessibili e servizio di accompagnamento con mezzo attrezzato per persone con mobilità ridotta",
    "Interpretariato in lingua dei segni italiana per i principali eventi e materiali ad alta leggibilità",
    "Video-testimonianze sottotitolate e contenuti digitali conformi ai requisiti di accessibilità",
    "Interviste a domicilio per gli anziani che non possono spostarsi"
  ];
  const phases = [
    { period: "Novembre 2026", title: "Cantieri di comunità", text: "Avvio dei quattro laboratori e prime sessioni della Banca della Memoria" },
    { period: "Dicembre 2026", title: "Palmula Live d'inverno", text: "Serate di rassegna, concerto di musica sacra, evento natalizio per le famiglie" },
    { period: "Gennaio 2027", title: "Voci e Mappe", text: "Completamento dei laboratori, registrazione del podcast, prove teatrali, passeggiata ai Regi Lagni" },
    { period: "Febbraio 2027", title: "Festa di Palmula", text: "Le giornate conclusive di restituzione alla comunità" }
  ];
  const projectInfo = [
    { label: "Progetto", value: "PALMULA. San Vitaliano si racconta" },
    { label: "Ente capofila", value: "Comune di San Vitaliano (NA)" },
    { label: "Ruolo della Cooperativa", value: "Partner di progetto" },
    { label: "Avviso", value: 'Avviso ministeriale "Cultura nei piccoli comuni" – Manifestazione di interesse approvata con Determinazione n. gen. 303 / n. sett. 104 del 16/07/2026' }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "PALMULA. San Vitaliano si racconta – Festival diffuso | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: "PALMULA. San Vitaliano si racconta: festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese. Cantieri di comunità, rassegna Palmula Live, archivio digitale e mappa narrativa. Cooperativa Emmanuel partner del Comune di San Vitaliano per l'Avviso Cultura nei piccoli comuni." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "palmula, san vitaliano si racconta, cultura nei piccoli comuni, festival diffuso san vitaliano, banca della memoria, teatro di comunità, comune di san vitaliano, agro nolano, cooperativa emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/palmula-san-vitaliano" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "PALMULA. San Vitaliano si racconta | Cooperativa Emmanuel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Festival diffuso delle radici, delle voci e dei saperi di San Vitaliano. Cooperativa Emmanuel partner del Comune per l'Avviso Cultura nei piccoli comuni." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://cooperativaemmanuel.it/palmula-san-vitaliano" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "PALMULA. San Vitaliano si racconta",
        "alternateName": "Festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese",
        "description": "Festival diffuso con Cantieri di comunità, rassegna Palmula Live, archivio digitale della memoria e mappa narrativa. Proposta culturale del Comune di San Vitaliano per l'Avviso ministeriale Cultura nei piccoli comuni, con la Cooperativa Sociale Emmanuel come partner di progetto.",
        "funder": {
          "@type": "GovernmentOrganization",
          "name": "Comune di San Vitaliano"
        },
        "member": {
          "@type": "Organization",
          "name": "Cooperativa Sociale Emmanuel",
          "url": "https://cooperativaemmanuel.it"
        },
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Vitaliano",
            "addressRegion": "Campania",
            "addressCountry": "IT"
          }
        }
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
          { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
          { "@type": "ListItem", "position": 3, "name": "PALMULA San Vitaliano", "item": "https://cooperativaemmanuel.it/palmula-san-vitaliano" }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        manageMeta: false,
        title: "PALMULA. San Vitaliano si racconta",
        description: "Festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-3", children: "Il nome più antico del paese" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Palmula Pristinum Nomen Meum" }),
            ": la formula incisa nello stemma comunale ricorda che San Vitaliano nacque come Palmola, casale agricolo dell'agro nolano. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "PALMULA" }),
            " riporta quel nome al centro della scena pubblica con un festival diffuso in cui la comunità raccoglie le proprie memorie, le trasforma in teatro, fotografia e musica e le consegna a un archivio permanente. La ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cooperativa Emmanuel" }),
            " è partner di progetto del ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Comune di San Vitaliano" }),
            ` nell'ambito dell'Avviso ministeriale "Cultura nei piccoli comuni".`
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Perché questo progetto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: "San Vitaliano è un comune giovane e in rapida crescita: in cinquant'anni la popolazione è più che raddoppiata, con molte famiglie di recente residenza che conoscono poco la storia del luogo che abitano, mentre gli anziani delle famiglie contadine, custodi della memoria, si assottigliano di anno in anno." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: "Il paese non ha un teatro, un cinema o una programmazione culturale continuativa al di fuori delle feste patronali, ma possiede un patrimonio denso: la Chiesa Madre di piazza Nicola Tufano, la Chiesa dell'Immacolata Concezione con la tela del Mozzillo, il paesaggio dei Regi Lagni, la tradizione della nocciola, il dialetto, i canti e i saperi della civiltà contadina." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 leading-relaxed", children: [
            "PALMULA nasce all'incrocio di questi bisogni: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "salvare la memoria" }),
            ", creare occasioni culturali strutturate, far incontrare vecchi e nuovi residenti, generazioni e frazioni, e dotare il Comune di strumenti permanenti per raccontarsi."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 200, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "I Cantieri di comunità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Quattro laboratori gratuiti e aperti che trasformano i cittadini da spettatori in autori dell'offerta culturale." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: cantieri.map((c, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-8 w-8 text-teal-600 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-2", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: c.text })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Rassegna, archivio e restituzione" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-12", children: lines.map((l2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(l2.icon, { className: "h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mb-1", children: l2.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: l2.text })
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { direction: "up", delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Il calendario" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-teal-100 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 text-teal-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: "Ventiquattro giornate di attività, non consecutive, tra novembre 2026 e febbraio 2027, con conclusione entro il 28 febbraio 2027." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid sm:grid-cols-2 gap-4", children: phases.map((p2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "bg-gray-50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wide text-teal-700 font-semibold", children: p2.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-gray-800 mt-1", children: p2.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-1", children: p2.text })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Partecipazione e accessibilità" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-6 w-6 text-teal-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800", children: "Perché nessuno resti fuori" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: accessibility.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: item })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Il ruolo della Cooperativa Emmanuel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border-2 border-teal-100 rounded-xl p-8 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 leading-relaxed", children: [
            "Un festival che fa della partecipazione degli anziani, dell'inclusione delle persone fragili e del lavoro intergenerazionale la propria cifra richiede competenze di prossimità, ascolto e mediazione. Nel progetto la cooperativa cura il ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "coordinamento organizzativo" }),
            ", la ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "conduzione educativa dei Cantieri di comunità" }),
            ", il ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "servizio di accompagnamento e accessibilità" }),
            ", la mediazione con le famiglie e i servizi sociali per l'inclusione delle persone fragili e il monitoraggio partecipativo, insieme al reperimento delle professionalità artistiche e tecniche secondo gli indirizzi della cabina di regia."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "Riferimenti del progetto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-2 border-teal-100 rounded-xl p-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-teal-600 mr-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-800", children: "Partenariato con il Comune di San Vitaliano" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: projectInfo.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gray-50 rounded-lg p-4 ${index === projectInfo.length - 1 ? "sm:col-span-2" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wide text-gray-500 font-semibold", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-gray-800 font-medium mt-1", children: item.value })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Partecipa o richiedi informazioni" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-teal-100 mb-8 max-w-2xl mx-auto", children: "Hai una storia da raccontare, vuoi iscriverti a un Cantiere di comunità o collaborare come associazione o esercizio commerciale? Contattaci." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Telefono" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${CONTACT_INFO.phone}`, className: "text-xl font-bold hover:text-teal-200 transition-colors block", children: CONTACT_INFO.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-6 w-6 mr-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Email" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT_INFO.email}`, className: "text-lg hover:text-teal-200 transition-colors break-all", children: CONTACT_INFO.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul progetto PALMULA San Vitaliano",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 mr-2" }),
                "Contattaci su WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contatti",
              className: "inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl",
              children: [
                "Vai ai Contatti ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }) })
  ] });
};
const AREA_ORDER = ["sanitario", "educativo", "inclusione"];
const AREA_ICONS = { sanitario: Stethoscope, educativo: BookOpen, inclusione: Users };
const ProjectsPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://cooperativaemmanuel.it/progetti" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Progetti e servizi territoriali – Cooperativa Sociale Emmanuel",
        "itemListElement": PROJECTS.map((p2, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p2.title,
          "url": `https://cooperativaemmanuel.it${p2.link}`
        }))
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Progetti e territori",
        description: "I servizi che gestiamo per Comuni, Ambiti e enti pubblici: assistenza domiciliare, nidi, educativa e inclusione sociale",
        metaTitle: "Progetti e territori – Cooperativa Sociale Emmanuel",
        metaDescription: "Tutti i servizi e i progetti attivi della Cooperativa Emmanuel sul territorio: ADI e SAD comunali, asili nido e micronidi, educativa domiciliare, progetti di inclusione sociale e cultura.",
        keywords: "progetti cooperativa emmanuel, servizi comunali, asilo nido, SAD, ADI, inclusione sociale, cooperativa sociale napoli"
      }
    ),
    AREA_ORDER.map((area, areaIndex) => {
      const items = PROJECTS.filter((p2) => p2.area === area);
      const Icon = AREA_ICONS[area];
      return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `py-14 md:py-20 ${areaIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-blue-100 rounded-full mr-4 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-800", children: PROJECT_AREAS[area].label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mt-1", children: PROJECT_AREAS[area].description })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { direction: "up", delay: index * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project }) }, project.link)) })
      ] }) }, area);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 md:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: "Sei un ente pubblico o un'organizzazione?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 mb-6 max-w-2xl mx-auto", children: "Collaboriamo con Comuni, Ambiti territoriali e partner del terzo settore in co-progettazione, gare e partenariati." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contatti",
          className: "inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors",
          children: [
            "Contattaci ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ]
        }
      )
    ] }) })
  ] });
};
const AppRoutes = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/servizi", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/progetti", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/chi-siamo", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/recensioni", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/prenotazioni", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BookingPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contatti", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/lavora-con-noi", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CareersPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/cookie", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CookiePage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/come-richiedere-adi", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ADIProcessPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/micronido-romagnano-sesia", element: /* @__PURE__ */ jsxRuntimeExports.jsx(MicronidoRomaganoPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/adi-napoli", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ADINapoliPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/infermiere-domicilio-napoli", element: /* @__PURE__ */ jsxRuntimeExports.jsx(InfermiereDomicilioPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/fisioterapia-domicilio-napoli", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FisioterapiaDomicilioPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/micronido-albisola-superiore", element: /* @__PURE__ */ jsxRuntimeExports.jsx(MicronidoAlbiolaPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/educativa-domiciliare-ambito-n12", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EducativaDomiciliareAmbito12Page, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/nido-san-gemini", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NidoSanGeminiPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/adi-portici", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ADIPorticiPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sad-portici", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SADPorticiPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sad-casoria", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SADCasoriaPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/nido-de-baggis-isernia", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NidoDeBaggisIserniaPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sosteniamo-il-quartiere", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SosteniamoIlQuartierePage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/palmula-san-vitaliano", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PalmulaSanVitalianoPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {}) })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(AccessibilityWidget, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(CookieConsent, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWidget, {})
] });
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HelmetProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppRoutes, {}) }) });
}
const container = document.getElementById("root");
const app = /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) });
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
