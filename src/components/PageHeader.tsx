import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from './Breadcrumb';

interface PageHeaderProps {
  title: string;
  description?: string;
  /** alias di description, usato da alcune pagine */
  subtitle?: string;
  /** se false, il componente non tocca <title>/<meta>: la pagina li gestisce da sé */
  manageMeta?: boolean;
  /** accettato per compatibilità: il breadcrumb visivo è generato automaticamente */
  breadcrumb?: { label: string; href?: string }[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  showBreadcrumb?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description: descriptionProp,
  subtitle,
  manageMeta = true,
  metaTitle,
  metaDescription,
  keywords,
  showBreadcrumb = true
}) => {
  const description = descriptionProp ?? subtitle ?? '';

  return (
    <>
      {manageMeta && (
        <Helmet>
          <title>{metaTitle || `${title} - Cooperativa Sociale Emmanuel`}</title>
          <meta name="description" content={metaDescription || description} />
          {keywords && <meta name="keywords" content={keywords} />}
        </Helmet>
      )}
      
      {showBreadcrumb && <Breadcrumb />}
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>}
        </div>
      </section>
    </>
  );
};

export default PageHeader;