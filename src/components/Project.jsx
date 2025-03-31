import project1 from '../assets/img/project-1.jpg';
import project2 from '../assets/img/project-2.jpg';
import project3 from '../assets/img/project-3.jpg';
import project4 from '../assets/img/projects/cad_funcionario.png';

import { useEffect, useRef, useState } from "react";

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaAngular, FaBootstrap, FaJava, FaDocker, 
    FaAws, FaGithub, FaJenkins, FaPython } from 'react-icons/fa';
import { SiMongodb, SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiTailwindcss, SiJquery,
        SiOracle, SiKubernetes, SiSwagger, SiApachemaven, SiRedhatopenshift, SiHibernate } from 'react-icons/si'

const Project = () =>{

    const iconSize = 30;

    const projects = [
        {
            img: project1, 
            title:'Movie', 
            description:"Responsive HTML/CSS layout for online movie. HTML5, CSS3 (SCSS)" , 
            github_link:'', 
            live_link:'',
            types: [
                {icon:<FaAngular color="#FF0014" size={iconSize} />},
                {icon:<FaCss3 color="#1572b6" size={iconSize}/>},
                {icon:<FaBootstrap color="#8470FF" size={iconSize} />}
            ]
        },
        {
            img: project2, 
            title:'E-commerce', 
            description:"Responsive HTML/CSS layout for online e-commerce. HTML5, CSS3 (SCSS)", 
            github_link:'', 
            live_link:'',
            types: [
                {icon:<FaReact color="#61DAFB" size={iconSize} />},
                {icon:<FaCss3 color="#1572b6" size={iconSize}/>},
                {icon:<SiTailwindcss color="#00BFFF" size={iconSize} />},
            ]
        },
        {
            img: project3, 
            title:'Hotel', 
            description:"Responsive HTML/CSS layout for online hotel. HTML5, CSS3 (SCSS)", 
            github_link:'', 
            live_link:'',
            types: [
                {icon:<FaHtml5 color="#E34F26" size={iconSize} />},
                {icon: <FaJs color="#F7DF1E" size={iconSize} />},
                {icon:<FaCss3 color="#1572b6" size={iconSize}/>},
            ]
        },
        {
            img: project4, 
            title:'Aplicacao Funcionario', 
            description:"Responsive HTML/CSS layout for online hospital. HTML5, CSS3 (SCSS)", 
            github_link:'', 
            live_link:'',
            types: [
                {icon:<FaReact color="#61DAFB" size={iconSize} />},                
                {icon:<FaCss3 color="#1572b6" size={iconSize}/>},
                {icon:<FaBootstrap color="#8470FF" size={iconSize} />},                
            ]
        },
        
    ]

    const [isIntersecting, setIsIntersecting] = useState(false);
    
    const ref = useRef(null);
      
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-300px" }
        );
        
        observer.observe(ref.current);        
      
        return () => observer.disconnect();
      }, [isIntersecting]);
    
      useEffect(() => {
        if (isIntersecting) {
          ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("slide-in");
          });
        } else {
          ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.remove("slide-in");
          });
        }
      }, [isIntersecting]);

    return (
        <section ref={ref} id="projects" className="min-h-screen py-10 text-white">
            <div className="mt-8 text-center animate-about-text">
                <h3 className="text-4xl font-semibold">
                    Meus <span className="text-cyan-600">Projetos</span>
                </h3>               
            </div>
                    
            <div className="p-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    projects.map((project, i) => (
                        <div key={i} className="border rounded bg-white relative animate-project">                        
                            <div className="w-full h-50">
                                <img src={project.img} alt="" className="rounded object-fill w-full h-full"/>
                            </div>                            
                             <div className="px-3 py-2 flex justify-between">
                                 <h3 className="pt-1 text-2xl font-bold text-cyan-800">{project.title}</h3>
                                 <div className='flex gap-2 mb-2'>
                                    {project.types.map((type, i)=>(
                                        <div key={i} className='w-10 h-10 flex items-center justify-center'>
                                            <span >{type.icon}</span>
                                        </div>
                                    ))}
                                </div>                                
                             </div>                            

                         </div>
                    ))
                }
            </div>
                       
        </section>
    )
}

export default Project;