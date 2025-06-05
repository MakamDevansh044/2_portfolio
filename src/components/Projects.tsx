import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PRAVAH',
      subtitle: 'Document Verification using AI & Blockchain',
      description: 'Revolutionary document verification system combining AI-powered analysis with blockchain security for tamper-proof authentication.',
      tech: ['Python', 'Blockchain', 'Computer Vision', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'DIVA',
      subtitle: 'Digital Legal Assistant',
      description: 'AI-powered legal assistant that provides instant legal guidance, document analysis, and case research support.',
      tech: ['NLP', 'Python', 'Machine Learning', 'Legal Tech'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      demoLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Alt Text to Real Context',
      subtitle: 'Accessibility Enhancement AI',
      description: 'Converting alternative text descriptions into rich, contextual information for enhanced digital accessibility.',
      tech: ['Computer Vision', 'NLP', 'Accessibility', 'AI'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      demoLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Emotion-Based Media Control',
      subtitle: 'HCI Innovation Project',
      description: 'Intelligent media control system that adapts content based on real-time emotion recognition and user preferences.',
      tech: ['OpenCV', 'Emotion Recognition', 'Python', 'HCI'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      demoLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions at the intersection of AI, blockchain, and human-computer interaction
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects - Full Width */}
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-xl text-blue-400 mb-4">{project.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-400 text-gray-300 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="lg:order-first">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects - Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.demoLink}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
