import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, 
  FaChartBar, FaBrain, FaUsers, FaLightbulb, FaComments 
} from 'react-icons/fa';
import { SiFlask, SiBootstrap, SiPostgresql, SiRedis } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <FaPython />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'Flask', icon: <SiFlask />, level: 80 },
        { name: 'SQLite', icon: <FaDatabase />, level: 80 },
        { name: 'SQL', icon: <SiPostgresql />, level: 75 },
        { name: 'HTML/CSS', icon: <FaHtml5 />, level: 80 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 75 },
        { name: 'Jinja2', icon: <FaHtml5 />, level: 75 },
        { name: 'REST APIs', icon: <FaDatabase />, level: 80 },
        { name: 'Git Basics', icon: <FaGitAlt />, level: 70 },
        { name: 'Data Analysis', icon: <FaChartBar />, level: 75 }
      ]
    },
    {
      title: 'Business & Analytics',
      icon: <FaChartBar />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Financial Modeling', icon: <FaChartBar />, level: 70 },
        { name: 'Business Analysis', icon: <FaBrain />, level: 75 },
        { name: 'Requirements Gathering', icon: <FaComments />, level: 80 },
        { name: 'Data Interpretation', icon: <FaChartBar />, level: 80 },
        { name: 'Statistics', icon: <FaChartBar />, level: 75 },
        { name: 'Systems Thinking', icon: <FaBrain />, level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Leadership', icon: <FaUsers />, level: 85 },
        { name: 'Communication', icon: <FaComments />, level: 80 },
        { name: 'Problem Solving', icon: <FaLightbulb />, level: 90 },
        { name: 'Decision Making', icon: <FaBrain />, level: 80 },
        { name: 'Teamwork', icon: <FaUsers />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-gold/5 via-transparent to-royal-gold/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Skills & <span className="text-royal-gold">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning technical development, business analytics, and leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.2 }}
              className="group"
            >
              <div className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-royal-gold/30 h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-1`}>
                  <div className="bg-slate-gray p-6">
                    <motion.div
                      className="text-4xl text-royal-gold mb-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-warm-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="text-royal-gold text-lg"
                            whileHover={{ scale: 1.3, rotate: 15 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-warm-white/90 font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-royal-gold text-xs font-jetbrains font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-gray-light rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-royal-gold to-royal-gold/70 relative"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.05 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-slate-gray rounded-2xl border border-royal-gold/30 p-8"
        >
          <h3 className="text-2xl font-bold text-warm-white mb-6 text-center">
            Additional <span className="text-royal-gold">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'VueJS Basics', 'Redis Caching', 'Celery (Async Jobs)', 'REST API Design',
              'Database Design', 'Event-Driven Architecture', 'Agile Workflows',
              'Technical Documentation', 'Code Review', 'Debugging'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-royal-gold/10 text-royal-gold rounded-full text-sm font-medium border border-royal-gold/30 hover:bg-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center bg-gradient-to-r from-royal-gold/10 to-transparent border border-royal-gold/30 rounded-2xl p-8"
        >
          <h4 className="text-2xl font-bold text-warm-white mb-4">
            Continuous <span className="text-royal-gold">Learning</span>
          </h4>
          <p className="text-warm-white/80 max-w-3xl mx-auto">
            I believe in learning by building. Every project is an opportunity to master new technologies 
            and refine existing skills. My approach combines structured learning through academic programs 
            with hands-on project experience to create practical, real-world expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
