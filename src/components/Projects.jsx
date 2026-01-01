import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaFlask, FaDatabase, FaHtml5, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiBootstrap, SiRedis, SiVuedotjs, SiCelery } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Vehicle Parking App',
      description: 'A comprehensive parking slot management system with real-time availability tracking and admin dashboard.',
      shortDesc: 'Parking management with slot booking and analytics',
      tech: ['Flask', 'SQLite', 'HTML/CSS', 'Bootstrap', 'Jinja2'],
      features: [
        'Real-time slot booking and unbooking',
        'Admin dashboard with usage analytics',
        'Interactive charts for parking trends',
        'Automatic slot allocation algorithm',
        'Complete booking history tracking',
        'Polished responsive UI'
      ],
      course: 'Built for IITM MAD-1 Course',
      color: 'from-blue-500/20 to-purple-500/20',
      icon: <FaDatabase />,
      image: '/project-1.png'
    },
    {
      id: 2,
      title: 'Docathon Sports Event App',
      description: 'Event management system for college sports fest with complex tournament logic and scoring.',
      shortDesc: 'Sports fest management with tournament logic',
      tech: ['Flask', 'SQLite', 'Bootstrap', 'Jinja2'],
      features: [
        'Knockout tournament system',
        'Tri-series scenario handling',
        'Point-based advancement logic',
        'Participation tracking system',
        'Admin CRUD operations',
        'Class and sports management',
        'Passcode-based secure access',
        'Black & gold branded UI'
      ],
      course: 'Built for College Sports Fest',
      color: 'from-yellow-500/20 to-orange-500/20',
      icon: <FaFlask />,
      image: '/project-2.png'
    },
    {
      id: 3,
      title: 'Hospital Management System V2',
      description: 'Advanced healthcare management platform with role-based access and asynchronous job processing.',
      shortDesc: 'Healthcare platform with async jobs & caching',
      tech: ['Flask (API)', 'VueJS', 'SQLite', 'Redis', 'Celery'],
      features: [
        'Three role system: Admin, Doctor, Patient',
        'Appointment scheduling & management',
        'Treatment records and history',
        'Scheduled reminder system (Celery jobs)',
        'Activity reports with analytics',
        'Async CSV export functionality',
        'Redis-based caching layer',
        'Role-based authentication & authorization',
        'Programmatic database creation'
      ],
      course: 'Built for Application Development Practice',
      color: 'from-green-500/20 to-teal-500/20',
      icon: <SiVuedotjs />,
      image: '/project-3.png'
    },
    {
      id: 4,
      title: 'Blossoms Fest 2025',
      description: 'Comprehensive festival management system combining public website with full-featured participation tracking for college fest with 2,512 students, 31 events, and real-time analytics.',
      shortDesc: 'Festival management with participation tracking',
      tech: ['Astro v5 SSR', 'Turso (libsql)', 'Tailwind CSS', 'Chart.js'],
      features: [
        'Integrated website & participation tracker',
        '2,512 pre-loaded students with authentication',
        '31 events across 4 categories (15 team events)',
        'Student portal: Event registration (solo & team)',
        'Admin dashboard: 4 real-time analytics charts',
        'Attendance tracking with search/filter',
        'Winners management with Greek mythology theme',
        'Notifications system with slide-in popups',
        'CSV exports (4 types) and defaulters tracking',
        'Team formation & management (6-10 members)',
        'Cloud database (Turso) deployed on Vercel'
      ],
      course: 'Department of Commerce Fest',
      color: 'from-amber-500/20 to-yellow-500/20',
      icon: <FaDatabase />,
      image: '/project-4.png'
    }
  ];

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
            Full-stack applications built with modern technologies, focusing on real-world problem solving
          </p>
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
