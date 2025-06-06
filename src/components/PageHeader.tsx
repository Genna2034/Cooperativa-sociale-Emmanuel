import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from './Breadcrumb';

interface PageHeaderProps {
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  showBreadcrumb?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  metaTitle,
  metaDescription,
  keywords,
  showBreadcrumb = true
}) => {
  return (
    <>
      <Helmet>
        <title>{metaTitle || `${title} - Cooperativa Sociale Emmanuel`}</title>
        <meta name="description" content={metaDescription || description} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>
      
      {showBreadcrumb && <Breadcrumb />}
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
        </div>
      </section>
    </>
  );
};

export default PageHeader;