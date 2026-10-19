import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Stethoscope, BookOpen, Users, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, PROJECT_AREAS, ProjectArea } from '../constants/projects';

const AREA_ORDER: ProjectArea[] = ['sanitario', 'educativo', 'inclusione'];
const AREA_ICONS = { sanitario: Stethoscope, educativo: BookOpen, inclusione: Users };

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://cooperativaemmanuel.it/progetti" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Progetti e servizi territoriali – Cooperativa Sociale Emmanuel",
          "itemListElement": PROJECTS.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.title,
            "url": `https://cooperativaemmanuel.it${p.link}`
          }))
        })}
        </script>
      </Helmet>

      <PageHeader
        title="Progetti e territori"
        description="I servizi che gestiamo per Comuni, Ambiti e enti pubblici: assistenza domiciliare, nidi, educativa e inclusione sociale"
        metaTitle="Progetti e territori – Cooperativa Sociale Emmanuel"
        metaDescription="Tutti i servizi e i progetti attivi della Cooperativa Emmanuel sul territorio: ADI e SAD comunali, asili nido e micronidi, educativa domiciliare, progetti di inclusione sociale e cultura."
        keywords="progetti cooperativa emmanuel, servizi comunali, asilo nido, SAD, ADI, inclusione sociale, cooperativa sociale napoli"
      />

      {AREA_ORDER.map((area, areaIndex) => {
        const items = PROJECTS.filter((p) => p.area === area);
        const Icon = AREA_ICONS[area];
        return (
          <section key={area} className={`py-14 md:py-20 ${areaIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 md:px-6">
              <FadeInSection direction="up">
                <div className="flex items-start mb-8">
                  <div className="p-3 bg-blue-100 rounded-full mr-4 flex-shrink-0">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{PROJECT_AREAS[area].label}</h2>
                    <p className="text-gray-600 mt-1">{PROJECT_AREAS[area].description}</p>
                  </div>
                </div>
              </FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project, index) => (
                  <FadeInSection key={project.link} direction="up" delay={index * 100}>
                    <ProjectCard project={project} />
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-14 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Sei un ente pubblico o un'organizzazione?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Collaboriamo con Comuni, Ambiti territoriali e partner del terzo settore in co-progettazione, gare e partenariati.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contattaci <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
