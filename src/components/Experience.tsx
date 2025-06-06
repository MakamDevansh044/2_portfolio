
import React from 'react';
import { Briefcase, Users, Calendar, Award, Star, ExternalLink } from 'lucide-react';
import { Separator } from './ui/separator';

const Experience = () => {
  const professionalExperience = [
    {
      company: 'Infosys Springboard',
      role: 'AI/ML Development Intern',
      period: '2024',
      description: 'Worked on enterprise-level AI solutions and gained hands-on experience with industry-standard practices.',
      link: 'https://drive.google.com/file/d/1480xyTkFACoCLBDCVZvxrEXaHmBrFKiN/view?usp=drive_link',
      achievements: [
        'Developed ML models for real-world applications',
        'Collaborated with industry professionals',
        'Gained exposure to enterprise AI solutions'
      ],
      logo: '💼'
    },
    {
      company: 'Rural Internship Program',
      role: 'Community Technology Volunteer',
      period: '2024',
      description: 'Contributed to rural development through technology solutions and community engagement.',
      link: 'https://drive.google.com/file/d/14jKEQ8LiupsjwiSbnLvBsoBBSt-XzXso/view?usp=drive_link',
      achievements: [
        'Implemented tech solutions for rural communities',
        'Conducted digital literacy workshops',
        'Bridged technology gap in rural areas'
      ],
      logo: '🌾'
    }
  ];

  const leadershipPositions = [
    {
      title: 'President',
      organization: 'Ramanujan Math Club (RMC)',
      period: 'Present',
      description: 'Leading the premier mathematics club, overseeing strategic initiatives and fostering mathematical excellence.',
      link: 'https://drive.google.com/file/d/102FnGY8S9yFOmFpSyRtsXT6JMfiXKugT/view?usp=sharing',
      icon: <Users className="text-blue-400" size={24} />
    },
    {
      title: 'Co-Convener',
      organization: 'Neuro Verse (during Sudhee\'25)',
      period: '2025',
      description: 'Coordinating neural network and AI-focused events and workshops during the annual tech fest.',
      link: 'https://drive.google.com/file/d/14HbXCclClxkQnyZKBi8bvjQ6C7THG_Jm/view?usp=drive_link',
      icon: <Star className="text-purple-400" size={24} />
    },
    {
      title: 'General Secretary',
      organization: 'Neural Nexus',
      period: 'Present',
      description: 'Managing administrative operations and strategic planning for the AI research community.',
      link: '#',
      icon: <Briefcase className="text-green-400" size={24} />
    },
    {
      title: 'Events Head',
      organization: 'Ramanujan Math Club',
      period: '2024-25',
      description: 'Organized 15+ successful mathematical events, workshops, and competitions.',
      link: 'https://drive.google.com/file/d/12Casph8fEe5u4rhIxNQsMOX5Thrl_4Gw/view?usp=drive_link',
      icon: <Award className="text-yellow-400" size={24} />
    },
    {
      title: 'Team Lead',
      organization: 'Intell Alpha',
      period: 'Present',
      description: 'Leading AI research and development initiatives in the intelligence systems team.',
      link: '#',
      icon: <Calendar className="text-red-400" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Positions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional experience and leadership positions that shaped my journey
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="text-green-400 mr-3" size={32} />
            Professional Experience
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{exp.logo}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-lg text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-gray-300 mb-6">{exp.description}</p>

                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-white">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-300">
                        <span className="text-green-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16 bg-gray-700" />

        {/* Leadership Positions */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Users className="text-blue-400 mr-3" size={32} />
            Leadership Positions
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {leadershipPositions.map((position, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{position.title}</h4>
                    <p className="text-blue-400 mb-2">{position.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{position.period}</p>
                  </div>
                  {position.link !== '#' && (
                    <a
                      href={position.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
