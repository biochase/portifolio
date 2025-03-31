import Bot from './components/Bot';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Service from './components/Service';
import Experience from './components/Experience';
// import Project from './components/Project';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App =() => {

  return (
    <div>
      <Navbar />
      <Bot />
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
