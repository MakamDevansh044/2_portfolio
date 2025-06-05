
import React from 'react';
import { Code, Brain, Users, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'OpenCV', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Blockchain', level: 75 },
    { name: 'Computer Vision', level: 88 },
  ];

  const highlights = [
    {
      icon: <Brain className="text-blue-400" size={24} />,
      title: 'AI/ML Expertise',
      description: 'Deep learning, computer vision, and intelligent system development'
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: 'Technical Skills',
      description: 'Python, OpenCV, TensorFlow, PyTorch, and modern frameworks'
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: 'Leadership',
      description: 'Events Head of Ramanujan Math Club and Core RMC Member'
    },
    {
      icon: <Award className="text-yellow-400" size={24} />,
      title: 'Innovation',
      description: 'Award-winning projects in AI, blockchain, and human-tech interaction'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate AI/ML developer with a persistent attitude and love for solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                Hi! I'm <span className="text-blue-400 font-semibold">Makam Devansh</span>, 
                an AI/ML enthusiast and developer with a strong foundation in building intelligent systems. 
                My journey in technology is driven by an insatiable curiosity and a persistent attitude 
                towards solving real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                As the <span className="text-purple-400 font-semibold">Events Head of Ramanujan Math Club</span> 
                and a <span className="text-green-400 font-semibold">Core RMC Member</span>, I bridge the gap 
                between theoretical mathematics and practical AI applications. My experience as an intern at 
                <span className="text-yellow-400 font-semibold"> Infosys & AICTE IDEA Lab</span> has shaped 
                my understanding of enterprise-level AI solutions.
              </p>

              <p className="text-lg leading-relaxed">
                I believe in the power of technology to transform lives, and I'm passionate about creating 
                solutions that make a meaningful impact. Whether it's developing document verification systems 
                or emotion-based media control, I strive to build technology that serves humanity.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
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

export default About;
