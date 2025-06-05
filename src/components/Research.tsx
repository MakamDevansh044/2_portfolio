
import React from 'react';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: 'Blockchain-Enhanced Document Verification: A Novel Approach to Digital Security',
      authors: 'Makam Devansh, Dr. A. Kumar, Prof. B. Singh',
      journal: 'International Journal of Cybersecurity & Digital Forensics',
      year: '2024',
      abstract: 'This paper presents PRAVAH, a revolutionary document verification system that combines AI-powered analysis with blockchain technology for tamper-proof authentication.',
      tags: ['Blockchain', 'AI', 'Cybersecurity', 'Document Verification'],
      status: 'Published',
      link: '#'
    },
    {
      title: 'Emotion-Driven Human-Computer Interaction: Real-time Media Control Systems',
      authors: 'Makam Devansh, Dr. C. Patel',
      journal: 'IEEE Transactions on Affective Computing',
      year: '2024',
      abstract: 'An innovative approach to media control using real-time emotion recognition, creating more intuitive and responsive user interfaces.',
      tags: ['HCI', 'Emotion Recognition', 'Computer Vision', 'AI'],
      status: 'Under Review',
      link: '#'
    },
    {
      title: 'AI-Powered Legal Assistant: Transforming Legal Research and Case Analysis',
      authors: 'Makam Devansh, Dr. M. Sharma, Prof. R. Gupta',
      journal: 'Journal of Legal Technology & Innovation',
      year: '2023',
      abstract: 'DIVA represents a breakthrough in legal technology, providing intelligent assistance for legal research, document analysis, and case preparation.',
      tags: ['Legal Tech', 'NLP', 'Machine Learning', 'AI'],
      status: 'Published',
      link: '#'
    }
  ];

  const conferences = [
    {
      title: 'International Conference on AI & Machine Learning',
      presentation: 'Deep Learning Applications in Document Security',
      location: 'Mumbai, India',
      date: 'March 2024',
      type: 'Oral Presentation'
    },
    {
      title: 'IEEE Conference on Computer Vision',
      presentation: 'Emotion Recognition for Interactive Systems',
      location: 'Bangalore, India',
      date: 'January 2024',
      type: 'Poster Session'
    },
    {
      title: 'National Conference on Blockchain Technology',
      presentation: 'Blockchain in Document Verification',
      location: 'Delhi, India',
      date: 'November 2023',
      type: 'Keynote Speaker'
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Research & Publications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Contributing to the advancement of AI, blockchain, and human-computer interaction through rigorous research
          </p>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <FileText className="text-blue-400 mr-3" size={32} />
            Published Papers & Research
          </h3>
          
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{paper.title}</h4>
                    <p className="text-gray-400 mb-2">{paper.authors}</p>
                    <p className="text-blue-400 mb-4">{paper.journal} • {paper.year}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      paper.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {paper.status}
                    </span>
                    <a
                      href={paper.link}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Read Paper</span>
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{paper.abstract}</p>

                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Calendar className="text-purple-400 mr-3" size={32} />
            Conference Presentations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-bold text-white mb-3">{conf.title}</h4>
                <p className="text-blue-400 mb-2">{conf.presentation}</p>
                <p className="text-gray-400 text-sm mb-2">{conf.location}</p>
                <p className="text-gray-400 text-sm mb-4">{conf.date}</p>
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  {conf.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
