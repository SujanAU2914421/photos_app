import React from "react";

export default function Footer() {
	return (
		<>
			<div className="relative h-auto w-full">
				<div className="relative h-auto w-full pt-28 pb-28 px-32">
					<div className="relative h-auto w-full">
						<div className="relative h-auto w-full flex justify-between">
							<div className="relative h-auto w-[300px]">
								<div className="relative grid grid-cols-2 gap-4">
									<div className="relative h-auto w-auto text-xl font-extrabold">
										Photos.
									</div>
									<div className="relative h-auto w-auto text-sm font-light text-gray-700">
										The website full of images and fun. Share this website to
										your friends.
									</div>
								</div>
							</div>
							<div className="relative h-auto w-[250px]">
								<div className="relative grid gap-4 grid-cols-2">
									<div className="relative h-auto w-auto">
										<div className="relative grid gap-4">
											<div className="relative h-auto w-auto text-sm font-light group cursor-pointer">
												Home
												<div className="absolute -bottom-2 h-[2px] opacity-0 group-hover:opacity-100 duration-200 w-full bg-gray-400"></div>
											</div>
											<div className="relative h-auto w-auto text-sm font-light group cursor-pointer">
												Popular
												<div className="absolute -bottom-2 h-[2px] opacity-0 group-hover:opacity-100 duration-200 w-full bg-gray-400"></div>
											</div>
										</div>
									</div>
									<div className="relative h-auto w-auto">
										<div className="relative grid gap-4">
											<div className="relative h-auto w-auto text-sm font-light group cursor-pointer">
												Recent
												<div className="absolute -bottom-2 h-[2px] opacity-0 group-hover:opacity-100 duration-200 w-full bg-gray-400"></div>
											</div>
											<div className="relative h-auto w-auto text-sm font-light group cursor-pointer">
												more
												<div className="absolute -bottom-2 h-[2px] opacity-0 group-hover:opacity-100 duration-200 w-full bg-gray-400"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative h-auto">
								<div className="relative h-auto w-auto flex items-center gap-4">
									<div className="relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="currentColor"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-facebook"
										>
											<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
										</svg>
									</div>
									<div className="relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-twitter"
										>
											<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
										</svg>
									</div>
									<div className="relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-instagram"
										>
											<rect
												x="2"
												y="2"
												width="20"
												height="20"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
											<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-[40px] w-full flex items-center justify-between px-32">
					<div className="relative text-[13px] font-light text-gray-500">
						2021-Photos @copyright
					</div>
					<div className="relative text-[13px] font-light text-gray-500">
						Privacy policy
					</div>
				</div>
			</div>
		</>
	);
}
