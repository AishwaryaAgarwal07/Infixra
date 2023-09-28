import React from 'react'
import { i1, i2, i3 } from "../assets"
import { Link} from 'react-router-dom';
import {blogDetails} from "../constants"






const Card = ({
    image,
    date,
    title,
    description,
}) => {
    return (
        <div className="p-10">
            <div className=" w-full lg:max-w-full lg:flex">
                <img src={image} className=" w-full h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            {date}
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base"> {description}</p>
                    </div>
                    <div className="flex items-center">
                        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )   
}





const Blog = () => {
    return (
        <div className="mt-10 h-[90vh] relative">
            <div className="h-32 bg-custom-name z-0 bg-cover bg-no-repeat bg-center ">
                <h1 className="p-10 mx-10 font-bold">BLOG</h1>
            </div>
            <div className=" h-auto flex flex-row bg-white ">
                <div className=" h-full w-full flex flex-col border-8">
                    <div className=" border border-red-400 p-7">
                        <div className=" h-full flex flex-col rounded-xl  border-2 border-black ">
                            <img src={i1} className="h-2/3 w-auto" />
                            <p className=' text-xl text-slate-950 p-4'>Our website's construction blogs are your go-to resource for everything from budgeting and planning to design trends and construction techniques.</p>
                        </div>
                    </div>
                    <div className=" h-full border border-blue-500">
                    {blogDetails.map((blogDetails, index) => (
                    <Card key={`project-${index}`} index={index} {...blogDetails} />
                ))}
                    </div>
                </div>

                <div className="  w-1/3 bg-side-bg flex flex-col   border-8">
                    <div className=" mt-10 mx-10  ">
                        <h1 className="text-bh text-2xl  ">THE INFIXRA - Blog</h1>
                        <p className="text-stone-500 p-2 justify-center ">Explore our website's engaging blog for expert opinions, how-to guides, and the latest industry trends.</p>
                        <hr className="border-gray-500 w-3/5 mt-4 mx-auto" />
                        <h1 className="text-black font-bold text-3xl mt-8">Categories</h1>
                        <ul class="max-w-md space-y-2 mt-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li className="items-center list-item  gap-2">
                                All
                            </li>
                            <li className="items-center list-item  gap-2">
                                Residential Construction
                            </li>
                            <li className="items-center list-item  gap-2">
                                Commercial Construction
                            </li>
                            <li className="items-center list-item  gap-2">
                                Industrial Construction
                            </li>
                            <li className="items-center list-item  gap-2">
                                Project management
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog

