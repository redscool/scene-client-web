import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer({
  handleApplestore,
  handlePlaystore,
  handleApplestoreProvider,
  handlePlaystoreProvider,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-32 bg-primary-light sm:flex hidden items-center justify-evenly">
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
            onClick={() => navigate("/tnc")}
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
          >
            Terms & Conditions
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/privacypolicy")}
          >
            Privacy Policy
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/refundpolicy")}
          >
            Refund Policy
          </p>
        </div>
        <div className="w-auto h-20 flex flex-col justify-start px-2">
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </p>
          <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
            About Us
          </p>
        </div>
        <div className="w-auto h-20 flex flex-col justify-start px-2">
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={handlePlaystoreProvider}
          >
            Scene for Organiser | Android
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={handleApplestoreProvider}
          >
            Scene for Organiser | iOS
          </p>
        </div>
        <div className="w-auto h-28 flex flex-col justify-evenly px-2">
          <img
            src="./applestore.svg"
            className="w-28 cursor-pointer"
            onClick={handleApplestore}
          />
          <img
            src="./playstore.svg"
            className="w-28 cursor-pointer"
            onClick={handlePlaystore}
          />
        </div>
      </div>

      <div className="w-full bg-primary-light flex flex-col sm:hidden p-8">
        <div className="w-auto h-24 flex flex-col justify-evenly px-2 mb-8">
          <p
            onClick={() => navigate("/tnc")}
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
          >
            Terms & Conditions
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/privacypolicy")}
          >
            Privacy Policy
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/refundpolicy")}
          >
            Refund Policy
          </p>
        </div>
        <div className="w-auto h-20 flex flex-col justify-evenly px-2 mb-8">
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </p>
          <p className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans">
            About Us
          </p>
        </div>
        <div className="w-auto h-20 flex flex-col justify-evenly px-2">
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={handlePlaystoreProvider}
          >
            Scene for Organiser | Android
          </p>
          <p
            className="w-full font-light text-base self-center mx-auto underline cursor-pointer text-secondary font-sans"
            onClick={handleApplestoreProvider}
          >
            Scene for Organiser | iOS
          </p>
        </div>

        <div className="w-full flex mt-8 items-center justify-evenly">
          <img src="./logo.svg" className="h-20" />
          <div className="w-36 h-20 flex flex-col justify-evenly">
            <p className="w-full font-light text-base text-placeholder font-sans">
              Powered by
            </p>
            <p className="w-full font-normal text-lg text-accent font-serif">
              <span className="text-2xl">B</span>ALJEETKODE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
