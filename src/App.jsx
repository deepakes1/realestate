import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from "../src/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./pages/Layout";
import ResidentialUnits from './pages/ResidentialUnits';
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import './App.css';
import Commercial from './pages/Commercial';
import Rennovation from './pages/Rennovation';
import DownloadTab from "./pages/DownloadTab";
import Security from './components/ServiceSection/Security';
import Hospital from './components/ServiceSection/Hospital';
import Education from './components/ServiceSection/Education';
import Mall from './components/ServiceSection/Mall';
import Multiplex from './components/ServiceSection/Multiplex';
import Hotel from './components/ServiceSection/Hotel';
import Club from './components/ServiceSection/Club';
import Community from './components/ServiceSection/Community';
import Water from './components/ServiceSection/Water';
import Power from './components/ServiceSection/Power';

function App() {
  return (
    <div>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Layout' element={<Layout/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/ResidentialUnits' element={<ResidentialUnits/>}/>
      <Route path='/Commercial' element={<Commercial/>}/>
      <Route path='/Rennovation' element={<Rennovation/>}/>
      <Route path='/DownloadTab' element={<DownloadTab/>}/>
      <Route path='/Security' element={<Security/>}/>
      <Route path='/Hospital' element={<Hospital/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Mall' element={<Mall/>}/>
      <Route path='/Multiplex' element={<Multiplex/>}/>
      <Route path='/Hotel' element={<Hotel/>}/>
      <Route path='/Club' element={<Club/>}/>
      <Route path='/Community' element={<Community/>}/>
      <Route path='/Water' element={<Water/>}/>
      <Route path='/Power' element={<Power/>}/>
      <Route path='*' element={<Error/>}/>
      


    </Routes>

    </div>
  )
}

export default App
