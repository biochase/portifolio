import emailjs from '@emailjs/browser';
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import { MdMarkEmailRead } from "react-icons/md";

import { useEffect, useRef, useState } from "react";
import Modal from './modal/Modal';

const Contact = () => {

  const[open, setOpen] = useState(false);
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
        {logo:<MdEmail color="#FFFFFF" size={sizeIcon}/>, text:'biochase@gmail.com'},
        {logo:<IoLogoWhatsapp color="#FFFFFF" size={sizeIcon}/>, text:'(11) 95387-2102'},
        {logo:<IoLocation color="#FFFFFF" size={sizeIcon}/>, text:'Sao Paulo, BRA'},
    ]

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const sendEmail = (e) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length === 0) {
        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, 
          import.meta.env.VITE_TEMPLATE_ID, 
          e.target, 
          import.meta.env.VITE_PRIVATE_KEY)
          .then(
            () => {
              setOpen(true);
                setTimeout(() => {
                  setOpen(false);
                }, 2000)
              setErrors({});
              setFormData({name:"", email:"", message:""})
            },
            (error) => {
              setErrors(validationErrors);
            },
          );
      };
    };

    const validateForm = (data) => {
      let errors = {};
      if (!data.name) {
        errors.name = "Nome é requerido! *";
      }
      if (!data.email.trim()) {
        errors.email = "Email é requerido! *";
      } else if (!isValidEmail(data.email)) {
        errors.email = "Email Inválido!";
      }
      return errors;
    };
  
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return(
        <section ref={ref} id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <div className='animate-cont-head'>
                    <h3 className="text-4xl font-semibold">Contacte-<span className="text-cyan-600">Me</span></h3>
                    <p className="text-gray-400 mt-3 text-lg">Entre em contato</p>
                </div>
                <div className="mt-4 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto shadow-2xl shadow-cyan-500/50 animate-contact">
                    <form  onSubmit={sendEmail} className="form-group flex flex-col flex-1 gap-5">
                        <input type="text" name='name' value={formData.name} placeholder="Seu nome" onChange={handleChange}/>
                          {errors.name && <span className="text-red-500 text-left absolute mt-11 indent-3">{errors.name}</span>}
                        <input type="email" name='email' value={formData.email} placeholder="Seu Email" onChange={handleChange} />
                          {errors.email && <span className="text-red-500 text-left absolute mt-28 indent-3">{errors.email}</span>}
                        <textarea name='message' value={formData.message} placeholder="Sua Menssagem" rows={10} onChange={handleChange}></textarea>
                        <button type="submit" className="btn-primary w-fit">Enviar Menssagem</button>
                        
                        <Modal open={open} onClose={()=> setOpen(false)} >
                          <div className='text-center w-56'>
                            <MdMarkEmailRead className='mx-auto' color="green" size={30}/>
                            <div className='mx-auto my-4 w-48'>
                              <h3 className='text-lg font-black text-gray-800'>Menssagem Enviada com Sucesso!</h3>
                            </div>
                          </div>
                        </Modal>
                    </form>
                    <div className="flex flex-col gap-7">
                        {
                            contact_info.map((contact, i) => (
                                <div key={i} className="flex gap-4 w-full items-center animate-cont-labels">
                                    <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                        <span>{contact.logo}</span>
                                    </div>
                                    <p className="text-base">{contact.text}</p>
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