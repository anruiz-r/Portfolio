import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import BootstrapNav from "./components/BootstrapNav.jsx";

function App() {
  return (
    <>
      <BootstrapNav/>
      <div className="dinamic-screen">
        <Header />
        <About />
        <Contact />
        <Projects />
      </div>
      <Footer />
      
    </>
  );
}

export default App;
