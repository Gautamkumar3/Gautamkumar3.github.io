
import './App.css';
import Navbar from './Components/Navbar';
import ProjectCard from './Components/ProjectCard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Github from './Pages/Github';
import Home from './Pages/Home';
import Projects from './Pages/Project';

import Skills from './Pages/Skills';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ProjectCard />
      <Skills />
      <Github />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
