import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    return(
        <div className="fixed bottom-5 sm: right-8 z-[999] cursor-pointer text-white text-4xl 
            bg-green-500 w-15 h-15 flex items-center justify-center rounded-full animate-bounce">
                <a href="https://api.whatsapp.com/send/?phone=5511953872102" target="_blank">
                    <FaWhatsapp color="#FFFFFF" size={35} />
                </a>
        </div>
    )
}
export default Whatsapp;
