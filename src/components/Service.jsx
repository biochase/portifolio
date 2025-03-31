import { FaMobileAlt } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { HiMiniCodeBracket } from "react-icons/hi2";

import { useEffect, useRef, useState } from "react";

const Service = () => {

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

    const sizeIcon = 50;
    const cardList = [
        {
            icon: <HiMiniCodeBracket color="#00BFFF" size={sizeIcon}/>,
            title: "Web Development",
            description: "Os serviços de desenvolvimento web abrangem a criação e manutenção de sites e aplicações web, desde a concepção inicial até a implementação e otimização, incluindo design, programação, e otimização para a web."
        },
        {
            icon: <PiBracketsCurlyBold color="#00BFFF" size={sizeIcon} /> ,
            title: "Back-End Development",
            description: "Serviços de desenvolvimento back-end abrangem a criação e manutenção da parte 'bastidores' de aplicações web e móveis, incluindo a lógica do servidor, bancos de dados, APIs e infraestrutura."
        },
        {
            icon: <FaMobileAlt color="#00BFFF" size={sizeIcon} /> ,
            title: "Mobile Development",
            description: "Serviços de desenvolvimento mobile referem-se à criação de aplicações para dispositivos móveis, como smartphones e tablets, abrangendo desde a concepção e design da interface até o desenvolvimento, teste e lançamento nas lojas de aplicativos."
        },        
    ]
    
    return (
        <section ref={ref} id="service" className='min-h-screen py-15  text-white text-center'>
            <div className="animate-text">
                <h3 className="mt-8 text-4xl font-semibold">Meu <span className="text-cyan-600">Servi&ccedil;o</span> </h3>                 
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
            {
                cardList.map((card, id) =>(
                    <div key={id} className="flex flex-col cursor-pointer bg-gray-800 justify-center py-6 px-10 text-center 
                    items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full
                    card-item-div max-w-screen-md min-h-[260px] animate-service-card shadow-cyan-500/50">
                        <div className="w-[75px] mb-4">{card.icon}</div>
                        <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
                        <p className="text-[15px] font-medium leading-7 w-full text-justify indent-8">{card.description}</p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default Service;