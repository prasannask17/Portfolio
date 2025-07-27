import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Target, Shield } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building spectacular and interactive user interfaces with modern frameworks and libraries.',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Creating amazing server-side applications and APIs with scalable architecture.',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and implementing ultimate, maintainable solutions.',
      color: 'text-red-400'
    },
    {
      icon: Shield,
      title: 'Best Practices',
      description: 'Following industry standards for security, testing, and code quality.',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            ABOUT <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent">THE SPIDER-DEV</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/70 border-2 border-cyan-400 rounded-xl p-8 space-y-6">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Impact, sans-serif' }}>
                🕷️ FULL STACK SPIDER-DEV 🕸️
              </h3>
              <p className="text-lg text-white leading-relaxed font-medium">
                I'm a <span className="text-red-400 font-bold">spectacular</span> full stack developer with 2+ years of experience building 
                <span className="text-cyan-400 font-bold"> amazing</span> web applications. I enjoy creating efficient, scalable solutions and 
                learning new technologies to solve <span className="text-yellow-400 font-bold">ultimate</span> problems.
              </p>
              <p className="text-lg text-white leading-relaxed font-medium">
                My journey in the <span className="text-blue-400 font-bold">multiverse</span> of software development started with curiosity about how 
                websites work, and it has evolved into a career focused on creating 
                <span className="text-red-400 font-bold"> meaningful digital experiences</span>.
              </p>
            </div>

            <div className="bg-black/70 border-2 border-red-400 rounded-xl p-6 space-y-4">
              <h4 className="text-xl font-bold text-red-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                🚀 TECHNICAL SUPERPOWERS
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-bold text-center border-2 border-white hover:border-yellow-400 transition-all"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="group"
              >
                <div className="bg-black/70 backdrop-blur-sm border-2 border-blue-500 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-lg bg-black border-2 border-current ${skill.color}`}>
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${skill.color}`} style={{ fontFamily: 'Impact, sans-serif' }}>
                        {skill.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed font-medium">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;