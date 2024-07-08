import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-32 bg-primary-light flex items-center justify-evenly">
      <img src="./logo.svg" className="h-20" />
      <div className="w-36 h-20 flex flex-col justify-evenly">
        <p className="w-full font-light text-base  text-placeholder font-sans">
          Powered by
        </p>
        <p className="w-full font-normal text-lg text-accent font-serif">
          <span className="text-2xl">B</span>ALJEETKODE
        </p>
      </div>
      <div className="w-auto h-20 flex flex-col justify-start px-2">
        <p
          onClick={() => navigate("/terms")}
          className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
        >
          Terms & Conditions
        </p>
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          Privacy Policy
        </p>
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          Refund Policy
        </p>
      </div>
      <div className="w-auto h-20 flex flex-col justify-start px-2">
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          Contact Us
        </p>
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          About Us
        </p>
      </div>
      <div className="w-auto h-20 flex flex-col justify-start px-2">
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          Scene for Organiser | Android
        </p>
        <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
          Scene for Organiser | iOS
        </p>
      </div>
      <div className="w-auto h-28 flex flex-col justify-evenly px-2">
        <img src="./applestore.svg" className="w-28" />
        <img src="./playstore.svg" className="w-28" />
      </div>
    </div>
  );
}
