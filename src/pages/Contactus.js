import React from "react";

export default function Contactus() {
  const email = "contact@baljeetkode.com";
  const phone = "+91 99999-99999";
  return (
    <div className="w-full h-full bg-primary flex flex-col items-center">
      <div className="w-full h-20 sm:h-1/6 flex bg-primary-light items-center border-b-2">
        <div className="w-28 flex justify-center">
          <img src="./logo.svg" className="h-14" />
        </div>
        <div className="w-auto flex justify-center">
          <p className="font-sans font-medium text-xl text-secondary">
            Contact Us
          </p>
        </div>
      </div>
      <div className="w-full h-1/3 sm:h-3/5 sm:w-3/5 flex flex-col bg-primary-light justify-evenly mt-32 sm:mt-16  sm:py-12 sm:px-24 py-8 px-8 text-wrap">
        <div className="w-auto h-20 flex flex-row items-center">
          <img src="email.svg" className="h-8 w-8" />
          <p className="font-sans ml-6 text-secondary font-medium text-xl underline ">
            {email}
          </p>
        </div>
        <div className="w-auto h-20 flex flex-row items-center">
          <img src="phone.svg" className="h-8 w-8" />
          <p className="font-sans ml-6 text-secondary font-medium text-xl ">
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}
