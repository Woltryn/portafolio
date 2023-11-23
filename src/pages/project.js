import React from "react";
import galeria from "../assets/img/galeria.png"

export function Proyecto(){

  return (
    <section className="section_proyectos">
      <h2 className="title_section">Mis proyectos</h2>
      <div className="section_container contenedor_proyectos">
        <div className="contenedor1">
          <a href="https://www.infoempresa.com/es-es/es/empresa/ds-healthcare-iberia-sl" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1407320574/gotcpyh8fzjitu2qyomg.png" alt="ds-healthcare" />
              <div className="text">
                <p><b>DS HEALTHCARE</b> (2023)</p>
                <p>Desarrollé sliders, secciones, formularios, entre otras áreas.</p>
              </div>
            </article>
          </a>
          <a href="https://robata.es/robata-madrid/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://www.delirium.es/wp-content/uploads/2022/07/Logo_Robata-uai-258x145.jpg" alt="robata" />
              <div className="text">
                <p><b>Robata</b> (2022)</p>
                <p>Desarrollador frontend en equipo web. Usando (HTML, CSS, JS), colaboré con desarrolladores backend. Optimicé rendimiento y experiencia del usuario.</p>
              </div>
            </article>
          </a>
          <a href="https://exporab.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/expoRab/logo.jpg" alt="Expo Rab" />
              <div className="text">
                <p><b>Expo Rab</b> (2022)</p>
                <p>Experiencia como desarrollador frontend en equipo web. usando el framework Laravel para enlazar frontend y backend. Codificación con HTML, Bootstrap, CSS, JS. Colaboración con desarrolladores y backend.</p>
              </div>
            </article>
          </a>
          <a href="https://github.com/Woltryn/galeria-practica" target="_blank" rel="noopener noreferrer">
            <article>
              <img src={galeria} alt="Galería" />
              <div className="text">
                <p><b>Galería</b> (2021)</p>
                <p>Practica de galería de fotos con diseño responsivo usando HTML,CSS,SASS y Bootstrap.</p>
              </div>
            </article>
          </a>
          
          
        </div>
      </div>
    </section>
  );
}
