import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("HOME");
    const menuLinks=[
        {name: "HOME", link: "#home"}, 
        {name: "SOBRE", link: "#about"},
        {name: "SERVIÇOS", link: "#service"},
        {name: "HABILIDADES", link: "#skills"},
        // {name: "PROJETOS", link: "#projects"},
        {name: "CONTATO", link: "#contact"},
    ]

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            const nav = document.querySelector('nav');
            const sections = document.querySelectorAll('section');

            sections.forEach((sec, index) => {
                            let top = window.scrollY;
                            let offset = sec.offsetTop - 70;
                            let height = sec.offsetHeight;
                                        
                            if((top >= offset && top < offset + height)){
                               active ===  menuLinks[index].name ? "text-cyan-600" : "text-gray-900";
                               setActive(menuLinks[index].name);                                 
                            }
                        })
            window.scrollY > 0 ? setSticky(true): setSticky(false);
            
        })
    },[])    

    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'bg-white text-gray-900' :'text-white'}`}>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold">
                        C<span className="text-cyan-600">has</span>e
                    </h4>
                </div>
                <div className={`${sticky ? 'md:bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) =>(
                                <li key={i} className={`decorationlink ${active === menu.name ? "text-cyan-600" : "text-gray-900"}`}
                                onClick={() => setActive(menu.name)}>
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} 
                    className={`z-[999] text-3xl md:hidden m-5`}>
                        {!open ? (sticky ? <IoMenu color="#000"/>: <IoMenu color="#fff"/>) : <IoMenu color="#000"/>}
                </div>
                <div className={`md:hidde text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`} >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li onClick={()=>setOpen(false)} key = {i} className="px-6 hover:text-cyan-600">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;