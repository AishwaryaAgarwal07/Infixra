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
        <section>
            <div className="h-20 flex justify-center items-center bg-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">How it works ?</div>
            <div className="h-52  bg-work-bg flex sm:flex-row justify-center items-center space-x-10 sm:space-x-16">
                {steps.map((step, index) => (
                    <label key={index} className="text-black flex flex-col items-center mx-4 sm:mx-8">
                        <img
                            src={step.image}
                            alt={step.text}
                            className="w-10 md:w-14 sm:w-16 mb-4 object-contain"
                        />
                        {step.text}
                    </label>
                ))}
            </div>
        </section>
    );
};


export default HowItWorks