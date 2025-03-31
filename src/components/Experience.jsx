import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaAngular, FaBootstrap, FaJava, FaDocker, 
    FaAws, FaGithub, FaJenkins, FaPython } from 'react-icons/fa';
import { SiMongodb, SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiTailwindcss, SiJquery,
        SiOracle, SiKubernetes, SiSwagger, SiApachemaven, SiRedhatopenshift, SiHibernate, SiApachekafka } from 'react-icons/si'
import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

import { useEffect, useRef, useState } from "react";

const Experience = () => {

  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
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

    const sizeIcon = 50;
    const skills = [
        {icon: <FaHtml5 color="#E34F26" size={sizeIcon} />, title:"HTML"},
        {icon: <FaCss3 color="#1572b6" size={sizeIcon} />, title:"CSS"},
        {icon: <FaBootstrap color="#8470FF" size={sizeIcon} />, title:"BootStrap"},
        {icon: <SiTailwindcss color="#00BFFF" size={sizeIcon} />, title:"TailWind CSS"},
        {icon: <SiJquery  color="#00BFFF" size={sizeIcon} />, title:"JQuery"},
        {icon: <FaReact color="#61DAFB" size={sizeIcon} />, title:"React"},
        {icon: <FaAngular color="#FF0014" size={sizeIcon} />, title:"Angular"},
        {icon: <FaJs color="#F7DF1E" size={sizeIcon} />, title:"JavaScript"},
        {icon: <BiLogoTypescript color="#0092FF" size={sizeIcon} />, title:"TypeScript"},
        {icon: <FaFigma color="#F24E1E" size={sizeIcon} />, title:"Figma"},
        {icon: <SiMongodb color="#47A248" size={sizeIcon} />, title:"MongoDB"},
        {icon: <SiOracle color="#FF0000" size={sizeIcon} />, title:"Oracle"},
        {icon: <SiMysql color="#61DAFB" size={sizeIcon} />, title:"MySQL"},
        {icon: <FaJava color="#FFF" size={sizeIcon} />, title:"Java"},
        {icon: <SiSpring color="#47A248" size={sizeIcon} />, title:"Spring"},
        {icon: <SiSpringboot color="#47A248" size={sizeIcon} />, title:"Spring Boot"},
        {icon: <SiSpringsecurity color="#47A248" size={sizeIcon} />, title:"Spring Security"},
        {icon: <SiHibernate color="#BDB76B" size={sizeIcon} />, title:"Hibernate"},
        {icon: <DiRedis color="#FF0000" size={sizeIcon} />, title:"Redis"},
        {icon: <SiApachemaven  color="#FFF" size={sizeIcon} />, title:"Maven"},
        {icon: <FaPython color="#FFFF00" size={sizeIcon} />, title:"Python"},
        {icon: <FaDocker color="#00BFFF" size={sizeIcon} />, title:"Docker"},
        {icon: <SiKubernetes color="#1E90FF" size={sizeIcon} />, title:"Kubernete"},
        {icon: <FaAws color="#FFA500" size={sizeIcon} />, title:"Aws"},
        {icon: <SiSwagger color="#9ACD32" size={sizeIcon} />, title:"Swagger"},
        {icon: <FaGithub color="#FFF" size={sizeIcon} />, title:"Github"},
        {icon: <FaJenkins  color="#FFF" size={sizeIcon} />, title:"Jenkins"},
        {icon: <SiRedhatopenshift  color="#FF0000" size={sizeIcon} />, title:"OpenShift"},
        {icon: <SiApachekafka  color="#FFFFFF" size={sizeIcon} />, title:"Apache Kafka"},
    ]

    return(
        <section ref={ref} id="skills" className="py-10">
             <div className="mt-8 text-gray-100 text-center">
                <div className='animate-text'>
                    <h3 className="text-4xl font-semibold">Minhas <span className="text-cyan-600">Habilidades</span> </h3>
                    <p className="text-gray-400 mt-3 text-lg">Meus Conhecimentos</p>
                </div>
                <div className="flex items-center justify-center mt-5 gap-8 flex-wrap animate-skill">
                    {
                        skills.map((skill, i)=>(
                            <div key={i} className="border-2 group border-cyan-600 relative min-w-[6rem] max-w-[12rem] max-h-[12rem] bg-gray-900 p-3 rounded-2xl shadow-[8px_9px_16px_-2px_rgba(33,_160,_202,_0.65)]">
                                <div className="w-26 h-16 flex items-center justify-center rounded-full">
                                    <span className="text-xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                                        {skill.icon}                                
                                    </span>
                                </div>
                                <p className="leading-3 mt-2 text-center">{skill.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience;