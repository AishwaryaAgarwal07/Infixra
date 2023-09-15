import React from 'react'
import { Requirment, CostEstimation, arrow, schedule, work, delivery } from "../assets"

const steps = [
    {
        image: Requirment,
        text: 'Your requirement',
    },
    {
        image: CostEstimation,
        text: 'Cost Estimation',
    },
    {
        image: schedule,
        text: 'Schedule visit',
    },
    {
        image: work,
        text: 'Work Execution',
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
            <div className="h-52 bg-work-bg flex sm:flex-row justify-center items-center space-x-16">
                {steps.map((step, index) => (
                    <div key={index} className="text-black flex flex-col items-center">
                        <img src={step.image} alt={step.text} className="w-full sm:w-16 mb-4 object-contain" />
                        {step.text}
                    </div>
                ))}
            </div>
        </section>
    );
};


export default HowItWorks