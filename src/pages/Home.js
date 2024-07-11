import React from "react";
import Footer from "../components/Footer";
export default function Home() {
  const platform = navigator.userAgent;
  console.log(platform);
  return (
    <>
      <div className="bg-primary sm:flex hidden h-full w-full flex-col">
        <div className="m-auto">
          <p className="font-light text-secondary text-2xl m-0">
            Scene is not available on browser at the moment. <br />
            Kindly install the app on your mobile.
          </p>
        </div>
        <Footer />
      </div>
      <div className="bg-primary sm:hidden flex h-full w-full flex-col">
        <div className="w-full">
          <img src="./logo.svg" className="mt-16 w-28 mx-auto" />
          <p className="font-light mt-10 text-secondary text-base text-center m-0">
            Scene is not available on browser at the moment. <br />
            Kindly install the app on your mobile.
          </p>
          <img
            src={
              platform.match(/Android/i) ? "./playstore.svg" : "./applestore"
            }
            className="mt-16 w-40 mx-auto mb-24"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
