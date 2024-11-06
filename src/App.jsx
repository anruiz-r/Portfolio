import './App.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"



function App() {
  
  return (
    <>
<Header/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/about" element={<About/>} />
        <Route path= "/projects" element={<Projects/>} />
        <Route path= "/contact" element={<Contact/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
