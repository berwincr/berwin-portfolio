import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Projects />
      <Skills/>
      <Achievements/>
      <Contact/>
    </>
  );
}

export default App;