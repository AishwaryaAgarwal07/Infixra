import React from 'react'
import { cHero } from '../../assets'
import Projects from '../Projects';
import Why from '../why';
import { IndustrialCons } from "../../constants"



const Card = ({
    image,
    title,
}) => {
    return (
        <div className="  border border-black  shadow-lg   shadow-gray-700 flex flex-col relative w-full hover:scale-110 transition-all duration-500 sm:w-[20rem]  sm:h-[25rem] md:h-[20rem]  ">
            <img
                src={image}
                alt='project_image'
                className='w-full object-cover  '
            />
            <h1 className='text-secondary font-bold  p-2 font-mono m-auto text-[1.6rem] sm:text-[1.7rem]'>{title}</h1>
        </div>

    )
}




const Industrial = () => {
    return (
        <div className=" relative flex flex-col justify-center items-center w-screen bg-white">
            <div className="bg-custom-name bg-cover mt-10  h-auto flex flex-row justify-center items-center  bg-no-repeat bg-center p-4 md:p-10   ">
                <div className=" flex flex-col w-full   justify-center items-center mt-10  ">
                    <div className=" p-5 flex flex-col justify-center ">
                        <h1 className="text-4xl font-bold">Industrial Constructions </h1>
                        <p className="text-xl mt-8  text-justify text-serviceHeading">Industrial construction involves building structures for Industrial purposes, with a focus on functionality, efficiency, and meeting the needs of the business. 🏢🔨</p>
                    </div>

                    <div className="flex  p-5  w-full justify-center md:justify-start rounded text:xl md:text-2xl mt-24 md:mt-44 text-black cursor-pointer ">
                        <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
                        <p className="p-2 rounded hover:ml-3 flex items-center bg-heroButton ml-1">→</p>
                    </div>
                </div>
                <img className="  hidden sm:flex p-2  mt-52 h-[28rem]  sm:mt-24 sm:h-96 md:h-[28rem] lg:h-[34rem] lg:ml-48   " src={cHero} alt="Left House Image" />

            </div>

            <div className=" h-auto m-10 p-5 sm:p-10 w-screen flex flex-col justify-center items-center ">
                <button className="text-xl ">SCHEDULE AN APPOINTMENT</button>
                <div className="rounded-2xl flex flex-col justify-center items-center w-full  mt-10 border-2 shadow-lg  shadow-violet-700 border-violet-700">
                    <div className="flex flex-wrap   justify-center  p-4 sm:p-20  md:p-5 md:justify-around lg:p-10 w-full  gap-10  sm:gap-y-20  ">

                        {IndustrialCons.map((works, index) => (
                            <Card key={`project-${index}`} index={index} {...works} />
                        ))}

                        <div className="  border  shadow-lg shadow-gray-700  flex flex-col relative w-full h-[12rem]  hover:scale-110 transition-all duration-500 sm:w-[20rem]  sm:h-[20rem] md:h-[20rem]  ">
                            <h1 className='text-secondary font-bold  flex justify-center m-auto text-[1.7rem] sm:text-[2rem]'>Other</h1>
                        </div>
                    </div>
                    <div className='flex justify-end w-full  p-4'>

                        <button className="bg-violet-700 h-12 w-32">Next</button>
                    </div>
                </div>
            </div>


            <Projects />
            <Why />

        </div>
    )
}

export default Industrial