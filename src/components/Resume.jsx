import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDownload, FaFilePdf, FaClock } from 'react-icons/fa';
import { profileData } from '../data/profileData';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resume, basic } = profileData;

  return (
    <section id="resume" ref={ref} className="py-20 bg-gradient-to-b from-slate-gray to-midnight-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            My <span className="text-royal-gold">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Download my complete resume to learn more about my journey, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-royal-gold to-yellow-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-slate-gray p-6 md:p-8 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-wrap gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <FaFilePdf className="text-3xl md:text-4xl text-midnight-navy flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-midnight-navy break-words">{resume.filename}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <FaClock className="text-midnight-navy/70 text-sm" />
                      <p className="text-midnight-navy/70 text-xs sm:text-sm">Last updated: {resume.updatedAt}</p>
                    </div>
                  </div>
                </div>
                <motion.a
                  href={resume.filePath}
                  download={resume.filename}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-midnight-navy text-royal-gold px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-midnight-navy/90 transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  <FaDownload /> Download PDF
                </motion.a>
              </div>
            </div>

            <div className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 p-4 md:p-8 shadow-xl h-[500px] md:h-[800px]">
              <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src={resume.filePath}
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 text-center"
          >
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div>
                <p className="text-warm-white/60 text-sm">Version</p>
                <p className="text-royal-gold font-bold font-jetbrains">{resume.version}</p>
              </div>
              <div className="h-8 w-px bg-royal-gold/30"></div>
              <div>
                <p className="text-warm-white/60 text-sm">Format</p>
                <p className="text-royal-gold font-bold">{resume.format}</p>
              </div>
              <div className="h-8 w-px bg-royal-gold/30"></div>
              <div>
                <p className="text-warm-white/60 text-sm">Size</p>
                <p className="text-royal-gold font-bold font-jetbrains">{resume.size}</p>
              </div>
            </div>

            <motion.a
              href={resume.filePath}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 text-royal-gold hover:text-royal-gold/80 transition-colors underline text-sm"
            >
              View in new tab
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-warm-white/70 text-sm">
              Need a different format? Contact me at{' '}
              <a href={`mailto:${basic.email}`} className="text-royal-gold hover:underline">
                {basic.email}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
