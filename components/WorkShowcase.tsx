import { Eye, ExternalLink, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WorkShowcase() {
  const projects = [
    {
      title: "Prompt to Table",
      type: "Strategy",
      description: "A brand project strategy that's beyond our island to provide an umbrella publication. One of our core initiatives is not just ideate that some local not our adopts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      owner: "Sarah Chen",
      link: "https://example.com/prompt-to-table"
    },
    {
      title: "5:31 Pitch",
      type: "Presentation",
      description: "Pitch presentation for 5:31 brand transformation and digital strategy implementation.",
      image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=300&fit=crop",
      owner: "Mike Rodriguez",
      link: "https://example.com/531-pitch"
    },
    {
      title: "Win Ohio Campaign",
      type: "Campaign",
      description: "Capturing the brand in Ohio in a core market, with engaging voter turn marketing before touching AI platform world.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      owner: "Alex Thompson",
      link: "https://example.com/win-ohio"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'strategy': return 'bg-purple-600 text-white';
      case 'presentation': return 'bg-blue-600 text-white';
      case 'campaign': return 'bg-green-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-lg bg-violet-500/10">
          <Eye className="w-5 h-5 text-violet-500" />
        </div>
        <h2 className="text-xl font-medium text-foreground">Latest Work Showcase</h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Project Type Pill */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:text-violet-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{project.owner}</span>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}