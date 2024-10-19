import React from 'react';
import downloadicon from "../assets/downloadicon.gif";
import globe from "../assets/globe.gif";

const DownloadCard = ({ title, description, link, icon, linkText }) => (
  <div className="mt-5 w-[300px] bg-slate-200 p-5">
    <h1 className='text-xl font-semibold mb-3'>{title}</h1>
    <h1 className='text-lg'>{description}</h1>
    <div className="flex gap-5 mt-5 items-center">
      <img src={icon} className="h-[50px] w-[50px]" alt={`${title} icon`} />
      {link.startsWith("http") ? (
        <a
          className="text-blue-400 underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      ) : (
        <h1 className='text-blue-400 underline'>{linkText}</h1>
      )}
    </div>
  </div>
);

function DownloadTab() {
  return (
    <div className="flex flex-col justify-center items-center md:h-[80vh] mx-auto">
      <h1 className='text-2xl font-bold text-center'>Download the Forms</h1>

      <div className="flex flex-wrap gap-7 justify-center">
        <DownloadCard
          title="Fill out Online"
          description="Please click the link below to access the online form, and we'll get back to you soon!"
          link="#"
          icon={globe}
          linkText="Online Link"
        />

        <DownloadCard
          title="Fill out Offline"
          description="Please click the link below to access the offline form, and we'll get back to you soon!"
          link="https://drive.google.com/file/d/16hwH-uq3wKoOz-xJ0hbdRw335ftmneMz/view?usp=drivesdk"
          icon={downloadicon}
          linkText="Offline Link"
        />
      </div>
    </div>
  );
}

export default DownloadTab;
