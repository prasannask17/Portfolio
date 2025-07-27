import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AgroSense',
      description: 'This project is an IoT-based Crop Prediction System that integrates real-time sensor data with intelligent algorithms to recommend the most suitable crops for farming. It is designed to assist farmers in making data-driven decisions using environmental inputs collected from IoT devices deployed in the field.',
      image: '/images/Agrosense.png',
      tech: ['React', 'Python', 'Flask', 'IoT & Sensors','ThingSpeak'],
      github: 'https://github.com/prasannask17/AgroSense/tree/master',
      live: '#',
      featured: true
    },
    {
      title: 'SnapNPlate',
      description: 'SnapNPlate is an AI-powered food image classification system that uses a Convolutional Neural Network (CNN) to classify images of food into 10 different categories. It leverages TensorFlow and Keras for model training, and is integrated with a FastAPI backend for real-time image uploads and predictions.',
      image: '/images/SnapNplate.png',
      tech: ['Jupyter Notebook', 'Python', 'TensorFlow', 'Machine Learning'],
      github: 'https://github.com/prasannask17/SnapNPlate/tree/main/SnapNPlate',
      live: '#',
      featured: true
    },
    // {
    //   title: 'IntegriProct',
    //   description: 'IntegriProct is a smart and flexible exam proctoring system designed for digital classroom environments. It offers rule-based and AI-powered proctoring features to maintain test integrity and support both teachers and students.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    //   github: 'https://github.com/prasannask17/IntegriProct/tree/master',
    //   live: '#',
    //   featured: false
    // },
    {
      title: 'Reflex-Test',
      description: 'Spectacular social networking platform with posts, comments, and real-time messaging.',
      image: '/images/Reflextest.png',
      tech: ['Java', 'Android Studio'],
      github: 'https://github.com/prasannask17/Reflex-Test-App',
      live: '#',
      featured: false
    },
    {
      title: 'TaskCard-Importer',
      description: 'When you upload a Task Card spreadsheet, the system first checks its structure and either moves it forward or flags it as an error. Next, it validates each row’s data format and required fields—any bad rows are set aside for you to fix. Then, business-rule checks (like schema and lookup validations) run, again isolating failures for correction. Finally, all passing entries become task cards and a success report is generated. You can correct any failures and reupload them in the next cycle.',
      image: '/images/TaskCard.png',
      tech: ['Knime Analytical Platform', 'Python', 'C#','Sql Server'],
      github: 'https://github.com/prasannask17/TaskCard-Importer',
      live: '#',
      featured: false
    },
    {
      title: 'Ecom',
      description: 'Ecom is a responsive online store built with modern web tools that lets users search and filter products by category, view details, and add items to a shopping cart.',
      image: '/images/Ecom.png',
      tech: ['TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/prasannask17/Ecom',
      live: '#',
      featured: false
    },
    // {
    //   title: 'Tree-Visualizer',
    //   description: 'Data structure visualization serves as a beacon in the realm of software engineering, illuminating the intricate organization and functionality of complex algorithms.Tree-viz is a visualization web app that focuses on giving a visual representation of complex non-linear data structures and their operations.',
    //   image: 'https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Spoonacular API', 'Redux'],
    //   github: 'https://github.com/prasannask17/Tree-Visualizer/tree/master',
    //   live: '#',
    //   featured: false
    // }
    // {
    //   title: 'Fitness Tracker',
    //   description: 'Ultimate workout tracking application with progress monitoring and goal setting.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Flutter', 'Firebase', 'Dart'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'Chat Application',
    //   description: 'Spectacular real-time messaging app with group chats and file sharing capabilities.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Amazing responsive portfolio website with modern design and smooth animations.',
    //   image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'URL Shortener',
    //   description: 'Ultimate link shortening service with analytics and custom domain support.',
    //   image: 'https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Node.js', 'Redis', 'Express', 'MongoDB'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'Quiz App',
    //   description: 'Spectacular interactive quiz platform with multiple categories and scoring system.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'TypeScript', 'Node.js'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'Music Player',
    //   description: 'Amazing web-based music player with playlist management and audio visualization.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['JavaScript', 'Web Audio API', 'CSS3'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // },
    // {
    //   title: 'Code Editor',
    //   description: 'Ultimate online code editor with syntax highlighting and live preview functionality.',
    //   image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'Monaco Editor', 'Node.js'],
    //   github: '#',
    //   live: '#',
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            MY <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent">WEB-SLINGING</span> PROJECTS
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 mx-auto mb-8 rounded-full" />
          <div className="bg-black/50 border-2 border-cyan-400 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-white text-lg font-bold">
              🕷️ Here are the <span className="text-red-400">spectacular</span> projects I've crafted while swinging through the digital multiverse! 🕸️
            </p>
          </div>
        </motion.div>

        <div className="space-y-20">
          {/* Featured Projects */}
          <div className="space-y-16">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-yellow-400 mb-12"
              style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}
            >
              🌟 FEATURED SPECTACULAR PROJECTS 🌟
            </motion.h3>
            
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-xl border-4 border-red-500 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                      FEATURED!
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Impact, sans-serif' }}>
                        {project.title}
                      </h3>
                      
                      <div className="bg-black/70 border-2 border-cyan-400 rounded-lg p-6">
                        <p className="text-white leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-bold border-2 border-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-black border-2 border-cyan-400 text-cyan-400 rounded-lg transition-all duration-300 font-bold hover:bg-cyan-400 hover:text-black"
                      >
                        <Github size={20} />
                        <span>CODE</span>
                      </motion.a>
                      <motion.a
                        // href={project.live}
                        // whileHover={{ scale: 1.05 }}
                        // whileTap={{ scale: 0.95 }}
                        // className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg font-bold border-2 border-red-400"
                      >
                        {/* <ExternalLink size={20} /> */}
                        {/* <span>LIVE DEMO</span> */}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-cyan-400 mb-12"
              style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 0px #000' }}
            >
              🕸️ MORE AMAZING PROJECTS 🕸️
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group bg-black/70 backdrop-blur-sm border-2 border-blue-500 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors" style={{ fontFamily: 'Impact, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 pt-2">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-white transition-colors text-sm font-bold"
                      >
                        <Github size={16} />
                        <span>CODE</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-red-400 hover:text-white transition-colors text-sm font-bold"
                      >
                        <ExternalLink size={16} />
                        <span>DEMO</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;