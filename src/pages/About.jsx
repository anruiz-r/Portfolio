import React from "react";
import aboutPic from "../assets/IMG_02778.jpg";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";

function About() {
  return (
    <div className="screen" id="about-section">
      <div id="about-info">
        <h2 className="typing">About me</h2>
        <p>
          🎯 Desarrollador Frontend Junior en proceso de transición del sector
          turístico al desarrollo web. Tras más de cinco años de experiencia en
          atención al cliente en el turismo, decidí dar un giro profesional
          hacia la tecnología. Esta decisión me llevó a completar el Bootcamp de
          Desarrollo Web Full Stack en IronHack, donde adquirí habilidades clave
          en HTML, CSS, JavaScript (ES6) y el stack MERN (MongoDB, Express,
          React, Node.js), además de metodologías Agile y Testing con Jest. 📚
          Como complemento a mi formación, participé en la Piscina de
          Programación de 42 Málaga, un proceso de selección intensivo de 26
          días donde adquirí bases sólidas de programación en C en un entorno de
          aprendizaje colaborativo y autodirigido. La experiencia en 42, basada
          en el aprendizaje entre iguales, me permitió perfeccionar mis
          capacidades de resolución de problemas y colaboración. 🚀 Proyectos
          destacados: CatsCooking: Un juego donde el jugador controla a un gato
          chef en una carrera contrarreloj. Proyecto ideal para perfeccionar
          JavaScript y DOM manipulation. Travel Stories: SPA en React que
          permite a los usuarios compartir historias de viaje, con un backend
          simulado y operaciones CRUD, desarrollada en equipo. CraftShop:
          E-commerce completo con el stack MERN, que incluye autenticación,
          roles de usuario y una interfaz adaptativa. Gran experiencia en
          Full-Stack Development y trabajo en equipo. 👥 Lo que aporto: Mis
          habilidades en atención al cliente me han ayudado a desarrollar una
          gran capacidad de comunicación y un enfoque centrado en el usuario,
          esenciales en el desarrollo de software. Disfruto trabajar en equipo y
          busco aprender continuamente, especialmente en entornos colaborativos
          y dinámicos donde se valora la creatividad y la innovación. 🔍 ¿Buscas
          un desarrollador junior con ganas de aprender y aportar? ¡Conectemos!
        </p>

        <div>
          <Link
            to={"https://www.linkedin.com/in/angela-ruiz-rodriguez"}
            target="_blank"
          >
            <button className="blue-btn">
              <Icon icon={linkedin} /> LinkedIn
            </button>
          </Link>
          <Link to={"https://github.com/anruiz-r"} target="_blank">
            <button className="blue-btn">
              <Icon icon={github} /> GitHub
            </button>
          </Link>
        </div>
      </div>
      <div id="about-pic">
        <img src={aboutPic} alt="" />
      </div>
    </div>
  );
}

export default About;
