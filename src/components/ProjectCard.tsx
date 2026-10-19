import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Project, PROJECT_AREAS, isProjectNew } from '../constants/projects';

const AREA_STYLES = {
  sanitario: 'bg-blue-100 text-blue-700',
  educativo: 'bg-purple-100 text-purple-700',
  inclusione: 'bg-amber-100 text-amber-700'
};

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  const isNew = isProjectNew(project.activationDate);

  return (
    <Link
      to={project.link}
      className="group relative flex flex-col h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 p-6"
    >
      {isNew && (
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          NEW
        </span>
      )}

      <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${AREA_STYLES[project.area]}`}>
        {PROJECT_AREAS[project.area].label}
      </span>

      <h3 className="text-lg font-bold text-gray-800 mb-2 pr-12 group-hover:text-blue-700 transition-colors">
        {project.title}
      </h3>

      <p className="flex items-center text-sm text-gray-500 mb-3">
        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
        {project.territory}
      </p>

      {!compact && (
        <>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          <ul className="space-y-1.5 mb-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-4 w-4 text-blue-600 text-[10px] font-bold mr-2 flex-shrink-0">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}

      <span className="mt-auto inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
        Scopri di più <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default ProjectCard;
