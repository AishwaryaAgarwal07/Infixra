
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, Services,Working, Why, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>

      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Working/>
      <Why />
      <Footer />
    </BrowserRouter>

  )
}

export default App
