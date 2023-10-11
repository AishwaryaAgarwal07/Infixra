import React from 'react'
import { logo, insta, fb, lin, youtube, } from '../assets'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="  bg-footerColor w-screen lg:w-[99%]  ">
            <div className="container mx-auto py-8 flex flex-col sm:flex-row space-y-4">

                <div className="w-full sm:w-1/2 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center space-y-2 sm:space-y-0">
                        <img src={logo} alt='logo' className='w-52 h-36 object-contain' />
                        <div className="flex justify-center space-x-4 mt-2">
                            <img
                                src={insta}
                                alt="insta"
                                className="w-7 h-7 object-contain hover:w-5 transition ease-in duration-300 "
                            />
                            <img
                                src={fb}
                                alt="fb"
                                className="w-7 h-7 object-contain hover:w-5 transition ease-in duration-300 "
                            />
                            <img
                                src={lin}
                                alt="lin"
                                className="w-7 h-7 object-contain hover:w-5 transition ease-in duration-300 "
                            />
                            <img
                                src={youtube}
                                alt="youtube"
                                className="w-7 h-7 object-contain hover:w-5 transition ease-in duration-300 "
                            />
                        </div>


                    </div>
                </div>

                <div className="w-full sm:w-1/4 p-4 flex flex-col items-center space-y-2 justify-center">

                    <h4 className="text-lg font-semibold">Useful Links</h4>
                    <div className="flex flex-col space-y-2">
                        <NavLink to="/" className="text-white">
                            Home
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
                    </div>
                </div>

                <div className="w-full sm:w-1/4 p-4 flex flex-col justify-center items-center space-y-2 ">
                    <h4 className="text-lg font-semibold">Services</h4>
                    <nav className="flex flex-col items-center space-y-4">
                        <NavLink
                            to="/rc"
                            className="text-white hover:text-blue-700 transition duration-300"
                        >
                            Residential Construction
                        </NavLink>
                        <NavLink
                            to="/cc"
                            className="text-white hover:text-blue-700 transition duration-300"
                        >
                            Commercial Construction
                        </NavLink>
                        <NavLink
                            to="/ic"
                            className="text-white hover:text-blue-700 transition duration-300"
                        >
                            Industrial Construction
                        </NavLink>
                    </nav>
                </div>

                <div className="w-full sm:w-1/4 p-4 flex flex-col justify-center items-center space-y-4">
                    <h4 className="text-lg font-semibold  mb-2">Contact Us</h4>
                    <address className="text-center space-y-4">
                        <p className="text-white">+917408252302</p>
                        <p className="text-white">Infixra@gmail.com</p>
                        <p className="text-white">Near Ashish Royal Tower, Bareilly</p>
                    </address>
                </div>
            </div>

            <div className="border-t-2 mx-auto flex  sm:flex-row justify-between w-full sm:w-5/6 py-4">
                <h6 className="text-xs mx-4 sm:mx-9 text-white sm:text-left">
                    © 2023 INFIXRA
                </h6>
                <div className="flex flex-row gap-4 sm:gap-11 mx-4 sm:mx-9">
                    <Link to="/privacy" className="text-white text-xs sm:text-left">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="text-white text-xs sm:text-left">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>

    )
}

export default Footer