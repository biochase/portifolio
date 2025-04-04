import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import { useEffect, useRef, useState } from "react";

const Contact = () => {

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

    const sizeIcon = 30;
    const contact_info = [
        {id:"email" ,logo:<MdEmail color="#FFFFFF" size={sizeIcon}/>, text:'biochase@gmail.com'},
        {id:"phone" ,logo:<a href="https://api.whatsapp.com/send/?phone=5511953872102" target="_blank">
          <IoLogoWhatsapp color="#FFFFFF" size={sizeIcon}/></a>, text:'(11) 95387-2102'},
        {id:"location" ,logo:<IoLocation color="#FFFFFF" size={sizeIcon}/>, text:'Sao Paulo, BRA'},
    ]

    useEffect(() => {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.addEventListener("click", () => {
          const targetEmail = ref.current.querySelector("#email>p").textContent;
          navigator.clipboard.writeText(targetEmail)
          .then(() =>{
            el.classList.add("active");
            setTimeout(() =>{
              el.classList.remove("active")
            },2000)
          });          
        })
      });
    })

    return(
        <section ref={ref} id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <div className='animate-cont-head'>
                    <h3 className="text-4xl font-semibold">Contacte-<span className="text-cyan-600">Me</span></h3>
                    <p className="text-gray-400 mt-3 text-lg">Entre em contato</p>
                </div>
                <div className="mt-4 flex max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto shadow-2xl shadow-cyan-500/50 animate-contact">
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-7 justify-between w-full">
                      {
                          contact_info.map((contact, i) => (
                              <div key={i} id={contact.id} className="flex flex-col gap-4 w-full items-center animate-cont-labels">
                                  <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                      <span>{contact.logo}</span>
                                  </div>
                                  <p className="text-center">{contact.text}</p>
                              </div>
                          ))
                      }
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;