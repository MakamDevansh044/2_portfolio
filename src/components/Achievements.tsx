
import React from 'react';
import { Award, Briefcase, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const internships = [
    {
      company: 'Infosys',
      role: 'AI/ML Development Intern',
      period: 'Summer 2024',
      description: 'Worked on enterprise-level AI solutions, focusing on natural language processing and computer vision applications.',
      achievements: [
        'Developed ML models with 95% accuracy for document classification',
        'Optimized existing algorithms, reducing processing time by 40%',
        'Collaborated with senior engineers on production deployments'
      ],
      logo: '💼'
    },
    {
      company: 'AICTE IDEA Lab',
      role: 'Research Intern',
      period: 'Spring 2024',
      description: 'Conducted cutting-edge research in AI applications for education and public welfare.',
      achievements: [
        'Published 2 research papers in peer-reviewed journals',
        'Developed prototype for AI-powered learning assistant',
        'Mentored 10+ junior researchers in machine learning'
      ],
      logo: '🔬'
    }
  ];

  const awards = [
    {
      title: 'National AI Innovation Award',
      organization: 'Ministry of Electronics & IT',
      year: '2024',
      description: 'Recognized for PRAVAH - revolutionary document verification system',
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: 'Best Student Researcher',
      organization: 'IEEE Conference on AI',
      year: '2024',
      description: 'Outstanding contribution to emotion recognition research',
      icon: <Star className="text-purple-400" size={24} />
    },
    {
      title: 'Hackathon Grand Prize',
      organization: 'TechnoVation 2024',
      year: '2024',
      description: 'First place for DIVA - AI legal assistant platform',
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: 'Excellence in Leadership',
      organization: 'Ramanujan Math Club',
      year: '2023',
      description: 'Outstanding leadership and contribution to club growth',
      icon: <Star className="text-green-400" size={24} />
    }
  ];

  const certifications = [
    { name: 'Deep Learning Specialization', issuer: 'Coursera - Andrew Ng', year: '2024' },
    { name: 'Advanced Computer Vision', issuer: 'edX - MIT', year: '2024' },
    { name: 'Blockchain Development', issuer: 'IBM Professional Certificate', year: '2023' },
    { name: 'AI Ethics & Governance', issuer: 'Stanford Online', year: '2023' },
    { name: 'Cloud Computing (AWS)', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Data Science with Python', issuer: 'DataCamp', year: '2022' }
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
            Recognition, awards, and professional experience that shaped my journey
          </p>
        </div>

        {/* Internships Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="text-blue-400 mr-3" size={32} />
            Professional Experience
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{internship.logo}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{internship.role}</h4>
                    <p className="text-lg text-blue-400 mb-2">{internship.company}</p>
                    <p className="text-gray-400 text-sm">{internship.period}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{internship.description}</p>

                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-white">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, achIndex) => (
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

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="text-yellow-400 mr-3" size={32} />
            Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-slate-700 rounded-lg">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{award.title}</h4>
                    <p className="text-blue-400 mb-1">{award.organization}</p>
                    <p className="text-gray-400 text-sm mb-3">{award.year}</p>
                    <p className="text-gray-300 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="text-purple-400 mr-3" size={32} />
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
