import React from 'react'
import { Requirment , arrow} from "../assets"

const Working = () => {
    return (
        <section >
            <div className="h-20 flex justify-center items-center bg-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">How it works ? </div>
            <div className="h-52 bg-work-bg flex sm:flex-row justify-center items-center space-x-16">
                <img src={Requirment} alt="Requirment" className="w-full sm:w-20 object-contain" />
                <img src={arrow} alt="arrow" className="w-full sm:w-20 object-contain" />
                <img src={Requirment} alt="Requirment" className="w-full sm:w-20 object-contain" />
                <img src={arrow} alt="arrow" className="w-full sm:w-20 object-contain" />
                <img src={Requirment} alt="Requirment" className="w-full sm:w-20 object-contain" />
                <img src={arrow} alt="arrow" className="w-full sm:w-20 object-contain" />
                <img src={Requirment} alt="Requirment" className="w-full sm:w-20 object-contain" />
                <img src={arrow} alt="arrow" className="w-full sm:w-20 object-contain" />
                <img src={Requirment} alt="Requirment" className="w-full sm:w-20 object-contain" />
                
                
            </div>
        </section>
    )
}

export default Working