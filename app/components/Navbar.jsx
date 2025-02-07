import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useRef } from 'react';

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)' 
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)' 
    }

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>
            <nav className="w-full fixed px-5 lg:px-6 xl:px-[8%] py-4 flex items-center justify-between z-50">
                {/* logo  */}
                <a href="#top">
                    <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
                </a>

                {/* middle part  */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                    <li>
                        <a className="font-Ovo font-semibold" href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" href="#work">
                            My Work
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" href="#contact">
                            Contact me
                        </a>
                    </li>
                </ul>

                {/* end part  */}
                <div className="flex items-center gap-4">
                    {/* day & night mode btn */}
                    <button>
                        <Image src={assets.moon_icon} alt="" className="w-6" />
                    </button>

                    {/* contact btn  */}
                    <a href="#contact" className="hidden lg:flex  font-Ovo justify-between items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-semibold">
                        Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
                    </a>

                    {/* mobile menu bar */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className="w-6" />
                    </button>
                </div>

                {/* mobile menu  */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
                    {/* close modal btn */}
                    <div className="absolute right-6 top-6 bg-rose-50 p-2 rounded shadow-sm" onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
                    </div>

                    <li>
                        <a className="font-Ovo font-semibold" href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" onClick={closeMenu} href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" onClick={closeMenu} href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" onClick={closeMenu} href="#work">
                            My Work
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo font-semibold" onClick={closeMenu} href="#contact">
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
