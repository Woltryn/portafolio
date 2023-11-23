import { Link } from "react-router-dom";
  
import logo from "../img/logo.jpg"

export function Header() {

  return (
    <header className="header"> 
      <div className="loading">
       <img src={logo} alt="logo"></img>
      </div>
      <nav className="menu_header">
        <Link to="/">Inicio</Link>
        <Link to="/Blogs">Acerca de mi</Link>
        <Link to="/Proyecto">Proyectos</Link>
        <Link to="/Skill">Habilidades</Link>
        <Link to="/Contacto">Contacto</Link>
        
      </nav> 
      <div className="social_media">
        <a href="https://www.instagram.com/josstry_n/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://github.com/Woltryn" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/jose-jimenez-04a0aa22a/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        
        
        <a href="https://drive.google.com/file/d/1svxmaXcHukTy1PaFApZOhY1bj-foblt3/view?usp=sharing" target="_black" rel="noopener noreferrer">
          
          <button className="cv_boton">Descargar CV
          </button> 
        </a>
      </div>
    </header>
  );
}
