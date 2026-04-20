import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUniversity, FaBook, FaChartBar, FaPython, FaDatabase, FaFlask } from 'react-icons/fa';
import { SiJupyter } from 'react-icons/si';
import { profileData } from '../data/profileData';

const Academics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const christEducation = profileData.education.find((item) => item.institution.includes('Christ'));
  const iitmEducation = profileData.education.find((item) => item.institution.includes('IIT'));

  const christCourses = christEducation.coursework.map((name, index) => ({
    name,
    progress: 65 + index * 5,
  }));

  const iitmCompleted = iitmEducation.coursework.slice(0, 4).map((name, index) => {
    const icons = [<FaPython />, <FaChartBar />, <SiJupyter />, <FaChartBar />];
    const colors = ['text-blue-400', 'text-green-400', 'text-orange-400', 'text-purple-400'];
    return { name, icon: icons[index] || <FaChartBar />, color: colors[index] || 'text-royal-gold' };
  });

  const iitmCurrent = iitmEducation.coursework.slice(2).map((name, index) => {
    const icons = [<FaDatabase />, <FaFlask />, <FaPython />, <FaBook />];
    return { name, icon: icons[index] || <FaBook />, progress: 55 + index * 7 };
  });

  return (
    <section id="academics" ref={ref} className="py-20 bg-gradient-to-b from-midnight-navy to-slate-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Academic <span className="text-royal-gold">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Pursuing dual degrees to combine business acumen with data science expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Christ University Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 group"
          >
            <div className="bg-gradient-to-r from-royal-gold to-royal-gold/80 p-4 md:p-6">
              <FaUniversity className="text-3xl md:text-4xl text-midnight-navy mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-midnight-navy">{christEducation.institution}</h3>
              <p className="text-midnight-navy/80 font-semibold text-sm md:text-base">{christEducation.degree}</p>
              <p className="text-midnight-navy/70 text-xs sm:text-sm mt-1">{christEducation.period}</p>
            </div>

            <div className="p-4 md:p-6 space-y-6 md:space-y-8">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-royal-gold mb-4">Key Coursework</h4>
                <div className="space-y-4">
                  {christCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-warm-white/90 text-xs sm:text-sm">{course.name}</span>
                        <span className="text-royal-gold text-xs sm:text-sm font-jetbrains">{course.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-gray-light rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-royal-gold to-royal-gold/70"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${course.progress}%` } : {}}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-royal-gold/20">
                <h4 className="text-lg font-semibold text-warm-white mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.businessAndStrategy.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-royal-gold/20 text-royal-gold rounded-full text-xs font-medium border border-royal-gold/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IIT Madras Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 group"
          >
            <div className="bg-gradient-to-r from-royal-gold/90 to-royal-gold p-4 md:p-6">
              <FaBook className="text-3xl md:text-4xl text-midnight-navy mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-midnight-navy">{iitmEducation.institution}</h3>
              <p className="text-midnight-navy/80 font-semibold text-sm md:text-base">{iitmEducation.degree}</p>
              <p className="text-midnight-navy/70 text-xs sm:text-sm mt-1">{iitmEducation.period}</p>
            </div>

            <div className="p-4 md:p-6 space-y-6 md:space-y-8">
              {/* Completed Modules */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-lg md:text-xl font-semibold text-royal-gold">Completed</h4>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">CGPA {iitmEducation.cgpa}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {iitmCompleted.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="bg-slate-gray-light p-3 md:p-4 rounded-lg border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 flex items-center gap-2 md:gap-3"
                    >
                      <span className={`${module.color} text-lg md:text-xl`}>{module.icon}</span>
                      <span className="text-warm-white/90 font-medium text-xs sm:text-sm">{module.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Modules */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-lg md:text-xl font-semibold text-royal-gold">Currently Studying</h4>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold">Data Science & Applications</span>
                </div>
                <div className="space-y-3">
                  {iitmCurrent.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="bg-slate-gray-light p-3 rounded-lg border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-xl text-royal-gold">{module.icon}</div>
                        <span className="text-warm-white/90 text-sm font-medium flex-grow">{module.name}</span>
                        <span className="text-royal-gold text-xs font-jetbrains">{module.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-midnight-navy rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-royal-gold to-royal-gold/70"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${module.progress}%` } : {}}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-gradient-to-r from-royal-gold/10 to-transparent border border-royal-gold/30 rounded-2xl p-6 text-center"
        >
          <h4 className="text-2xl font-bold text-warm-white mb-2">
            Dual Degree <span className="text-royal-gold">Advantage</span>
          </h4>
          <p className="text-warm-white/80 max-w-3xl mx-auto">
            Combining business finance fundamentals with data science training to build a balanced profile
            that bridges analytical rigor with practical business applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
