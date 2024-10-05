import React from 'react'
import { Link } from 'react-router-dom'
import homeimg1 from "../assets/home.gif"
import homeimg2 from "../assets/repair-tools.gif"
import homeimg3 from "../assets/building.gif"
import downloadFile from "../assets/downloadFile.pdf";


function Home() {
  return (
    <div>

   
    {/* top header  */}
     <div className="mt-4 p-5 bg-slate-100 text-center flex flex-col items-center justify-center h-[50vh]">
       <h1 className='text-3xl font-semibold'>Crafting Exceptional Spaces</h1>
       <p className='text-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore eius, alias molestias ipsum minus nostrum?</p>
       <div className="mt-5">
          <Link to="/Contact" className='bg-black text-white px-2 py-2'>Contact us</Link>
       </div>
     </div>

    {/* history section */}
    <div className="md:flex flex-row-reverse gap-5 border-t-2 ">
      <div className="md:flex flex-col justify-center p-6">
          <h1 className='font-semibold text-2xl lg:text-4xl mb-4'>About Our Company</h1>
          <p className='lg:text-xl'>Sahara real estate business launches its flagship brand of township- Sahara City Homes in Coimbatore.Our mission is to transform communities by constructing sustainable, functional, and visually stunning structures that exceed our clients' expectations.</p>
      </div>

      <div className="mt-4 flex flex-col justify-center p-4 ">
        <img src="https://plus.unsplash.com/premium_photo-1677626706034-86c0e5387ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbnN0cnVjdGlvbiUyMGNvbXBhbnl8ZW58MHwwfDB8fHww" className='object-cover h-[30vh]  md:h-[50vh] w-[100vw] popout ' alt="not loading" />
      </div>

    </div>

    {/* services */}
    <div className="bg-slate-100 border-t-2">
          <div className="text-center mt-2 p-5 lg:h-[250px] lg:flex lg:flex-col lg:justify-center">
            <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Key Services</h1>
            <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center p-5  ">
            {/* service1 */}
            <Link to="/ResidentialUnits">
             <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow transition-all hover:rounded-lg hover:scale-105 mx-auto">
              <div>
              <div className="flex justify-center">
                <img src={homeimg1} className='object-cover h-[90px] w-[90px] rounded-full transition-all hover:scale-105' alt="" />
              </div>
                <p className='text-xl font-semibold mb-2'>Residential Units</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
              </div>
            </div>
            </Link>
            

            {/* service2 */}
             <Link to="/Commercial">
              <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow transition-all hover:rounded-lg hover:scale-105 mx-auto">
                <div>
                <div className="flex justify-center">
                  <img src={homeimg3} className='object-cover h-[90px] w-[90px] rounded-full transition-all hover:scale-105' alt="" />
                </div>
                  <p className='text-xl font-semibold mb-2'>Commercial Constructions</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
                </div>
              </div>
             </Link>

            {/* service3 */}
             <Link to="/Rennovation">
              <div className="text-center bg-white p-5 w-[350px] lg:flex-grow transition-all hover:rounded-lg hover:scale-105  mx-auto">
                <div>
                <div className="flex justify-center">
                  <img src={homeimg2} className='object-cover h-[80px] w-[80px] rounded-full transition-all hover:scale-105' alt="" />
                </div>
                  <p className='text-xl font-semibold mb-2'>Rennovation & Remodelling</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
                </div>
              </div>
             </Link>

          </div>
          
    </div>

    {/* statistics section */}
    <div className="md:flex relative border-t-2  gap-5">
      <div className="md:flex md:w-[100vw] flex-col justify-center text-left items-center p-6 ">
          <h1 className='font-semibold text-2xl lg:text-4xl mb-4'>Facts about the company</h1>
          <p className='lg:text-xl'>25+ Years of Experience.</p>
          <p className='lg:text-xl'>500+ Projects Completed.</p>
          <p className='lg:text-xl'>200+ Employees.</p>
          <p className='lg:text-xl'>95% Client Retention Rate.</p>
          <p className='lg:text-xl'>10,000,000+ Square Feet Developed</p>
      </div>

      <div className="mt-4 flex flex-col justify-center p-4 ">
        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-cover h-[30vh]  md:h-[50vh] w-[100vw]' alt="not loading" />
      </div>

    </div>

    {/* recent projects */}
    <div className="mt-5 border-t-2 bg-slate-100">
      <div className="text-center mt-2 p-5 lg:h-[250px] lg:flex lg:flex-col lg:justify-center">
        <h1 className='font-semibold text-2xl lg:text-4xl mb-2'>Our Recent Projects</h1>
        <p className='lg:text-xl lg:w-[80%] lg:mt-4 mx-auto'>Our experienced leadership team is dedicated to driving innovation, fostering a collaborative culture, and ensuring the success of every project we undertake.</p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center p-5  ">
        {/* project1 */}
        <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
          <div className="">
            <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
          </div>
          <div className="">
            <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
          </div>
        </div>

        {/* project2 */}
          <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

        {/* project3 */}
          <div className="text-center  bg-white p-5 w-[350px] lg:flex-grow  mx-auto">
            <div className="">
              <img src="https://images.pexels.com/photos/17514602/pexels-photo-17514602/free-photo-of-modern-apartment-building-in-chicago.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-[40vh] w-full' alt="" />
            </div>
            <div className="">
              <p className='text-xl font-semibold mt-3 mb-2'>Luxuary Apartment Complex</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nisi?</p>
            </div>
        </div>

      </div>
          
    </div>


    {/*footer*/}
     <div className="mt-4 p-5 text-center border-t-2 flex flex-col items-center justify-center h-[50vh]">
       <h1 className='text-3xl font-semibold'>Ready to start your Next Project</h1>
       <p className='text-lg mt-2'>Fill the below form to register</p>
       <div className="mt-5 flex gap-3">
          <a href='https://forms.gle/sY55SKJFzhSxkymE9' className='bg-black text-white px-2 py-2 '>Register Online</a>
          <a  className="bg-black text-white px-2 py-2" href="{downloadFile}" download ="downloadFile.pdf" >
            Offline Form
          </a>
       </div>
     </div>
    

    </div>
  )
}

export default Home
