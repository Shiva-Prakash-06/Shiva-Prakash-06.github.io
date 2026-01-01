import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaMountain, FaStar } from 'react-icons/fa';

const Aspirations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aspirations = [
    {
      title: 'Short Term',
      subtitle: '2025 - 2027',
      icon: <FaRocket />,
      goals: [
        'Land Business Analyst roles in reputed organizations',
        'Build a stronger, more diverse project portfolio',
        'Develop more full-stack applications with modern tech stacks',
        'Deepen expertise in data analytics and visualization',
        'Master advanced SQL and database optimization',
        'Complete B.Com and progress through IIT Madras BS program',
        'Contribute to open-source projects'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Medium Term',
      subtitle: '2027 - 2030',
      icon: <FaMountain />,
      goals: [
        'Pursue MBA from a top-tier business school',
        'Take on leadership roles in business analytics teams',
        'Specialize in a domain (FinTech, HealthTech, or EdTech)',
        'Build expertise in business intelligence tools',
        'Lead cross-functional teams on major initiatives',
        'Mentor aspiring analysts and developers',
        'Establish thought leadership through writing and speaking'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Long Term',
      subtitle: '2030 and Beyond',
      icon: <FaStar />,
      goals: [
        'Build systems that merge business, analytics, and technology',
        'Lead strategic initiatives at organizational level',
        'Create impact through innovative business solutions',
        'Establish a consulting practice or venture',
        'Bridge the gap between technical and business teams',
        'Drive digital transformation in traditional industries',
        'Inspire and mentor the next generation of tech leaders'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="aspirations" ref={ref} className="py-20 bg-gradient-to-b from-midnight-navy via-slate-gray to-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Future <span className="text-royal-gold">Aspirations</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            A roadmap of my professional journey, with clear milestones and ambitious goals
          </p>
        </motion.div>

        <div className="space-y-8">
          {aspirations.map((aspiration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 group">
                {/* Header */}
                <div className={`bg-gradient-to-r ${aspiration.color} p-1`}>
                  <div className="bg-slate-gray p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-4">
                      <motion.div
                        className="text-4xl md:text-5xl text-royal-gold"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {aspiration.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-warm-white mb-1">{aspiration.title}</h3>
                        <p className="text-royal-gold font-semibold font-jetbrains text-sm md:text-base">{aspiration.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goals */}
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aspiration.goals.map((goal, goalIndex) => (
                      <motion.div
                        key={goalIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + goalIndex * 0.1 }}
                        className="flex items-start gap-3 bg-royal-gold/5 p-4 rounded-lg border border-royal-gold/20 hover:border-royal-gold/40 hover:bg-royal-gold/10 transition-all duration-300"
                      >
                        <div className="text-royal-gold mt-1 flex-shrink-0">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-warm-white/90 text-sm">{goal}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider between sections */}
              {index < aspirations.length - 1 && (
                <div className="flex items-center justify-center my-6">
                  <div className="h-12 w-1 bg-gradient-to-b from-royal-gold to-royal-gold/20"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-transparent via-royal-gold/20 to-transparent p-8 rounded-2xl">
            <p className="text-2xl md:text-3xl font-bold text-warm-white mb-4">
              "Building the future, one system at a time"
            </p>
            <p className="text-royal-gold text-lg">
              — My commitment to continuous growth and impactful work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aspirations;
