
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Makam Devansh
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            AI/ML Developer & Innovator
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building intelligent systems with <span className="text-blue-400">Python</span>, 
            <span className="text-purple-400"> OpenCV</span>, and 
            <span className="text-pink-400"> Deep Learning</span>. 
            Leading innovations in AI, blockchain, and human-computer interaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-4 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Download Resume
            </button>
          </div>

          {/* Floating Tech Icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto mb-16">
            {['🤖', '🧠', '🔬', '📊', '⚡', '🚀'].map((icon, index) => (
              <div
                key={index}
                className="text-4xl animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
