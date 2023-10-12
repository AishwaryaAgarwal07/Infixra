import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home, Contact, Residential, Commercial, Industrial, EMonitoring, AboutUs, Portfolio, Blog, Detailblog, Terms, Privacy_Policy } from "./components";


function App() {

    return (
        <Router>
            <Navbar />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/cc" element={<Commercial />} />
                <Route path="/rc" element={<Residential />} />
                <Route path="/ic" element={<Industrial />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/e-Monitoring" element={<EMonitoring />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Detailblog />} />

                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy_Policy />} />

            </Routes>
            <Footer />
        </Router>

    )
}

export default App
