import React, { useEffect } from "react";
import programador from "../assets/img/contratar_programador.jpg"
import fronted from "../assets/img/frontend.jpg"
import backend from "../assets/img/backend-is.png"

export function Blogs() {
  useEffect(() => {
    document.title = 'José Jiménez - Inicio'
  }, [])
  
  return (
    <section className="section_inicio">
      <h2 className="title_section">Hola Y Bienvenidos A Mi Espacio👋🏻</h2>
      
        <div className="contenedor">
          
            <p>Hola mi nombre es José Jiménez soy Técnico Industrial; carrera con la que adquirí grandes conocimientos tanto profesionales como persona. Sin embargo siempre mantuve tendencias por el mundo de la programación y como esta se desarrolla.<br/><br/> No fue hasta el 2019 cuando decidi reenfocar mi carrera profesional a este apasionante mundo. De manera que comencé un largo proceso de preparación tanto para el área del cliente (Front-End) como en los servidores (Back-End) siendo capaz de asumir responsabilidades y tomar decisiones con solvencia.<br/><br/>
            Por otra parte me considero una persona versátil y capaz de simultanear varias tareas. Con amplia experiencia en entornos laborales en los que se valora el compromiso y la capacidad de trabajar en equipo. Me caracterizo por mi dinamismo, proactividad y entusiasmo.<br/><br/><br/>
            </p>
            <img src={programador} alt="Desarrollo fullstack" />
            
            <img  src={fronted} alt="Desarrollo fullstack" />
            <p>Transformo diseños en código usando HTML, CSS y JavaScript, y tengo experiencia en frameworks como React. Con capacidad para consumir Apis, he desarrollado aplicaciones web interactivas y responsivas. Siempre estoy en búsqueda de oportunidades para aprender y aplicar las últimas tendencias en tecnología, con el objetivo de crear interfaces intuitivas y modernas.<br/><br/><br/>
            </p>
            
            
            <p>También soy muy entusiasta por el que sucede del lado de los servidores y como estos manejan la información, consiguiendo desarrollar Apis bien documentadas y con buenas practicas para su fácil consumo, así como modelar bases de datos relacional o no relacionales, manejo de datos, autenticaciones entre otras áreas. 
            
           </p>
           <img  src={backend} alt="Desarrollo fullstack" />
          
          
          
        </div>
     
    </section>
  );
}