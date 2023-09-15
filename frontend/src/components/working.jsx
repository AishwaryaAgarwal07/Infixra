import React from 'react'
import { Requirment ,CostEstimation,arrow,schedule, work,delivery} from "../assets"

const Working = () => {
    return (
        <section >
            <div className="h-20 flex justify-center items-center bg-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">How it works ? </div>
            <div className="h-52 bg-work-bg flex sm:flex-row justify-center items-center space-x-16">
                <label className="text-black flex flex-col items-center ">
                <img src={Requirment} alt="Requirment" className="w-full sm:w-16 object-contain" />
                aditya
                </label>
                <img src={arrow} alt="arrow" className="w-full sm:w-16 object-contain" />
                <label className="text-black flex flex-col items-center ">
                <img src={CostEstimation} alt="CostEstimation" className="w-full sm:w-16 object-contain" />
                aditya
                </label>
                <img src={arrow} alt="arrow" className="w-full sm:w-16 object-contain" />
                <label className="text-black flex flex-col items-center ">
                <img src={schedule} alt="schedule" className="w-full sm:w-16 object-contain" />
                aditya
                </label>
                <img src={arrow} alt="arrow" className="w-full sm:w-16 object-contain" />
                <label className="text-black flex flex-col items-center ">
                <img src={work} alt="work" className="w-full sm:w-16 object-contain" />
                aditya
                </label>
                <img src={arrow} alt="arrow" className="w-full sm:w-16 object-contain" />
                <label className="text-black flex flex-col items-center ">
                <img src={delivery} alt="delivery" className="w-full sm:w-16 object-contain" />
                aditya
                </label>
            </div>
        </section>
    )
}

export default Working