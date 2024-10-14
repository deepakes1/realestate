import React from 'react'
import phone from "../assets/phone.gif"
import location from "../assets/location-pin.gif"
import message from "../assets/message.gif"
function Contact() {
  return (
    <div className=' p-5'>

    <div className="mt-2 flex justify-end">
          <a href='https://forms.gle/sY55SKJFzhSxkymE9' className='text-blue-400 px-2 py-2 '>Register Online</a>
          <a
            className="text-blue-400 px-2 py-2"
            href="https://drive.google.com/file/d/16hwH-uq3wKoOz-xJ0hbdRw335ftmneMz/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Offline Form
          </a>
       </div>

    <h1 className='text-3xl text-center font-black mb-5 mt-3 '> Core Commitments - Our Strength</h1>
     <div className="flex justify-center w-[90vw] mx-auto p-5   gap-5 flex-wrap bg-slate-600 text-white">
          <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>EMOTION</h1>
          <p className='text-center text-lg mt-3'>Emotion is in performance of genuine duties towards the loved ones primarily in the benefit, rom the point of view. Emotion is the key that generates the required energy and ethusiasm for desired qualtity performance.</p>
        </div>


        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>SELF-RESPECT</h1>
          <p className='text-center text-lg mt-3'>To develop a sense of respect for oneself in others' mind, i.e. to generate genuine & warm feelings for oneself among others on a continuous basis.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>DISCIPLINE</h1>
          <p className='text-center text-lg mt-3'>The enthusiastic obedience of laws and orders, which are given by the rightful authority.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>TRUTH</h1>
          <p className='text-center text-lg mt-3'>Means total transparency in action, reaction, attitude and all other expressions and the conviction to follow the right course.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>DUTY</h1>
          <p className='text-center text-lg mt-3'>The enthusiastic obedience of laws and orders, which are given by our CONSCIENCE.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>NO DISCRIMINATION </h1>
          <p className='text-center text-lg mt-3'>Never should we discriminate in any of our actions, reactions, attitudes, decisions, conclusions, in any of our expressions while caring for the six healths of other human beings, namely physical, material, mental, emotional, social and professional healths.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>RELIGION</h1>
          <p className='text-center text-lg mt-3'>There is a religion higher than religion itself - it is NATIONALITY. We may practise our religions in the confines of our homes, but outside, we should be Indians and only Indians. 'Bharatiyata' or Nationalism thus becomes our supreme religion.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>QUALITY</h1>
          <p className='text-center text-lg mt-3'>Results from honouring Rules, Regulations, Commitments, Values, Fairness, Performance of Duties by honestly balancing one's own and others' reasonable point of view in the matters of Material & Emotional aspects.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>GIVE RESPECT</h1>
          <p className='text-center text-lg mt-3'>To definitely make others feel important and respected by giving sincere regard to others' feelings, reasonable wishes & thoughts with an open and receptive mind and warmth.</p>
        </div>

        <div className="md:w-[40vw] p-5 border-white border">
          <h1 className='text-3xl font-semibold text-center'>ABSOLUTE HONESTY</h1>
          <p className='text-center text-lg mt-3'>People generally manipulate and deceive for achieving their unreasonable desires and greed if others do not or cannot see, hear or understand. But we firmly believe that our mind inside knows the truth and we should be absolutely honest to our mind inside and accordingly our actions, reactions, directions, decisions and all our expressions should be present in all human dealings.</p>
        </div>
      </div>

      
      <h1 className='text-3xl font-semibold text-center mt-8'>Contact Us</h1>

      <div className="flex flex-wrap justify-center gap-7 mt-8 bg-slate-200 p-6">

        {/* phone */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={phone} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Phone</h1>
          <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>
          <p className='text-blue-500 mt-2'>+914373282864</p>
        </div>

        {/* email */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={message} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>By Email</h1>
          <p className='text-md mt-2'>For general inquiries, feedback, or support requests.</p>
          <p className='text-blue-500 mt-2'>sahara@gmail.com'</p>
        </div>


        {/* address */}
        <div className="w-[350px] p-5 text-center bg-white ">
          <div className="flex justify-center">
            <img src={location} className='object-cover h-[70px] w-[70px]' alt="" />
          </div>
          <h1 className='text-xl font-semibold mt-3'>Address</h1>
          <p className='text-md mt-2'>Located on Sathy Road, Visvaspuram, Sarvanampatti</p>
          <p className='text-blue-500 mt-2'>+914373282864</p>
        </div>


      </div>
      
    </div>
  )
}

export default Contact
