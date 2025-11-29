import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Interests from '../components/Interests';
import Aspirations from '../components/Aspirations';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-midnight-navy">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Projects />
      <Experience />
      <Interests />
      <Aspirations />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
