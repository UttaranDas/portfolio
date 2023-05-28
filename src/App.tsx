import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
