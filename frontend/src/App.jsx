
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Services, Portfolio, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>

          <Navbar />
          <Hero />
        <Services />
        <Portfolio />
        <Footer />
    
    </BrowserRouter>

  )
}

export default App
