import React,  { useState } from 'react'
import { i1 } from "../assets"
import { blogDetails } from "../constants"
import Card from './Card';



const Blog = () => {
    const uniqueCategories = [...new Set(blogDetails.map(blog => blog.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");
    // Define the filterBlogPosts function
    const filterBlogPosts = (category) => {
        if (category === "All") {
            return blogDetails; // Return all blog posts if "All" is selected
        } else {
            return blogDetails.filter(blog => blog.category === category);
        }
    };
    const filteredBlogPosts = filterBlogPosts(selectedCategory);

    return (
        <div className="w-screen mt-10  relative">
            <div className="p-10 bg-custom-name z-0 bg-cover bg-no-repeat bg-center ">
                <h1 className=" mx-10 font-bold">BLOG</h1>
                <h2 className=" mx-10 text-bh text-2xl  ">{selectedCategory === "All" ? "" : selectedCategory}</h2>
            </div>
            <div className="  h-auto flex flex-col-reverse md:flex-row bg-side-bg bg-cover bg-no-repeat bg-white ">
                <div className="  w-full flex flex-col ">
                    <div className="  p-7">
                        <div className=" h-full flex flex-col rounded-xl   ">
                            <img src={i1} className="h-96 w-auto" />
                            <p className=' text-xl text-slate-950 p-4'>Our website's construction blogs are your go-to resource for everything from budgeting and planning to design trends and construction techniques.</p>
                        </div>
                    </div>
                    <div className=" h-full -mt-10">
                    {filteredBlogPosts.map((blog, index) => (
                            <Card key={`project-${index}`} index={index} {...blog} />
                        ))}

                    </div>
                </div>

                <div className=" md:h-1/2 md:w-1/3  flex flex-col   ">
                    <div className=" mt-10 mx-10  ">
                        <h1 className="text-bh text-2xl  ">THE INFIXRA - Blog</h1>
                        <p className="text-stone-500 p-2 justify-center ">Explore our website's engaging blog for expert opinions, how-to guides, and the latest industry trends.</p>
                        <hr className="border-gray-500 w-full md:w-3/5 mt-4 mx-auto" />
                        <h1 className="text-black font-bold text-3xl mt-8">Categories</h1>
                        <ul className="max-w-md space-y-2 mt-5 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li
                            className={`items-center list-item gap-2 cursor-pointer ${selectedCategory === "All" ? "font-semibold text-indigo-600" : ""}`}
                            onClick={() => setSelectedCategory("All")}
                        >
                            All
                        </li>
                        {uniqueCategories.map((category, index) => (
                            <li
                                key={index}
                                className={`items-center list-item gap-2 cursor-pointer ${selectedCategory === category ? "font-semibold text-indigo-600" : ""}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog

