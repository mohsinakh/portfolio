import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, Image, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
}) => {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Reset error state when toggling iframe visibility
  useEffect(() => {
    if (!showIframe) {
      setIframeError(false);
    }
  }, [showIframe]);

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all shadow-lg">
      <div className="relative w-full h-48">
        {showIframe ? (
          <>
            <iframe 
              src={liveUrl}
              className="w-full h-full border-none"
              title={title}
              onError={() => setIframeError(true)}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
            />
            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 text-white p-4 text-center">
                <AlertCircle className="w-8 h-8 mb-2 text-yellow-400" />
                <p className="text-sm mb-2">This site cannot be embedded due to security restrictions.</p>
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-2"
                >
                  Open in New Tab <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <img 
              src={image} 
              alt={`Screenshot of ${title} project`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <button
              onClick={() => setShowIframe(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors group sm:h-auto"
            >
              <div className="flex items-center gap-2 text-white">
                <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">View Live Demo</span>
              </div>
            </button>
          </>
        )}
        {showIframe && !iframeError && (
          <button
            onClick={() => setShowIframe(false)}
            className="absolute top-2 right-2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors"
            title="Show preview image"
          >
            <Image className="w-4 h-4 text-white" />
          </button>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          Visit Website <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
