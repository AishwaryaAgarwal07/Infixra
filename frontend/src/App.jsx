
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Services, Why, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Why />
      <Footer />
    </BrowserRouter>

  )
}

export default App
