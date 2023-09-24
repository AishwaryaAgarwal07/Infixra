import React from 'react';
import { BrowserRouter as Router , Route, Routes  } from "react-router-dom";
import { Navbar, Footer,Home,Contact, Services , EMonitoring,AboutUs, Portfolio} from "./components";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route  path="/services" element={<Services/>} />
        <Route  path="/portfolio" element={<Portfolio/>} />
        <Route  path="/e-Monitoring" element={<EMonitoring/>} />
        <Route  path="/aboutUs" element={<AboutUs/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
