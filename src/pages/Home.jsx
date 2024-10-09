import React from 'react'

import Marquee from '../components/HomeComponents/Marquee'
import TopHomeSection from '../components/HomeComponents/TopHomeSection'
import HistorySectionHome from '../components/HomeComponents/HistorySectionHome'
import ServicesHomeSection from '../components/HomeComponents/ServicesHomeSection'
import FactsSectionHome from '../components/HomeComponents/FactsSectionHome'
import RecentProjectSection from '../components/HomeComponents/RecentProjectSection'
import FooterHomeSection from '../components/HomeComponents/FooterHomeSection'
import Carousel from '../components/HomeComponents/Carousel'

function Home() {
  return (
    <div>

    <Marquee/> 

    <Carousel/>

   
    <TopHomeSection/>

    <HistorySectionHome/>

    <ServicesHomeSection/>

    <FactsSectionHome/>

    <RecentProjectSection/>

    <FooterHomeSection/>
    
    </div>
  )
}

export default Home
