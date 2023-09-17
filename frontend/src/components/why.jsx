import React from 'react'
import { a, Dt, Qt, Nc, Cm } from "../assets";

const Portfolio = () => {
    return (
        <section className="bg-white border p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-center items-center -mt-10 sm:-mt-16 mb-10 m-auto  bg-black w-fit border rounded p-3 hover:bg-white hover:text-black">Get a free estimate now</div>
            
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
                <div className="w-full sm:w-1/2 sm:px-4 sm:flex justify-center">
                    <img src={a} alt="a" className="w-full sm:w-96 object-contain" />
                </div>
                <div className="w-full sm:w-1/2 p-4 sm:p-6 space-y-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading">
                        Why choose INFIXRA?
                    </h1>
                    <p className="text-base sm:text-lg text-black">
                        We always strive to provide 'Best in class' service, guaranteed by our experienced in-house Design & Construction team. A complete hassle-free experience from beginning to end.
                    </p>
                    <p className="text-base sm:text-lg text-black">
                        Your structure is insured with us. Any issues post-construction, no need to worry.
                        <span className="block sm:inline font-black">
                            We are always available with just a click or call away.
                        </span>
                    </p>
                    <ul className="text-base sm:text-lg text-black space-y-5">
                        <li className="flex items-center gap-2">
                            <img src={Dt} alt="DT" className="w-7 h-7 object-contain" />
                            Digital Tracking
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={Qt} alt="Qt" className="w-7 h-7 object-contain" />
                            Quality Assurance
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={Nc} alt="Nc" className="w-7 h-7 object-contain" />
                            No Cost Overrun
                        </li>
                        <li className="flex items-center gap-2">
                            <img src={Cm} alt="Cm" className="w-7 h-7 object-contain" />
                            Cubing Malpractices
                        </li>
                    </ul>
                </div>
            </div>
        </section>




    )
}

export default Portfolio