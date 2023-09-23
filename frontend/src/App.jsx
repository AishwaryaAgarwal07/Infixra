import React from 'react';
import { BrowserRouter as Router , Route, Routes  } from "react-router-dom";
import { Navbar, Footer,Home,Contact } from "./components";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
