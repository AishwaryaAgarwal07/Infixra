import React, { useState } from 'react'
import { resHero } from '../assets'
import Why from './why';
import { work } from "../constants";


const Card = ({ image, title, size, xyz }) => {


    return (
        <div className=" flex flex-col lg:flex-row mt-10 lg:h-[30rem] ">
            <div className=" w-full flex flex-wrap lg:w-2/3  h-80 lg:h-auto mx-auto  ">

                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full rounded-3xl rounded-b-none lg:rounded-3xl shadow-lg  object-cover "
                />

            </div>
            <div className='rounded-3xl rounded-t-none lg:rounded-3xl h-auto bg-white  lg:scale-105 w-full border outline-none shadow-lg p-5'>
                <div className='px-4'>
                    <h1 className="font-bold text-black text-5xl md:text-4xl ">{title}</h1>
                    <h1 className=" text-gray-600 text-2xl md:text-xl mt-3">Lorem Ipsum lorem ipsum, lore ipsum</h1>
                </div>
                <hr className="border border-gray-300 mt-5 w-[100%] " />
                <div className="flex justify-between mt-4 text-lg">
                    <h6 className="text-secondary text-xl sm:text-md">{size}</h6>
                    <h6 className="text-secondary text-xl  sm:text-md  ">{xyz}</h6>
                </div>
                <div className="flex justify-between mt-4 rounded-3xl px-3 w-5/6   border-gray-500 border-2 gap-4 ">
                    <h6 className="text-secondary text-lg sm:text-md">Nearby:</h6>
                    <h6 className="text-secondary text-lg sm:text-md  ">Abc metro station</h6>
                    <h6 className="text-secondary text-lg sm:text-md  ">ABC Complex</h6>
                    <h6 className="text-secondary text-lg sm:text-md  ">Abc Company</h6>
                </div>
                <div className="flex justify-between mt-4 w-4/5 rounded-3xl px-3 gap-4">
                    <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                    <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                    <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                    {/* <button className="hidden md:block bg-red-700  h-12 mt-20 ">BOOK YOURS</button> */}
                </div>
                <div className="flex justify-end">
                    <button className=" bg-red-700  h-12 mt-10 lg:mt-5">BOOK YOURS</button>
                </div>
            </div>
        </div>

    )
}



const Portfolio = () => {

    const [showAllCards, setShowAllCards] = useState(false);

    const toggleShowAllCards = () => {
        setShowAllCards(!showAllCards);
    };

    const visibleWorks = showAllCards ? work : work.slice(0, 2);
    return (
        <div className=" mt-10 relative bg-portfolio-bg">
            <div className="bg-custom-name   bg-cover mt-5 h-100  flex flex-row justify-between items-center bg-no-repeat bg-center ">
                <div className="flex flex-col p-20 md:p-0  md:mx-10 mx-auto  hs:p-16 ad:p-5 ad:pt-14 lg:p-20 lg:ml-20 ">
                    <div className="  mt-5 ad:mx-7 flex flex-col justify-center  items-center  ">
                        <h1 className="  text-7xl   md:text-[2rem] hs:text-[1.8rem] lg:text-5xl   lfont-bold">OUR PORTFOLIO </h1>
                        <h1 className= " text-4xl  md:text-2xl  lg:text-4xl   mt-8 leading-8  text-heroButton">BUILD UP AREA</h1>
                        <h1 className=" text-6xl  md:text-4xl  lg:text-5xl    font-bold mt-7   text-heroButton" >10,000 SQ FT</h1>
                    </div>
                    <div className="flex mx-32 rounded border md:justify-center  text-2xl mt-32 text-black cursor-pointer">
                        <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
                        <p className="p-2 rounded hover:ml-3 md:flex md:items-center  bg-heroButton ml-1">→</p>
                    </div>
                </div>
                <div className="w-1/4 sm:w-1/3  hidden md:block  md:mt-44 hs:mt-60 ad:mt-28  ">
                <img className=" lg:w-80 " src={resHero} alt="Left House Image" />
                </div>
            </div>

            <div className="  m-16 p-20  md:px-2 lg:px-16">
                {visibleWorks.map((works, index) => (
                    <Card key={`project-${index}`} index={index} {...works} />
                ))}
                <div className="mt-10 flex justify-center  ">
                    {!showAllCards && (
                        <button
                            className="bg-red-700 h-12 mt-4 "
                            onClick={toggleShowAllCards}
                        >
                            View More
                        </button>
                    )}
                    {showAllCards && (
                        <button
                            className="bg-red-700 h-12 mt-4 "
                            onClick={toggleShowAllCards}
                        >
                            View less
                        </button>
                    )}
                </div>

            </div>

            <Why />

        </div>
    )
}

export default Portfolio







