import React from 'react'
import {work} from "../constants"



const Card = ({
    image,
    title,
    place,
    size,
    xyz
}) => {
    return (
        <div className="  border flex flex-col relative w-[30rem] hover:scale-110 transition-all duration-500 sm:w-[20rem]  sm:h-[25rem] md:h-[27rem]  ">
            <img
                src={image}
                alt='project_image'
                className='w-full h-4/6  sm:h-2/3  object-cover  '
            />
            <div className='m-6 flex justify-between '>
                <div className='flex flex-col space-y-3'>
                    <h1 className='text-secondary font-bold text-[1.7rem] sm:text-[2rem]'>{title}</h1>
                    <h6 className='text-secondary sm:text-md'>{place}</h6>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h6 className='text-secondary sm:text-md'>{size}</h6>
                    <h6 className='text-secondary  sm:text-md flex justify-end' >{xyz}</h6>
                </div>
            </div>
            <hr className='border-secondary m-auto  border-[.1rem] w-[25rem] sm:w-[20rem] md:w-[17rem]' />
        </div>

    )
}

const Projects = () => {
    return (
        <section className="bg-white  p-4 sm:p-6 md:p-8 lg:p-10">
            <div className=" flex justify-center items-center   m-auto  bg-white text-secondary fond-bold w-72 border rounded-2xl p-4 hover:border-2  drop-shadow-xl text-3xl font-extrabold hover:border-secondary ">Our Portfolio</div>

            <div className="  h-auto  p-7 mt-10   flex flex-wrap gap-6 pb-7 gap-y-14 justify-center">

                {work.map((works, index) => (
                    <Card key={`project-${index}`} index={index} {...works} />
                ))}
            </div>

            <button className=" flex justify-center items-center   m-auto mt-9  bg-secondary text-white fond-bold w-72 border rounded-2xl p-2   drop-shadow-xl text-3xl font-extrabold hover:bg-white hover:text-secondary "> More Projects</button>
        </section>

    )
}

export default Projects