import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./assets/components/Header";
import {Footer } from "./assets/components/Footer"
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import {Contacto} from "./pages/Contact";
import {Skill} from "./pages/Skill"
import {Error404} from "./pages/NoPage" 
import {Proyecto} from "./pages/project";

function App() {
  return (
    
  <div className="container">
    <BrowserRouter basename="/">
      <Header/>  
      <main>
      <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="skill" element={<Skill />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
        
          </Routes>
          
      </main>
    
    </BrowserRouter>
    
    <Footer/>

  </div>
 
  );
}

export default App;
