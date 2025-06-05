
import React from 'react';
import { Users, Calendar, Award, Star } from 'lucide-react';

const Leadership = () => {
  const roles = [
    {
      title: 'Events Head',
      organization: 'Ramanujan Math Club',
      period: '2023 - Present',
      description: 'Leading event planning and execution for mathematical workshops, competitions, and educational seminars.',
      achievements: [
        'Organized 15+ successful events with 500+ participants',
        'Increased club membership by 40%',
        'Coordinated inter-college mathematical competitions'
      ],
      icon: <Calendar className="text-blue-400" size={24} />
    },
    {
      title: 'Core Member',
      organization: 'Ramanujan Math Club (RMC)',
      period: '2022 - Present',
      description: 'Contributing to strategic planning, curriculum development, and fostering mathematical thinking among peers.',
      achievements: [
        'Mentored 50+ students in advanced mathematics',
        'Developed innovative teaching methodologies',
        'Collaborated on research projects and publications'
      ],
      icon: <Users className="text-purple-400" size={24} />
    }
  ];

  const initiatives = [
    {
      title: 'AI Math Workshop Series',
      description: 'Created and conducted workshops bridging mathematics and AI',
      impact: '200+ students trained',
      icon: '🧮'
    },
    {
      title: 'Peer Mentorship Program',
      description: 'Established mentoring system for junior students',
      impact: '85% improvement in grades',
      icon: '👥'
    },
    {
      title: 'Research Collaboration Hub',
      description: 'Initiated cross-disciplinary research partnerships',
      impact: '5 published papers',
      icon: '🔬'
    },
    {
      title: 'Tech Innovation Bootcamp',
      description: 'Organized coding and AI bootcamps for club members',
      impact: '3 startup ideas launched',
      icon: '💡'
    }
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Leadership & Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building communities, fostering innovation, and leading transformative initiatives
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-slate-700 rounded-lg">
                  {role.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{role.title}</h3>
                  <p className="text-lg text-blue-400 mb-2">{role.organization}</p>
                  <p className="text-gray-400 text-sm">{role.period}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{role.description}</p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <Star className="text-yellow-400 mr-2" size={18} />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, achIndex) => (
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

        {/* Initiatives Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Key Initiatives & Programs
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{initiative.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{initiative.description}</p>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-2">
                  <p className="text-blue-300 font-semibold text-sm">{initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
