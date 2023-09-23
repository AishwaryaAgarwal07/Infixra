import React from 'react'
import Hero from './hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Quotes from './quoets';
import HowItWorks from './HowItWorks';
import Why  from './why';


const Home = () => {
    return (
        <>
            <Hero/>
            <Services />
            <Portfolio />
            <Quotes/>
            <HowItWorks />
            <Why/>
        </>
    )
}

export default Home;