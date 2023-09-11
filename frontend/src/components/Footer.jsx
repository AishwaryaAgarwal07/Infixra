import React from 'react'
import { logo, insta, fb, tw, youtube, } from '../assets'
import { styles } from '../styles';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border h-96  bg-footerColor" >
            <div className=" flex  sm:flex-row h-full flex-col">

                <div className="basis-1/2 flex justify-center  ">
                    <div className="flex-col justify-center items-center ">
                        <img src={logo} alt='logo' className='w-64 h-52  object-contain' />
                        <div className="flex justify-center gap-2  h-fit mt-[-3rem]  ml-20 ">
                            <img src={insta} alt='insta' className='w-7 h-10 object-contain ' />
                            <img src={fb} alt='fb' className='w-7 h-10 object-contain' />
                            <img src={tw} alt='tw' className='w-7 h-10 object-contain' />
                            <img src={youtube} alt='youtube' className='w-7 h-10 object-contain' />
                        </div>
                    </div>
                </div>


                <div className=" basis-1/3 p-4 flex items-center justify-center  ">
                    <div className="flex flex-col items-center space-y-4">
                        <h4 className="text-2xl font-semibold">Useful Links</h4>
                        <nav className="flex flex-col space-y-4">
                            <NavLink to="/" className="text-white">
                                Home
                            </NavLink>
                            <NavLink to="/services" className="text-white">
                                Services
                            </NavLink>
                            <NavLink to="/portfolio" className="text-white">
                                Portfolio
                            </NavLink>
                            <NavLink to="/blog" className="text-white">
                                Blog
                            </NavLink>
                            <NavLink to="/aboutUs" className="text-white">
                                About Us
                            </NavLink>
                        </nav>
                    </div>
                </div>


                <div className="w-1/3 p-4  flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-semibold mb-4 mt-[-3rem]">Services</h4>
                    <nav className="flex flex-col items-center">
                        <NavLink
                            to="/"
                            className="text-white hover:text-blue-700 transition duration-300 mb-5"
                        >
                            Residential Construction
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="text-white hover:text-blue-700 transition duration-300 mb-5"
                        >
                            Commercial Construction
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="text-white hover:text-blue-700 transition duration-300 mb-5"
                        >
                            Industrial Construction
                        </NavLink>
                    </nav>
                </div>

                <div className="w-1/3 p-4 flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-semibold  mt-[-3rem] mb-5">Contact Us</h4>
                    <address className="text-center space-y-5">
                        <p>+91 95693 65769</p>
                        <p>abc11@gmail.com</p>
                        <p>Near Ashish Royal Tower, Bareilly</p>
                    </address>
                </div>
            </div>
        </footer >
    )
}

export default Footer