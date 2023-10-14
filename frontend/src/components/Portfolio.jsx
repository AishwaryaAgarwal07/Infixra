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
                    <div className="flex justify-between mt-4  rounded-3xl px-2 gap-4 lg:justify-around">
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
        <div className=" relative flex flex-col justify-center items-center w-screen bg-white">
            <div className="bg-custom-name bg-cover mt-10 w-full  h-auto flex flex-row justify-center items-center  bg-no-repeat bg-center p-4 md:p-20    ">
                <div className=" flex flex-col w-full   justify-center items-center    mt-10  md:mt-0  ">
                    <div className=" p-5 flex flex-col sm:justify-start sm:items-start  gap-5 ">
                        <h1 className="  text-3xl md:text-5xl font-bold">OUR PORTFOLIO </h1>
                        <h1 className=" text-2xl md:text-3xl   leading-8  text-heroButton">BUILD UP AREA</h1>
                        <h1 className=" text-3xl    md:text-4xl   font-bold    text-heroButton" >10,000 SQ FT</h1>
                    </div>
                    <div className="flex  p-5 w-full justify-center  rounded text:xl md:text-2xl lg:text-3xl mt-24 md:mt-44 text-black cursor-pointer ">
                        <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
                        <p className="p-2 rounded hover:ml-3 flex items-center bg-heroButton ml-1">→</p>
                    </div>
                </div>
                    <img className="hidden sm:flex p-2  mt-52 h-[28rem]  sm:mt-24  lg:mt-14 sm:h-96 md:h-[28rem] lg:h-[34rem] lg:ml-48  " src={resHero} alt="Left House Image" />

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







