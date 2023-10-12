import React, { useState } from 'react'
import { resHero } from '../assets'
import Why from './why';
import { work } from "../constants";


const Card = ({ image, title, size, xyz }) => {


    return (
        <div className=" w-screen flex flex-col  mt-5 lg:h-[30rem] p-5 sm:p-16 md:p-16  ">
            <div className=" lg:flex w-full " >
                <div className="  flex flex-wrap lg:w-1/2  mx-auto  ">
                    <img
                        src={image}
                        alt="project_image"
                        className="  rounded-3xl rounded-b-none w-full lg:rounded-3xl shadow-lg  object-cover "
                    />
                </div>
                <div className='rounded-3xl rounded-t-none w-full lg:rounded-3xl h-auto bg-white  lg:scale-105  border outline-none shadow-lg p-4 '>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-black text-3xl md:text-4xl ">{title}</h1>
                        <h1 className=" text-gray-600 text-xl md:text-xl mt-3">Lorem Ipsum lorem ipsum, lore ipsum</h1>
                    </div>
                    <hr className="border border-gray-300 mt-5  " />
                    <div className="flex justify-between mt-4 text-lg">
                        <h6 className="text-secondary text-lg sm:text-md">{size}</h6>
                        <h6 className="text-secondary text-lg  sm:text-md  ">{xyz}</h6>
                    </div>
                    <div className="flex justify-between mt-4 rounded-3xl p-2 border-gray-500 border-2  ">
                        <h6 className="text-secondary text-xs sm:text-md">Nearby:</h6>
                        <h6 className="text-secondary text-xs sm:text-md  ">Abc metro station</h6>
                        <h6 className="text-secondary text-xs sm:text-md  ">ABC Complex</h6>
                        <h6 className="text-secondary text-xs sm:text-md  ">Abc Company</h6>
                    </div>
                    <div className="flex justify-between mt-4  rounded-3xl px-2 gap-4">
                        <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                        <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                        <div className=" mt-4 rounded-3xl px-3 w-52  md:w-40 h-32  border-gray-500 border-2 "></div>
                        {/* <button className="hidden md:block bg-red-700  h-12 mt-20 ">BOOK YOURS</button> */}
                    </div>
                    <div className="flex justify-end ">
                        <button className=" bg-red-700  h-12 mt-10 lg:mt-5">BOOK YOURS</button>
                    </div>
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
        <div className=" mt-10 relative bg-portfolio-bg bg-cover w-screen  ">
            <div className="bg-custom-name  bg-cover  h-100 md:h-[110vh]  md:flex lg:justify-center  md:items-center  bg-no-repeat bg-center  ">
                <div className="flex flex-col justify-center  items-center mt-16  md:mx-10 mx-auto   lg:p-16  ">
                    <div className=" w-full mt-24 md:mt-16 ad:mx-7  flex flex-col justify-center items-center   ">
                        <h1 className="  text-4xl sm:text-5xl  md:text-5xl   font-bold">OUR PORTFOLIO </h1>
                        <h1 className=" text-2xl    md:text-3xl  mt-8 leading-8  text-heroButton">BUILD UP AREA</h1>
                        <h1 className=" text-3xl    md:text-4xl   font-bold mt-7   text-heroButton" >10,000 SQ FT</h1>
                    </div>
                    <div className="flex gap-3 rounded  md:justify-center p-2  text-2xl sm:text-3xl   mt-32 text-black cursor-pointer">
                        <p className=" rounded bg-heroButton sm:p-2 ">Book a free consultation</p>
                        <p className="rounded hover:ml-3 flex justify-center items-center sm:p-2 bg-heroButton ">→</p>
                    </div>
                </div>
                <div className="  hidden md:flex md:w-1/3 md:mt-40 md:ml-20 lg:mt-20 lg:ml-0 lg:justify-end   ">
                    <img className="  md:w-72 lg:w-80" src={resHero} alt="Left House Image" />
                </div>
            </div>

            <div className=" space-y-12  ">
                {visibleWorks.map((works, index) => (
                    <Card key={`project-${index}`} index={index} {...works} />
                ))}
                <div className="mt-10 flex justify-center ">
                    {!showAllCards && (
                        <button
                            className="bg-red-700 h-12 m-6 lg:m-16  "
                            onClick={toggleShowAllCards}
                        >
                            View More
                        </button>
                    )}
                    {showAllCards && (
                        <button
                            className="bg-red-700 h-12 m-6 lg:m-16 "
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







