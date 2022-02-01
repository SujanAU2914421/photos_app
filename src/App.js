import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./components";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative h-screen w-screen overflow-hidden">
          <div className="relative h-full w-full">
            <div className="fixed h-[80px] w-full z-50 bg-white opacity-[0.95] backdrop-blur">
              <NavBar />
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <MainContainer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
