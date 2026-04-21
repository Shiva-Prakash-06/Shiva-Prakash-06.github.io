import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaFlask, FaDatabase, FaHtml5, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiBootstrap, SiRedis, SiVuedotjs, SiCelery } from 'react-icons/si';
import { profileData } from '../data/profileData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projectColors = [
    'from-blue-500/20 to-purple-500/20',
    'from-yellow-500/20 to-orange-500/20',
    'from-green-500/20 to-teal-500/20',
    'from-amber-500/20 to-yellow-500/20',
    'from-cyan-500/20 to-blue-500/20',
  ];

  const projects = profileData.projects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    shortDesc: project.points[0],
    tech: project.tech,
    features: project.points,
    course: project.context,
    color: projectColors[index % projectColors.length],
    icon: project.tech.includes('Flask') ? <FaFlask /> : project.tech.includes('VueJS') ? <SiVuedotjs /> : <FaDatabase />,
    image: project.image,
  }));

  const techIcons = {
    'Flask': <FaFlask />,
    'SQLite': <FaDatabase />,
    'HTML/CSS': <FaHtml5 />,
    'Bootstrap': <SiBootstrap />,
    'Redis': <SiRedis />,
    'VueJS': <SiVuedotjs />,
    'Celery': <SiCelery />
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Featured <span className="text-royal-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Structured project systems built for operations, analytics, and real-world execution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 bg-royal-gold/10 border border-royal-gold/30 rounded-xl p-4 text-center"
        >
          <p className="text-warm-white/80 text-sm">{profileData.projectsReference}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="bg-slate-gray rounded-2xl border border-royal-gold/20 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 h-full flex flex-col hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color}`}></div>
                </div>
                
                {/* Project Header */}
                <div className="p-4 md:p-6 border-b border-royal-gold/20">
                  <div className="text-2xl md:text-3xl text-royal-gold mb-3">{project.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-warm-white mb-2">{project.title}</h3>
                  <p className="text-warm-white/70 text-xs sm:text-sm">{project.shortDesc}</p>
                </div>

                {/* Project Body */}
                <div className="p-4 md:p-6 flex-grow flex flex-col">
                  <p className="text-warm-white/80 text-xs sm:text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-royal-gold font-semibold text-xs sm:text-sm mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-royal-gold/10 text-royal-gold rounded text-xs border border-royal-gold/30 flex items-center gap-1"
                        >
                          {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Badge */}
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-midnight-navy text-warm-white/80 rounded text-xs font-medium border border-royal-gold/30">
                      {project.course}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-royal-gold/10 hover:bg-royal-gold hover:text-midnight-navy text-royal-gold py-2 md:py-3 px-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 border border-royal-gold/30 hover:border-royal-gold flex items-center justify-center gap-2"
                  >
                    View Details <FaExternalLinkAlt className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-warm-white text-center mb-4">
            {profileData.currentProjectsSummary.title}
          </h3>
          <p className="text-warm-white/70 text-sm md:text-base text-center max-w-4xl mx-auto mb-8">
            {profileData.currentProjectsSummary.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {profileData.currentProjects.map((currentProject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.85 + index * 0.1 }}
                className="bg-slate-gray rounded-2xl border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 p-6"
              >
                <h4 className="text-xl font-bold text-warm-white mb-2">{currentProject.title}</h4>
                <p className="text-royal-gold text-xs break-words mb-4">{currentProject.path}</p>
                <p className="text-warm-white/80 text-sm leading-relaxed mb-4">{currentProject.outcome}</p>
                <ul className="space-y-2">
                  {currentProject.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-warm-white/80 text-sm">
                      <span className="text-royal-gold mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-warm-white text-center mb-8">
            Analytics & <span className="text-royal-gold">Research Work</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {profileData.analytics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="bg-slate-gray rounded-xl border border-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 p-5"
              >
                <h4 className="text-lg font-bold text-royal-gold mb-2">{item.title}</h4>
                <p className="text-warm-white/80 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-midnight-navy/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-gray rounded-2xl border-2 border-royal-gold/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`bg-gradient-to-br ${selectedProject.color} p-6 md:p-8 border-b border-royal-gold/30`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <div className="text-4xl md:text-5xl text-royal-gold mb-4">{selectedProject.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-warm-white mb-2">{selectedProject.title}</h3>
                    <p className="text-warm-white/80 text-sm md:text-base">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-warm-white/80 hover:text-royal-gold text-2xl md:text-3xl transition-colors flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-royal-gold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-royal-gold/10 text-royal-gold rounded-lg text-xs sm:text-sm font-medium border border-royal-gold/30 flex items-center gap-2"
                      >
                        {techIcons[tech] && <span className="text-lg">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-royal-gold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-royal-gold mt-1">✓</span>
                        <span className="text-warm-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Info */}
                <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4">
                  <p className="text-warm-white/90">
                    <span className="text-royal-gold font-semibold">Context:</span> {selectedProject.course}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
