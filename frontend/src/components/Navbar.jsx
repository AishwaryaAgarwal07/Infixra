import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo, menu, close, user, service } from '../assets'

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <nav
                className="
                sm:px-16 px-6
                w-full 
                flex 
                items-center 
                fixed 
                top-0 
                z-20 
                bg-navColor
                "

            //may use in future!
            // style={{border: '1px solid white'}}
            >
                <div className=' w-full h-16 flex justify-between items-center max-w-8xl mx-auto'>
                    <Link
                        to='/'
                        className='flex items-center'
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={logo} alt='logo' className='w-15 h-10 object-contain' />
                        {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Infixra
                    </p> */}
                    </Link>
                    <ul className='list-none hidden ad:flex flex-row  items-center gap-10 h-14 '
                    // style={{border: '1px solid'}} 
                    >
                        {navLinks.map((nav) => (
                            <li
                                key={nav.link}
                                className={`${active === nav.title ? "bg-hover " : "text-black"
                                    }  hover:bg-hover text-[18px]  font-medium  flex items-center  h-full  cursor-pointer `}
                                // style={{border: '1px solid' , width: '5rem' }} 
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={`${nav.link}`} className="text-white  hover:text-white" >{nav.title}</Link>
                            </li>
                        ))}

                        <li
                            key="services"
                            // style={{border: '1px solid' , width: '5rem' }} 
                            onClick={() => setActive(service)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div
                                className={`${active === service ? "bg-hover " : "text-black"
                                    }  hover:bg-hover text-[18px]  font-medium  flex items-center  h-14  cursor-pointer text-white  hover:text-white `}

                            >
                                Services
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-0 bg-white border border-gray-300 w-auto p-1 rounded-lg shadow-lg">
                                    {/* Dropdown content goes here */}
                                    <Link to="/cc" class="block px-4 py-2 hover:bg-hover dark:hover:text-white">COMMERCIAL CONSTRUCTION</Link>
                                    <Link to="/rc" class="block px-4 py-2 hover:bg-hover dark:hover:text-white">RESIDENTIAL CONSTRUCTION</Link>
                                    <Link to="/ic" class="block px-4 py-2 hover:bg-hover dark:hover:text-white">INDUSTRIAL CONSTRUCTION</Link>
                                </div>
                            )}


                        </li>


                        <img src={user} alt='user' className='w-8 h-8  sm:w-6 sm:h-6' />
                    </ul>

                    {/* small screen */}
                    <div className='ad:hidden flex flex-1 justify-end items-center'>
                        <img
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain'
                            onClick={() => setToggle(!toggle)}
                        />
                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 bg-black absolute top-16 right-0 mx-1  my-1 min-w-[140px] z-10 rounded-xl`
                            }
                        // style={{border: '1px solid'}} 
                        >
                            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                                {navLinks.map((nav) => (
                                    <li
                                        key={nav.link}
                                        className={`  hover:bg-hover font-poppins font-medium flex items-center w-full cursor-pointer text-[16px] ${active === nav.title ? "bg-hover" : "text-black"
                                            }`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}
                                    >
                                        <Link className="text-white  hover:text-white" to={`${nav.link}`}>{nav.title}</Link>
                                    </li>
                                ))}


                                <li
                                    key="services"
                                    // style={{border: '1px solid' , width: '5rem' }} 
                                    onClick={() => setActive(service)}

                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`  hover:bg-hover font-poppins font-medium flex items-center w-full cursor-pointer text-[16px] ${active === service ? "bg-hover" : "text-black"
                                        } text-white  hover:text-white `}>
                                        Services
                                    </div>
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-1 bg-black  border w-auto p-1 rounded-lg shadow-lg ">
                                            {/* Dropdown content goes here */}
                                            <Link to="/cc" className="block px-4 py-2 hover:bg-hover  dark:hover:text-white  text-white  hover:text-white ">COMMERCIAL CONSTRUCTION</Link>
                                            <Link to="/rc" className="block px-4 py-2 hover:bg-hover dark:hover:text-white  text-white  hover:text-white ">RESIDENTIAL CONSTRUCTION</Link>
                                            <Link to="/ic" className="block px-4 py-2 hover:bg-hover dark:hover:text-white  text-white  hover:text-white ">INDUSTRIAL CONSTRUCTION</Link>
                                        </div>
                                    )}


                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar