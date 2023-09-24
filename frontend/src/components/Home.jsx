import React from 'react'
import Hero from './hero';
import Projects from './Projects';
import Quotes from './quoets';
import HowItWorks from './HowItWorks';
import Why from './why';
import { service } from '../assets'

const Home = () => {
    return (
        <>
            <Hero />

            {/* services */}
            <div className="relative">
                <div className='h-96 bg-services-background z-0 bg-cover bg-no-repeat bg-center'>
                    <div className="absolute z-10 flex flex-row">
                        <h1>Services we provide</h1>
                        <img src={service} alt="arrow-image" />
                    </div>
                </div>
            </div>

            <Projects />
            <Quotes />
            <HowItWorks />
            <Why />
        </>
    )
}

export default Home;