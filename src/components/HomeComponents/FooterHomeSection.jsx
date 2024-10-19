import React from 'react';

function FooterHomeSection() {
  return (
    <div className="mt-4 p-5 text-center border-t-2 flex flex-col items-center justify-center h-[40vh]">
      <h1 className="text-3xl font-semibold">Ready to Start Your Next Project</h1>
      <p className="text-lg mt-2">Fill out the form below to register</p>
      <div className="mt-5 flex gap-3">
        <a
          href="https://forms.gle/sY55SKJFzhSxkymE9"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Register Online
        </a>
        <a
          href="https://drive.google.com/file/d/16hwH-uq3wKoOz-xJ0hbdRw335ftmneMz/view?usp=drivesdk"
          className="bg-black text-white px-4 py-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Offline Form
        </a>
      </div>
    </div>
  );
}

export default FooterHomeSection;
