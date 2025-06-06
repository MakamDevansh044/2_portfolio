
import React from 'react';
import { Award, Trophy, Star, ExternalLink, GraduationCap } from 'lucide-react';

const Achievements = () => {
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

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and achievements across competitions, research, and academic excellence
          </p>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <Award className="text-yellow-400 mr-3" size={32} />
            Competition Awards & Academic Recognition
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
      </div>
    </section>
  );
};

export default Achievements;
