import React, { useState } from 'react';
import { telephone, phone, email, Location } from "../assets"
import Why from './why';





const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., sending data to a server
        console.log(formData);
        // Reset the form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };


    return (
        <div className="relative h-auto w-screen  bg-Contact-bg  bg-cover  bg-no-repeat bg-center">
            <div className="mb-20">
                <div className="flex flex-col justify-center items-center sm:flex-row">
                    <div className="mt-4 sm:mt-20 xl:mx-24 flex flex-col justify-center">
                        <div className=" p-4 flex  flex-col mx-4   justify-center">
                            <h1 className="text-slate-600 font-bold p-4 sm:p-2  text-center text-[2rem] mt-10 sm:text-left sm:text-4xl  xl:text-5xl">CONTACT US</h1>
                            <p className="text-slate-600 text-2xl  p-4 text-center sm:text-left">We always love to help and talk to our clients</p>
                        </div>

                        <div className=" mt-8 sm:mt-16 p-4  flex flex-col mx-4 sm:mx-14 justify-center border border-red-600">
                            <h1 className="text-slate-600  text-2xl p-4  sm:-mx-8 text-center  sm:text-left">CONTACT DETAILS</h1>
                            <ul className="text-base sm:text-lg px-4   p-4 sm:p-5  text-black space-y-5">
                                <li className="  w-56 flex items-center gap-4 sm:gap-5 ">
                                    <img src={phone} alt="phone" className="w-10 h-10 object-contain" />
                                    <div className='flex flex-col '>
                                        <span>Phone number</span>
                                        <a href="+91 111 222 3456">+91 111 222 3456</a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src={email} alt="email" className="w-10 h-10 object-contain" />
                                    <div className='flex flex-col'>
                                        <span>E Mail</span>
                                        <a href="Infixra@gmail.com">Infixra@gmail.com</a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <img src={Location} alt="Location" className="w-10 h-10 object-contain" />
                                    <div className='flex flex-col'>
                                        <span>Office location</span>
                                        <address className="text-sky-600">Near Ashish Royal Tower Bareilly</address>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-full  mt-4 sm:mt-24 xl:mt-40 p-4 flex">
                        <img className="w-[20rem] mx-auto sm:w-96 object-contain " src={telephone} />
                    </div>

                </div>


                <div className="h-auto flex justify-center border border border-red-600">
                    <form className="flex-form border-6 p-4 " onSubmit={handleSubmit}>
                        <h1 className="text-slate-600 text-2xl mx-20 p-4">JOIN OUR TEAM</h1>

                        <div className="mb-6">
                            {/* <label
            htmlFor="name"
            className="block text-secondary mb-2"
          >
            Name
          </label> */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="peer block min-h-[auto] w-[23rem] md:w-[25rem] rounded border bg-transparent py-[0.32rem] px-3 leading-[2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-400 dark:placeholder:text-slate-400 dark:peer-focus:text-secondary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                                placeholder="Name"
                            />
                        </div>

                        <div className="mb-6 ">
                            {/* <label
            htmlFor="email"
            className="block text-secondary mb-2"
          >
            Email address
          </label> */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="peer block min-h-[auto] w-[23rem] md:w-[25rem] rounded border bg-transparent py-[0.32rem] px-3 leading-[2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-400 dark:placeholder:text-slate-400 dark:peer-focus:text-secondary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="mb-6">
                            {/* <label
            htmlFor="phone"
            className="block text-secondary mb-2"
          >
            Phone no.
          </label> */}
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="peer block min-h-[auto] w-[23rem] md:w-[25rem] rounded border bg-transparent py-[0.32rem] px-3 leading-[2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-secondary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-400 dark:placeholder:text-slate-400 dark:peer-focus:text-secondary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                                placeholder="Phone number"
                            />
                        </div>

                        <div className="mb-6">
                            {/* <label
            htmlFor="message"
            className="block text-secondary mb-2"
          >
            Message
          </label> */}
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="peer block min-h-[auto] w-[23rem] md:w-[25rem] rounded border bg-transparent py-[0.32rem] px-3 leading-[2] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-400 dark:placeholder:text-slate-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mb-6 inline-block rounded bg-secondary mx-40 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,2,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <Why />
        </div>

    )
}








export default Contact