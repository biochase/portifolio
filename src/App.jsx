import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Service from './components/Service';
import Experience from './components/Experience';
// import Project from './components/Project';
import Footer from "./components/Footer";
import Whatsapp from './components/Whatsapp';
import Contact from './components/Contact';

const App =() => {

  return (
    <div>
      <Navbar />
      <Whatsapp />
      <Hero />
      <About />
      <Service />      
      <Experience />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
