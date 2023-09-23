import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, user } from '../assets'

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav
                className={
                    `${styles.paddingX}
                w-full 
                flex 
                items-center 
                fixed 
                top-0 
                z-20 
                bg-navColor`
                }

            //may use in future!
            // style={{border: '1px solid white'}}
            >
                <div className=' w-full flex justify-between items-center max-w-8xl mx-auto'>
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
                    <ul className='list-none hidden sm:flex flex-row  items-center gap-10 h-20'
                    // style={{border: '1px solid'}} 
                    >
                        {navLinks.map((nav) => (
                            <li
                                key={nav.link}
                                className={`${active === nav.title ? "bg-hover " : "text-black"
                                    }  hover:bg-hover text-[18px] font-medium  flex items-center h-full  cursor-pointer `}
                                // style={{border: '1px solid', display: 'flex',alignItems: 'center', height: '4.9rem'}} 
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={`${nav.link}`} className="text-white  hover:text-white" >{nav.title}</Link>
                            </li>
                        ))}
                        <img src={user} alt='user' className='w-8 h-8 ' />
                    </ul>

                    {/* small screen */}
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img
                            src={toggle ? close : menu}
                            alt='menu'
                            className='w-[28px] h-[28px] object-contain'
                            onClick={() => setToggle(!toggle)}
                        />
                        <div
                            className={`${!toggle ? "hidden" : "flex"
                                } p-6 purple-gradient absolute top-20 right-0 mx-1  my-1 min-w-[140px] z-10 rounded-xl`
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
                                        <Link className="text-white  hover:text-white" to={`#${nav.link}`}>{nav.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar