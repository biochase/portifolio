import aboutImg from '../assets/img/impacto.jpg';

import { useEffect, useRef, useState } from "react";

const About = () => {

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

    const info = [
        {text:'Anos de Experiência', count:'16'},
        {text:'Projetos Completos', count:'30'},
        {text:'Trabalhos em Empresas', count:'10'}
    ]    

    return(
        <section ref={ref} id="about" className='py-10 text-white'>
            <div className='text-center mt-8'>
                <div className='animate-text'>
                    <h3 className='text-4xl font-semibold '>
                        Sobre <span className='text-cyan-600'>Mim</span>
                    </h3>
                    <p className='text-gray-400 my-3 text-lg'>Minha apresenta&ccedil;&atilde;o</p>
                </div>
                <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                    <div className='p-2'>
                        <div className='lg:mt-20 md:mt-0 text-gray-300 my-3 animate-about-text'>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                            Sou Graduado como Bacharel de Sistema de Informa&ccedil;&atilde;o desde 2007,
                            atuo com desenvolvimento Full Stack h&aacute; mais de 16 anos em diferentes areas,  
                            possuo uma vasta experi&ecirc;ncia com a linguagem Java e diversos Framework do mercado.
                            Hoje em dia trabalho por projetos e ofere&ccedil;o servi&ccedil;os de qualidade e com prazos definidos na cria&ccedil;&atilde;o de Websites ou Apps 
                            para as empresas que necessitam de solu&ccedil;&otilde;es para seus neg&oacute;cios.</p>
                            <div className='flex mt-10 items-center gap-7'>
                                {
                                    info.map(content => (
                                        <div key={content.text}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                            <span className='text-cyan-600'>+</span>{content.count}
                                                </h3>
                                            <span className='md:text-base text-xs'>{content.text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <br />
                            <br />
                            <a href="./src/assets/FABIO_2025.pdf" download>
                                <button className='btn-primary'>Download CV</button>
                            </a>
                            
                        </div>
                    </div>
                    <div className='flex-1 md:mt-0 mt-8 flex justify-center items-center'>
                        <div className='lg:w-86 h-full relative sm:w-10/12 w-8/12 max-w-sm aboutImg animate-about-image'>
                            <img src={aboutImg} alt="" className='object-cover rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;