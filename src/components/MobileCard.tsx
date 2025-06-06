import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MobileCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MobileCard: React.FC<MobileCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  children,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`mobile-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {/* Immagine header se presente */}
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-xl">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Header con icona */}
        <div className="flex items-start gap-4 mb-4">
          {Icon && (
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Contenuto aggiuntivo */}
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCard;