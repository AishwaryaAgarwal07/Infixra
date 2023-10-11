import React from 'react'
import { aboutTop } from '../assets/'
const AboutUs = () => {
    return (
        <div className="w-screen relative bg-aboutus-background"> 
            <div className="bg-aboutus-background h-200 bg-cover bg-no-repeat bg-center mt-14 flex flex-col">
                <div className="bg-aboutUs-hero h-96 flex flex-row md: justify-between" style={{ backgroundColor: 'rgba(100, 100, 100, 0.5)' }}>
                    <div className="flex flex-col justify-center items-center mt-6 md:w-1/2 md:items-start  font-bold md:px-10  md ">
                        <h1 className="#">About Us</h1>
                        <p className="mt-4 px-10 md:px-0">Welcome to INFIXRA , a fresh and dynamic construction company dedicated to building a brighter future. While we may be a newcomer to the construction scene, our passion, dedication, and commitment to quality are second to none.</p>
                    </div>
                    <div className=" relative hidden md:block  md:w-1/2 md:mt-32 lg:mt-20 " >
                        <img  className="md:ml-32 w-[75%] md:w-[60%] lg:w-[50%] " src={aboutTop} alt="Right top Image" />
                    </div>
                </div>

                {/* Our Service */}
                <div className="bg-white h-auto flex text-black" style={{ backgroundColor: 'rgba(242, 242, 242, 0.8)' }}>
                    <div className=" mt-10 md:mt-28 md:ml-20 flex flex-col justify-center items-center md:items-start">
                        <h1 className="font-bold text-4xl">OUR SERVICES</h1>
                        <p className="mt-10" style={{ width: '75%' }}>At New Horizon Builders, we may not have decades of experience, but we have a keen eye for detail and a commitment to excellence. We offer a range of construction services designed to meet the needs of our clients, including:</p>
                        <ul class="list-disc list-inside ">
                            <li class="#">Residential Construction</li>
                            <li class="#">Home Renovations</li>
                            <li class="#">Custom Builds</li>
                            <li class="#">Small Commercial Projects</li>
                        </ul>
                        <p className="mt-5" style={{ width: '75%' }}>Our vision is to grow alongside our clients, learning from each project and improving with every brick we lay. While we may not have a long history, we are committed to building one, one project at a time. Your dreams are our projects, and we're excited to turn them into reality</p>
                        <p class="#" style={{ width: '75%' }}>We may be new, but we are dedicated to transparency, integrity, and delivering on our promises. We approach every project with enthusiasm and a determination to exceed expectations. While we may not have a lengthy track record, we have a passion for building that fuels our drive</p>
                        <p className="text-2xl md:text-3xl text-center mt-10 md:ml-24 font-bold mb-4 " >Thank you for considering INFIXRA for your construction needs. Let's build a brighter tomorrow together✨</p>
                    </div>
                </div>

                {/* Form */}
                <div className="h-100 bg-white text-black flex flex-col items-center justify-center">
                    <div className="p-4 text-center">
                        <p className=" text-xm font-bold mt-6">Ready to embark on your construction journey with us? Contact New Horizon Builders today to discuss your project, request a consultation, or receive a personalized quote. We're eager to take the first step toward building a better future together.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
