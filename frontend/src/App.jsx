
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Services,Portfolio,Quotes,HowItWorks, Why, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio/>
      <Quotes/>
      <HowItWorks/>
      <Why />
      <Footer />
    </BrowserRouter>

  )
}

export default App
