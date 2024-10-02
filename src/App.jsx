import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from "../src/pages/Home";
import About from "./pages/About";
import TownshipFeatures from "./pages/TownshipFeatures";
import NewsEvents from "./pages/NewsEvents";
import ArchitectDesign from "./pages/ArchitectDesign";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Navbar />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/TownshipFeatures' element={<TownshipFeatures/>}/>
      <Route path='/ArchitectDesign' element={<ArchitectDesign/>}/>
      <Route path='/NewsEvents' element={<NewsEvents/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      {/* <Route path='/Check' element={<Check/>}/> */}
      <Route path='*' element={<Error/>}/>
      


    </Routes>

    </div>
  )
}

export default App
