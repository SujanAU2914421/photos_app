/* eslint-disable */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { MainContext } from "../contexts/mainContext";

export default function NavBar() {
	const [data, setData] = useContext(MainContext);

	const toggleDarkMode = () => {
		setData({
			...data,
			darkMode: !data.darkMode,
		});
	};

	return (
		<>
			<div className="relative h-full w-full">
				<div className="relative h-full w-full flex items-center justify-between xl:px-32 lg:px-32 md:px-16 px-4">
					<div className="relative h-auto w-auto">
						<div className="relative h-auto w-auto flex items-center gap-16">
							<div className="relative h-auto w-auto flex items-center justify-center text-xl font-extrabold text-[#2E5090]">
								Photos
							</div>
							<div className="relative h-auto w-auto xl:flex lg:flex md:flex hidden items-center gap-10 text-sm font-normal text-gray-600">
								<Link
									to="/"
									className="relative h-auto w-auto flex items-center justify-center"
								>
									Home
									<div className="absolute top-[25px] h-[3px] w-[40px] bg-[#2E5090] opacity-30"></div>
								</Link>
								<Link
									to="/images"
									className="relative h-auto w-auto"
								>
									Images
								</Link>
								<Link
									to="/popular"
									className="relative h-auto w-auto"
								>
									Popular
								</Link>
								<Link
									to="/templates"
									className="relative h-auto w-auto"
								>
									Templates
								</Link>
								<Link
									to="/recent"
									className="relative h-auto w-auto"
								>
									Recents
								</Link>
							</div>
						</div>
					</div>
					<div className="relative h-auto w-auto">
						<div className="relative h-auto w-auto flex items-center gap-6"></div>
					</div>
					<div className="relative h-auto w-auto">
						<div className="relative h-auto w-auto flex items-center gap-6">
							<div className="relative h-[35px] w-auto rounded-full bg-gray-50 xl:flex lg:flex flex items-center border px-2 gap-2">
								<div className="relative h-auto w-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="15"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="feather feather-search"
									>
										<circle cx="11" cy="11" r="8"></circle>
										<line
											x1="21"
											y1="21"
											x2="16.65"
											y2="16.65"
										></line>
									</svg>
								</div>
								<input
									className="relative bg-transparent h-full w-[120px] outline-none text-xs"
									type="text"
									placeholder="Search"
									name="searchPhoto"
								/>
							</div>
							<Link
								to="profile"
								className="relative h-auto w-auto"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-user"
								>
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</Link>
							<div
								className="relative h-auto w-auto xl:block lg:block md:block hidden text-gray-800"
								onClick={toggleDarkMode}
							>
								<FiSun size={20} />
							</div>
							<div className="relative h-auto w-auto xl:hidden lg:hidden md:hidden flex items-center justify-center">
								<div className="relative h-auto w-auto grid gap-[7px]">
									<div className="relative h-[2px] w-[20px] bg-black rounded-full"></div>
									<div className="relative h-[2px] w-[20px] bg-black rounded-full"></div>
									<div className="relative h-[2px] w-[20px] bg-black rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
