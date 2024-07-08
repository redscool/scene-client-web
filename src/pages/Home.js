import React from "react";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-primary h-full w-full flex flex-col">
      <div className="m-auto">
        <p className="font-light text-secondary text-2xl m-0">
          Scene is not available on browser at the moment. <br />
          Kindly install the app on your mobile.
        </p>
      </div>
      <Footer />
    </div>
  );
}
