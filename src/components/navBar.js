import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<div className="relative h-full w-full">
				<div className="relative h-full w-full flex items-center justify-between px-32">
					<div className="relative h-auto w-auto">
						<div className="relative h-auto w-auto flex items-center gap-16">
							<div className="relative h-auto w-auto flex items-center justify-center text-xl font-extrabold text-[#2E5090]">
								Photos
							</div>
							<div className="relative h-auto w-auto flex items-center gap-10 text-sm font-normal text-gray-600">
								<Link
									to="/"
									className="relative h-auto w-auto flex items-center justify-center"
								>
									Home
									<div className="absolute top-[25px] h-[3px] w-[40px] bg-[#2E5090] opacity-30"></div>
								</Link>
								<Link to="/images" className="relative h-auto w-auto">
									Images
								</Link>
								<Link to="/popular" className="relative h-auto w-auto">
									Popular
								</Link>
								<Link to="/templates" className="relative h-auto w-auto">
									Templates
								</Link>
								<Link to="/recent" className="relative h-auto w-auto">
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
							<div className="relative h-[40px] w-auto rounded-full bg-gray-50 flex items-center border px-2 gap-2">
								<div className="relative h-auto w-auto">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="feather feather-search"
									>
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</div>
								<input
									className="relative bg-transparent h-full w-[200px] outline-none"
									type="text"
									placeholder="Search"
									name="searchPhoto"
								/>
							</div>
							<Link to="profile" className="relative h-auto w-auto">
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
							<div className="relative h-auto w-auto">
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
									className="feather feather-sun"
								>
									<circle cx="12" cy="12" r="5"></circle>
									<line x1="12" y1="1" x2="12" y2="3"></line>
									<line x1="12" y1="21" x2="12" y2="23"></line>
									<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
									<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
									<line x1="1" y1="12" x2="3" y2="12"></line>
									<line x1="21" y1="12" x2="23" y2="12"></line>
									<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
									<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
