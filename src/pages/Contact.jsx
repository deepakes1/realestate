import React from 'react';
import phone from "../assets/phone.gif";
import location from "../assets/location-pin.gif";
import message from "../assets/message.gif";

const CommitmentCard = ({ title, description }) => (
  <div className="md:w-[40vw] p-5 border border-black">
    <h1 className='text-3xl font-semibold text-center'>{title}</h1>
    <p className='text-center text-lg mt-3'>{description}</p>
  </div>
);

const ContactMethod = ({ icon, title, description, contactInfo }) => (
  <div className="w-[350px] p-5 text-center bg-white">
    <div className="flex justify-center">
      <img src={icon} className='object-cover h-[70px] w-[70px]' alt={`${title} icon`} />
    </div>
    <h1 className='text-xl font-semibold mt-3'>{title}</h1>
    <p className='text-md mt-2'>{description}</p>
    <p className='text-blue-500 mt-2'>{contactInfo}</p>
  </div>
);

function Contact() {
  return (
    <div className='p-5'>
      <div className="mt-2 flex justify-end">
        <a href='https://forms.gle/sY55SKJFzhSxkymE9' className='text-blue-400 px-2 py-2 text-lg underline'>Register Online</a>
        <a
          className="text-blue-400 px-2 py-2 text-lg underline"
          href="https://drive.google.com/file/d/16hwH-uq3wKoOz-xJ0hbdRw335ftmneMz/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Offline Form
        </a>
      </div>

      <h1 className='text-3xl text-center font-black mb-5 mt-3'>Core Commitments - Our Strength</h1>
      <div className="flex justify-center w-[90vw] mx-auto p-5 gap-5 flex-wrap bg-slate-200 text-black">
        <CommitmentCard 
          title="Emotion" 
          description="Emotion is in performance of genuine duties towards loved ones, generating the required energy and enthusiasm for quality performance." 
        />
        <CommitmentCard 
          title="Self-Respect" 
          description="To develop a sense of respect for oneself in others' minds, generating genuine feelings among others continuously." 
        />
        <CommitmentCard 
          title="Discipline" 
          description="The enthusiastic obedience of laws and orders from rightful authority." 
        />
        <CommitmentCard 
          title="Truth" 
          description="Total transparency in actions, attitudes, and the conviction to follow the right course." 
        />
        <CommitmentCard 
          title="Duty" 
          description="The enthusiastic obedience of laws given by our conscience." 
        />
        <CommitmentCard 
          title="No Discrimination" 
          description="Never discriminate in actions or attitudes while caring for the health of others." 
        />
        <CommitmentCard 
          title="Religion" 
          description="Nationalism is our supreme religion; we should practice our religions privately." 
        />
        <CommitmentCard 
          title="Quality" 
          description="Results from honoring rules and values, balancing perspectives in material and emotional matters." 
        />
        <CommitmentCard 
          title="Give Respect" 
          description="Make others feel important by giving sincere regard to their feelings and wishes." 
        />
        <CommitmentCard 
          title="Absolute Honesty" 
          description="Be honest to ourselves, reflecting that honesty in all human dealings." 
        />
      </div>

      <h1 className='text-3xl font-semibold text-center mt-8'>Contact Us</h1>
      <div className="flex flex-wrap justify-center gap-7 mt-8 bg-slate-200 p-6">
        <ContactMethod 
          icon={phone} 
          title="By Phone" 
          description="For immediate assistance, feel free to call us." 
          contactInfo="+914373282864" 
        />
        <ContactMethod 
          icon={message} 
          title="By Email" 
          description="For general inquiries, feedback, or support requests." 
          contactInfo="sahara@gmail.com" 
        />
        <ContactMethod 
          icon={location} 
          title="Address" 
          description="Located on Sathy Road, Visvaspuram, Sarvanampatti." 
          contactInfo="+914373282864" 
        />
      </div>
    </div>
  );
}

export default Contact;
