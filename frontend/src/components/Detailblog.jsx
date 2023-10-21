import React from 'react';
import { useParams } from 'react-router-dom';
import { blogDetails } from "../constants";

const Detailblog = () => {
    const { id } = useParams();

    // Find the selected blog post based on the id
    const selectedBlog = blogDetails.find(blog => blog.id === id);

    if (!selectedBlog) {
        return <p>Blog not found</p>;
    }

    // Function to process and style bold text
    const processBoldText = (text) => {
        return text.split('**').map((segment, index) => {
            if (index % 2 === 0) {
                return <span key={index} >{segment}</span>;
            } else {
                return <span key={index} className="font-bold">{segment}</span>;
            }
        });
    };

    return (
        <div className="mt-10  w-screen   relative">
            <div className="  p-10 bg-custom-name z-0 bg-cover bg-no-repeat bg-center ">
                <h1 className="mx-10 font-bold">BLOG</h1>
                <h2 className=" mx-10 text-bh text-2xl  ">{selectedBlog.category}</h2>
            </div>
            <div className="flex bg-side-bg bg-cover bg-no-repeat  flex-row bg-white text-black">
                <div className="  max-w-7xl mx-auto p-10">
                    <img src={selectedBlog.image} alt={selectedBlog.title} className=" rounded-lg w-full  md:w-[55rem] md:h-[30rem]" />
                    <h1 className="text-3xl font-bold mt-6 mb-6">{selectedBlog.title}</h1>
                    <p className="text-gray-600 text-sm">{selectedBlog.date}</p>
                    <p className="mt-4 whitespace-pre-line" >{processBoldText(selectedBlog.detail)}</p>
                </div>

            </div>
        </div>
    );
};

export default Detailblog;
