import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const HIDDEN_CLASS: Record<NonNullable<FadeInSectionProps['direction']>, string> = {
  up: 'translate-y-8 opacity-0',
  down: '-translate-y-8 opacity-0',
  left: 'translate-x-8 opacity-0',
  right: '-translate-x-8 opacity-0',
  fade: 'opacity-0'
};

/**
 * Anima l'ingresso dei contenuti allo scroll.
 * Il contenuto è VISIBILE nell'HTML pre-renderizzato (e senza JavaScript):
 * viene nascosto solo dopo il mount, e solo se è fuori dallo schermo,
 * così motori di ricerca e primo paint ricevono la pagina completa.
 */
const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const rect = element.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) return; // già visibile: nessuna animazione, nessun flash

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

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${hidden ? HIDDEN_CLASS[direction] : 'translate-x-0 translate-y-0 opacity-100'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
