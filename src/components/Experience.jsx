import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaTrophy, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Event Tech & Systems Leadership',
      organization: 'College Sports Fest',
      period: '2024 - Present',
      icon: <FaTrophy />,
      description: 'Leading development and management of event technology systems',
      achievements: [
        'Designed and developed Docathon Sports Event Management System',
        'Implemented complex tournament logic (knockout, tri-series)',
        'Created scoring and fixture management tools',
        'Managed participant tracking for 100+ students',
        'Designed black & gold branded UI/UX',
        'Handled real-time event operations and data management'
      ],
      tags: ['Event Management', 'Full-Stack Development', 'UI/UX', 'Operations']
    },
    {
      title: 'Project Development & Ownership',
      organization: 'IIT Madras MAD Course',
      period: '2024 - 2025',
      icon: <FaCode />,
      description: 'End-to-end ownership of course application projects',
      achievements: [
        'Built Vehicle Parking App with complete CRUD operations',
        'Developed Hospital Management System V2 with async processing',
        'Implemented Redis caching and Celery batch jobs',
        'Created RESTful APIs with Flask',
        'Built responsive frontends with VueJS and Bootstrap',
        'Achieved project requirements with clean, maintainable code'
      ],
      tags: ['Flask', 'VueJS', 'Database Design', 'API Development']
    },
    {
      title: 'Teaching & Mentoring',
      organization: 'Peer Learning',
      period: '2024 - Present',
      icon: <FaChalkboardTeacher />,
      description: 'Helping peers understand application development concepts',
      achievements: [
        'Conducted discussions on DBMS concepts and SQL',
        'Explained Flask application architecture and patterns',
        'Guided peers through debugging and problem-solving',
        'Shared best practices for code organization',
        'Assisted in understanding REST API design',
        'Helped with project planning and implementation strategies'
      ],
      tags: ['Mentoring', 'DBMS', 'Flask', 'Problem Solving']
    },
    {
      title: 'Operations & Event Coordination',
      organization: 'College Events',
      period: '2024 - Present',
      icon: <FaUsers />,
      description: 'Managing operations and coordination for college-level events',
      achievements: [
        'Coordinated sports fest logistics and scheduling',
        'Managed team communications and updates',
        'Ensured smooth execution of event workflows',
        'Handled participant registrations and data',
        'Coordinated with multiple teams for event success',
        'Created documentation and operational guidelines'
      ],
      tags: ['Leadership', 'Coordination', 'Team Management', 'Operations']
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-b from-slate-gray to-midnight-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Experience & <span className="text-royal-gold">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Building systems, leading teams, and creating impact through technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-royal-gold via-royal-gold to-royal-gold/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
            >
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-royal-gold rounded-full items-center justify-center text-midnight-navy text-2xl z-10 shadow-lg shadow-royal-gold/50 border-4 border-midnight-navy">
                  {exp.icon}
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 group hover:-translate-y-1">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-royal-gold/20 to-transparent p-6 border-b border-royal-gold/20">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="md:hidden text-3xl text-royal-gold">{exp.icon}</div>
                        <div className="flex-grow">
                          <h3 className="text-xl md:text-2xl font-bold text-warm-white mb-1">{exp.title}</h3>
                          <p className="text-royal-gold font-semibold">{exp.organization}</p>
                          <p className="text-warm-white/60 text-sm font-jetbrains mt-1">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-warm-white/80 text-sm">{exp.description}</p>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-royal-gold font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-warm-white/80 text-sm">
                              <span className="text-royal-gold mt-1 flex-shrink-0">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-royal-gold/20">
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-royal-gold/10 text-royal-gold rounded-lg text-xs font-medium border border-royal-gold/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '3+', label: 'Major Projects', icon: '🚀' },
            { number: '100+', label: 'Event Participants', icon: '👥' },
            { number: '10+', label: 'Technologies Used', icon: '⚙️' },
            { number: '2+', label: 'Years Learning', icon: '📚' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="bg-slate-gray rounded-xl border border-royal-gold/20 p-6 text-center hover:border-royal-gold/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-royal-gold/20"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-royal-gold font-jetbrains mb-1">{stat.number}</div>
              <div className="text-warm-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
