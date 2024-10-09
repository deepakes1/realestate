import React from 'react'
import TopSection from '../components/AboutSection/TopSection';
import HistorySection from '../components/AboutSection/HistorySection';
import LeadershipSection from '../components/AboutSection/LeadershipSection';
import Cities from "../components/AboutSection/Cities";
import ContactSection from '../components/AboutSection/ContactSection';
function About() {
  return (
    
    <div className="mt-5">
      
      <TopSection />

      <HistorySection/>

      <LeadershipSection/>
      
      <Cities/>
      
      <ContactSection/>
        
    </div>
    
  )
}

export default About;
