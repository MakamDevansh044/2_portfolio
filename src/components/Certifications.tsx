
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: 'Oracle Certification', issuer: 'Oracle', year: '2024' },
    { name: 'Data Science Foundation', issuer: 'Professional Certification', year: '2024' },
    { name: 'Machine Learning Specialization', issuer: 'Industry Certificate', year: '2024' },
    { name: 'Generative AI Certification', issuer: 'AI Institute', year: '2024' },
    { name: 'Winter School Program', issuer: 'Academic Institution', year: '2024' }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications & Learning
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development through industry certifications
          </p>
        </div>

        <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
          <GraduationCap className="text-purple-400 mr-3" size={32} />
          Professional Certifications
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-slate-700 rounded-lg">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
