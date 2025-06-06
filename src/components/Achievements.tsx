
import React from 'react';
import { Award, Briefcase, Trophy, Star, ExternalLink, Users, GraduationCap } from 'lucide-react';
import { Separator } from './ui/separator';

const Achievements = () => {
  const positions = [
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
      icon: <Trophy className="text-red-400" size={24} />
    }
  ];

  const experience = [
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

  const awards = [
    {
      title: 'VJ Hackathon 1st Runner Up',
      organization: 'VJ Hackathon',
      year: '2024',
      description: 'Second place in prestigious hackathon competition for innovative AI solution',
      link: 'https://drive.google.com/file/d/1t22JBvzGsUyTf_Cqqxm1fzPA7O7_kDFE/view?usp=drive_link',
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: 'Neuroverse Project Presentation First Prize',
      organization: 'Neuroverse',
      year: '2024',
      description: 'First place for outstanding AI project presentation and innovation',
      link: 'https://drive.google.com/file/d/1RwRFWYp4TmAVyuUNFrBysLGiO_PehLGu/view?usp=drive_link',
      icon: <Award className="text-gold-400" size={24} />
    },
    {
      title: 'RMC Paper Presentation 2nd Prize',
      organization: 'Ramanujan Math Club',
      year: '2024',
      description: 'Second place for mathematical research paper presentation',
      link: 'https://drive.google.com/file/d/1RwRFWYp4TmAVyuUNFrBysLGiO_PehLGu/view?usp=drive_link',
      icon: <Star className="text-purple-400" size={24} />
    },
    {
      title: 'GNTS Arani Achievement',
      organization: 'GNTS Arani',
      year: '2024',
      description: 'Recognition for outstanding academic and technical contributions',
      link: 'https://drive.google.com/file/d/16iu_Ed0fINPnRrXRJmS2pU5C0fhdLPEI/view?usp=drive_link',
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: 'Research Day Recognition',
      organization: 'Research Day',
      year: '2024',
      description: 'Outstanding research contribution and presentation',
      link: 'https://drive.google.com/file/d/1XzZRCp7YxoMqtlKxzR0mASxOo8XbSjUp/view?usp=drive_link',
      icon: <GraduationCap className="text-green-400" size={24} />
    },
    {
      title: 'Equiz Perfect Score (100%)',
      organization: 'Equiz Competition',
      year: '2024',
      description: 'Perfect score achievement in competitive quiz',
      link: '#',
      icon: <Star className="text-yellow-400" size={24} />
    }
  ];

  const certifications = [
    { name: 'Oracle Certification', issuer: 'Oracle', year: '2024' },
    { name: 'Data Science Foundation', issuer: 'Professional Certification', year: '2024' },
    { name: 'Machine Learning Specialization', issuer: 'Industry Certificate', year: '2024' },
    { name: 'Generative AI Certification', issuer: 'AI Institute', year: '2024' },
    { name: 'Winter School Program', issuer: 'Academic Institution', year: '2024' }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements & Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition, leadership positions, and professional experience that shaped my journey
          </p>
        </div>

        {/* Leadership Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Users className="text-blue-400 mr-3" size={32} />
            Leadership Positions
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {positions.map((position, index) => (
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

        <Separator className="my-16 bg-gray-700" />

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="text-green-400 mr-3" size={32} />
            Professional Experience
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
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

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="text-yellow-400 mr-3" size={32} />
            Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{award.title}</h4>
                    <p className="text-blue-400 mb-1">{award.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{award.year}</p>
                  </div>
                  {award.link !== '#' && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-16 bg-gray-700" />

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="text-purple-400 mr-3" size={32} />
            Certifications & Learning
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
