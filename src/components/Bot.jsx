import { IoHome } from "react-icons/io5";

const Bot = () => {
    return(
        <div className="fixed bottom-5 sm: right-8 right-4 z-[999] cursor-pointer text-white text-4xl 
            bg-cyan-600 w-15 h-15 flex items-center justify-center rounded-full animate-bounce">
                <a href="#home">
                    <IoHome color="#FFFFFF" size={30} />
                </a>
        </div>
    )
}
export default Bot;
