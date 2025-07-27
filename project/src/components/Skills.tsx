import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🕸️',
      skills: [
        { name: 'React',level: 85 },
        { name: 'TypeScript',level: 75 },
        { name: 'Tailwind CSS',level: 80 },
        { name: 'Next.js',level: 85},
      ]
    },
    {
      title: 'Backend',
      icon: '🕷️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🚀',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            SPIDER <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent">SUPERPOWERS</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 mx-auto mb-8 rounded-full" />
          <div className="bg-black/70 border-2 border-cyan-400 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-white text-lg font-bold">
              🕷️ Here are the <span className="text-red-400">spectacular</span> technologies and tools I use to build <span className="text-cyan-400">amazing</span> applications! 🕸️
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-500 hover:border-red-500 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-black/50 rounded-full h-3 border border-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full border border-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;