import { useState } from "react";
import { projects } from "../data/projects";
import React from "react";
import { FaGithub,FaDemocrat } from "react-icons/fa";


const Projects = () => {
  const [cards]=useState(projects);
    return (
    <>
    <section className="project">
      <div className="">
          <h1 className=""> IZME TECH Projects</h1>  
      </div>
      <div className="cards">
     
        {cards.map(({id, title, desc,github,img,demo})=>(
          <article key={id}>
            <div className="border">
              <div className="image">
                <img src={img} alt={title}/>
              </div>
              <h4>{title}</h4>
              <p>{desc}</p>
              <ul>
                <li>
                  <a className="github" href={github}><FaGithub style={{marginRight:5}} />Github</a>
                </li>
                <li>
                  <a className="demo" href={demo}>< FaDemocrat style={{marginRight:5}} />Demo</a>
                </li>
              </ul>
            </div>
          </article>
        )) }
        </div>
     
    </section>
      </>
    )
  };
  
  export default Projects;
  
