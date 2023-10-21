import React from 'react'
import { Requirment, CostEstimation, arrow, schedule, work, delivery } from "../assets"


const steps = [
    {
        image: Requirment,
        text: 'Your requirement',
    },
    {
        image: arrow,
    },
    {
        image: CostEstimation,
        text: 'Cost Estimation',
    },
    {
        image: arrow,
    },
    {
        image: schedule,
        text: 'Schedule visit',
    },
    {
        image: arrow,
    },
    {
        image: work,
        text: 'Work Execution',
    },
    {
        image: arrow,
    },
    {
        image: delivery,
        text: 'Satisfied Delivery',
    },
];

const HowItWorks = () => {
    return (
        <section className="flex flex-col lg:w-[99.9%]">
            <div className="h-20 flex justify-center items-center bg-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">How it works ?</div>
            <div className="h-auto  bg-work-bg flex flex-col  justify-center items-center space-y-10 ">
                <div className=" flex flex-col  md:flex-row justify-center items-center mt-16 space-y-8 sm:10 md:mt-12">
                    {steps.map((step, index) => (
                        <label key={index} className="text-black flex flex-col items-center mx-4 sm:mx-8 md:mx-5">
                            <img
                                src={step.image}
                                alt={step.text}
                                className={`w-10 md:w-14 sm:w-16 mb-4 object-contain ${!step.text ? 'hidden md:block' : ''} ${step.text=='Your requirement' ? "md:mt-9" : ""}`}
                            />
                            {step.text}
                        </label>
                    ))}
                </div>
                <div className="flex justify-center items-center m-auto  rounded  ">
                <button className=" bg-black w-fit rounded -mb-5 border hover:bg-white hover:text-black hover:border-black cursor-pointer">

                Get a free estimate now
                </button>
                
                </div>
            </div>


        </section>
    );
};


export default HowItWorks