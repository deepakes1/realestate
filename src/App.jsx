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
import Plans from './pages/Plans';
import Flat from './components/plans/Flat';
import Great from './components/plans/Great';
import Crown from './components/plans/Crown';
import Gorgeous from './components/plans/Gorgeous';
import Zenith from './components/plans/Zenith';
import Villas from './components/plans/Villas';
import Grandeur from './components/plans/Grandeur';
import Exotic from './components/plans/Exotic';
import Meridian from './components/plans/Meridian';
import Cricket from './components/ServiceSection/Cricket';
import KidsPlayArea from './components/ServiceSection/KidsPlayArea';

function App() {
  return (
    <div>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Layout' element={<Layout/>}/>
      <Route path='/Plans' element= {<Plans/>} />
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
      <Route path='/Flats' element={<Flat/>}/>
      <Route path='/Great' element={<Great/>}/>
      <Route path='/Crown' element={<Crown/>}/>
      <Route path='/Gorgeous' element={<Gorgeous/>}/>
      <Route path='/Zenith' element={<Zenith/>}/>
      <Route path='/Villas' element={<Villas/>}/>
      <Route path='/Exotic' element={<Exotic/>}/>
      <Route path='/Meridian' element={<Meridian/>}/>
      <Route path='/Grandeur' element={<Grandeur/>}/>
      <Route path='/Cricket' element={<Cricket/>}/>
      <Route path='/KidsPlayArea' element={<KidsPlayArea/>}/>

      <Route path='*' element={<Error/>}/>
    </Routes>

    </div>
  )
}

export default App
