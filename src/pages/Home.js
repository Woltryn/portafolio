import React from 'react'
import pg from "../assets/img/fondo-home.jpeg"

export function Home() {
  return (
    <section className='section_home'>
        <div className='contenedor_home'>
            <article className='text'>
                <h2>José Jiménez, <br /> creativo y dedicado... <br /> <span>Desarrollador FullStack </span> </h2>
            </article>
            <article className='image'>
                <img className="pulse"src={pg} alt='José Jiménez'/>
            </article>
        </div>
    </section>
  )
}
