import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return (
        <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-xl font-bold text-[white]">Dinamiza</h1>
            <ul className="hidden md:flex">
                <li className=" p-4">Inicio</li>
                <li className=" p-4">Convocatorias Generales</li>
                <li className=" p-4">Convocatorias Fondo Solidario y de Oportinidades</li>
                <li className=" p-4">Convocatorias Sistema Desarrollo Empresarial</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-xl font-bold text-[white] m-4">Dinamiza</h1>        
                    <ul className="uppercase p-4">
                        <li className=" p-4 border-b border-white">Inicio</li>
                        <li className=" p-4 border-b border-white">Convocatorias Generales</li>
                        <li className=" p-4 border-b border-white">Convocatorias Fondo Solidario y de Oportinidades</li>
                        <li className=" p-4 border-b border-white">Convocatorias Sistema Desarrollo Empresarial</li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar