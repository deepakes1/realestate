import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from "../src/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ResidentialUnits from './pages/ResidentialUnits';
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import './App.css';
import Commercial from './pages/Commercial';
import Rennovation from './pages/Rennovation';
function App() {
  return (
    <div>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/ResidentialUnits' element={<ResidentialUnits/>}/>
      <Route path='/Commercial' element={<Commercial/>}/>
      <Route path='/Rennovation' element={<Rennovation/>}/>

      <Route path='*' element={<Error/>}/>
      


    </Routes>

    </div>
  )
}

export default App
