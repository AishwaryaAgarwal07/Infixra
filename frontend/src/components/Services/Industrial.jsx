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
        <div className="  border border-black  shadow-lg   shadow-gray-700 flex flex-col relative w-[30rem] hover:scale-110 transition-all duration-500 sm:w-[20rem]  sm:h-[19rem] md:h-[20rem]  ">
            <img
                src={image}
                alt='project_image'
                className='w-full  object-cover  '
            />
            <h1 className='text-secondary font-bold  p-2 font-mono m-auto text-[1.6rem] sm:text-[1.7rem]'>{title}</h1>
        </div>

    )
}




const Industrial = () => {
    return (
        <div className=" mt-10 relative bg-white">
            <div className="bg-custom-name z-0 bg-cover mt-5 h-100 flex flex-row bg-no-repeat bg-center">
                <div className="flex flex-col p-20 sm:p-10">
                    <div className="p-4 sm:p-2 mr-32 ">
                        <h1 className="text-4xl font-bold">Industrial Constructions </h1>
                        <p className="text-xl mt-5 leading-8  text-justify">Industrial construction involves building structures for Industrial purposes, with a focus on functionality, efficiency, and meeting the needs of the business. 🏢🔨</p>
                    </div>
                    <div className="flex rounded text-2xl mt-20 text-black cursor-pointer">
                        <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
                        <p className="p-2 rounded hover:ml-3 bg-heroButton ml-1">→</p>
                    </div>
                </div>
                <img className="  p-2 mt-52 h-[28rem] -ml-28 sm:h-[25rem] md:h-100 md:mt-40  md:-ml-60 sm:-ml-60 sm:mt-56" src={cHero} alt="Left House Image" />
                
            </div>

            <div className=" h-auto m-10 p-20">
                <button className="text-xl w-1/3 sm:w-fit ">SCHEDULE AN APPOINTMENT</button>
                <div className="rounded-2xl md:bg-Appointment-bg lg:bg-no-repeat bg-center  mt-10 border-2 shadow-lg  shadow-violet-700 border-violet-700" >
                    <div className="flex flex-wrap justify-between  md:p-24   p-14 gap-10 sm:gap-y-20 sm:p-20  ">

                        {IndustrialCons.map((works, index) => (
                            <Card key={`project-${index}`} index={index} {...works} />
                        ))}

                        <div className="  border  shadow-lg shadow-gray-700  flex flex-col relative w-[30rem] hover:scale-110 transition-all duration-500 sm:w-[20rem]  sm:h-[19rem] md:h-[20rem]  ">
                            <h1 className='text-secondary font-bold  flex justify-center m-auto text-[1.7rem] sm:text-[2rem]'>Other</h1>
                        </div>
                    </div>
                    <div className='flex justify-end mr-10 p-4'>

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