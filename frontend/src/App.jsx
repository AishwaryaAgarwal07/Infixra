
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Services,HowItWorks, Why, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Hero />
      {/* <Services /> */}
      <HowItWorks/>
      <Why />
      <Footer />
    </BrowserRouter>

  )
}

export default App
