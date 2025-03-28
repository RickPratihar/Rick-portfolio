import Contact from "./Contact";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <Experience/>
     <SocialLinks />
     <Portfolio />
    <Skills />
    <Services/>
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
