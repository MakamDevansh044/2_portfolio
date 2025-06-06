
import React from 'react';
import { Code, Brain, Users, Award, GraduationCap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Computer Vision', level: 90 },
    { name: 'Deep Learning', level: 88 },
    { name: 'Applied AI Systems', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Blockchain', level: 75 },
  ];

  const highlights = [
    {
      icon: <Brain className="text-blue-400" size={24} />,
      title: 'AI/ML Innovation',
      description: 'Building intelligent systems that understand and impact human lives'
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: 'Technical Excellence',
      description: 'Python, Computer Vision, Deep Learning with a 9.29 CGPA foundation'
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: 'Leadership Impact',
      description: 'President of RMC, Team Lead of Intell Alpha, General Secretary of Neural Nexus'
    },
    {
      icon: <Target className="text-yellow-400" size={24} />,
      title: 'Real-World Solutions',
      description: 'From PRAVAH to DIVA - building technology that serves actual human needs'
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
            AI/ML enthusiast, creative tech builder, and a leader with a mission to make technology understand humans better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                Hey there! I'm <span className="text-blue-400 font-semibold">Makam Devansh</span>, 
                an AI/ML enthusiast, creative tech builder, and a leader with a mission to make 
                technology understand humans better.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently pursuing my degree at <span className="text-purple-400 font-semibold">CBIT</span>, 
                I've built a strong foundation in Python, Computer Vision, Deep Learning, and Applied AI Systems — 
                all while maintaining a <span className="text-green-400 font-semibold">CGPA of 9.29</span> and 
                juggling multiple leadership roles. But I'm not just about scores or syntax. I believe in building things that matter.
              </p>

              <p className="text-lg leading-relaxed">
                Whether it's crafting a document verification system powered by AI & blockchain 
                (<span className="text-yellow-400 font-semibold">PRAVAH</span>), developing gesture-controlled 
                face recognition tools, or creating a legal assistant bot (<span className="text-blue-400 font-semibold">DIVA</span>) 
                for real-world use in police stations — I'm always blending intelligence with impact.
              </p>

              <p className="text-lg leading-relaxed">
                As the <span className="text-purple-400 font-semibold">President of the Ramanujan Math Club</span>, 
                <span className="text-green-400 font-semibold"> Team Lead of Intell Alpha</span>, and 
                <span className="text-blue-400 font-semibold"> General Secretary of Neural Nexus</span>, 
                I've led national-level events, organized innovation bootcamps, and mentored peers — because I believe 
                that innovation only scales with community.
              </p>

              <p className="text-lg leading-relaxed">
                I don't just code; I design systems, solve real problems, and lead with curiosity. And when I'm not 
                building the next big thing, you'll find me at the gym, organizing hackathons, or exploring how AI can 
                meet emotion, logic, and human need at the same intersection.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                <p className="text-xl font-semibold text-white text-center">
                  Let's build the future — one crazy, meaningful project at a time. 🚀
                </p>
              </div>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <GraduationCap className="text-blue-400 mr-3" size={28} />
                Technical Skills
              </h3>
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
