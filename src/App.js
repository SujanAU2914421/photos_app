/* eslint-disable */
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./components";
import NavBar from "./components/navBar";
import { MainContext } from "./contexts/mainContext";

export default function App() {
	const [data, setData] = useContext(MainContext);

	return (
		<>
			<BrowserRouter>
				<div
					className={
						"relative h-screen w-screen overflow-hidden" +
						(data.darkMode ? " dark" : "")
					}
				>
					<div className="relative h-full w-full dark:bg-gray-800">
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
