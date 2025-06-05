
import React from 'react';
import { Play, Camera, Award, Users } from 'lucide-react';

const Media = () => {
  const mediaItems = [
    {
      type: 'video',
      title: 'AI Bootcamp Highlights',
      description: 'Behind the scenes of our intensive AI/ML bootcamp',
      thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      date: 'March 2024'
    },
    {
      type: 'image',
      title: 'Hackathon Victory',
      description: 'Winning the national AI hackathon with PRAVAH',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      date: 'February 2024'
    },
    {
      type: 'video',
      title: 'DIVA Demo Presentation',
      description: 'Live demonstration of our legal AI assistant',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      date: 'January 2024'
    },
    {
      type: 'image',
      title: 'RMC Leadership Summit',
      description: 'Leading strategic planning for Ramanujan Math Club',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      date: 'December 2023'
    },
    {
      type: 'video',
      title: 'Tech Innovation Workshop',
      description: 'Teaching computer vision to aspiring developers',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      date: 'November 2023'
    },
    {
      type: 'image',
      title: 'Research Collaboration',
      description: 'Working with professors on blockchain research',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: 'October 2023'
    }
  ];

  const stats = [
    { icon: <Users className="text-blue-400" size={24} />, number: '500+', label: 'Students Mentored' },
    { icon: <Camera className="text-purple-400" size={24} />, number: '15+', label: 'Events Organized' },
    { icon: <Award className="text-green-400" size={24} />, number: '8', label: 'Awards Won' },
    { icon: <Play className="text-yellow-400" size={24} />, number: '25+', label: 'Workshops Conducted' }
  ];

  return (
    <section id="media" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Media & Events
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capturing moments of innovation, learning, and community building
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Media Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Play button overlay for videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                )}

                {/* Type indicator */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'video' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-blue-500/80 text-white'
                  }`}>
                    {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-gray-500 text-xs">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more of my work and activities?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              View All Media
            </button>
            <button className="px-8 py-3 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Follow My Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
