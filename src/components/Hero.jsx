import hero from '../assets/img/user/user.jpg';
import TextChange from './TextChange';

import { useEffect, useRef, useState } from "react";

const Hero = () => {

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

    return(
        <section ref={ref} id="home" className='flex py-10 lg:flex-row flex-col items-center'>
            <div className='flex lg:px-40 sm:px:0 items-center justify-center h-full image animate-image'>
                <img src={hero}  alt="" className='lg:w-10/12 md:w-8/12 max-w-sm w-45 h-full md:mt-30 lg:mt-20 mt-18 object-cover' />
            </div>
            <div className='flex-1 mt-5'>
                <div className='lg:text-left text-center animate-text'>
                    <h1 className='lg:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold md:mt-15'>
                        <span className='text-cyan-600 lg:text-6xl text-4xl '>
                            Ola!
                            <br />
                        </span>
                        <TextChange />
                    </h1>
                    <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-cyan-600'>Desenvolvedor Full-Stack </h4>
                        <button className='btn-primary' onClick={() =>{window.location.href = '#contact'}} >Contacte Me</button>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;