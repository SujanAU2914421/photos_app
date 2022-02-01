import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import RecentImageList from "./imageTypes/recentImgList";
import MyImages from "./imageTypes/myImages";

export default function Profile() {
	const myPhotos = [
		{
			userName: "alan walker",
			linkOfImg: "/images/mac.png",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/group.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/business.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mac_book.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mac.png",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/group.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/business.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mac_book.jpg",
			date: "2020/12/12 - 8:21",
		},
	];
	return (
		<>
			<div className="relative h-full w-full overflow-y-auto">
				<div className="relative h-auto w-full px-0 py-0">
					<div className="relative h-auto w-full px-0 py-0">
						<div className="relative h-auto w-full pt-[150px]">
							<div className="absolute h-[300px] w-full top-0 scale-[1] px-32">
								<div
									className="relative h-full w-full scale-[1]"
									style={{
										background: "url(/images/peacefulLake.jpg)",
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
								>
									<div className="relative h-full w-full p-3 flex group">
										<div className="relative flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200 cursor-pointer delay-1000 border border-white text-white px-3 text-[10px] h-[40px] w-auto">
											<div>Change your background image</div>
										</div>
									</div>
								</div>
							</div>
							<div className="relative  h-auto w-full flex justify-center gap-32">
								<div className="relative h-auto w-auto">
									<div className="relative h-auto w-auto grid place-content-center place-items-center gap-5">
										<div
											className="relative h-[200px] border-4 border-white w-[200px] rounded-full"
											style={{
												background: "url(/images/profilePic.jpg)",
												backgroundPosition: "",
												backgroundSize: "cover",
												backgroundRepeat: "no-repeat",
											}}
										></div>
										<div className="relative h-auto w-auto">
											<div className="relative h-auto w-auto grid gap-3 place-content-center place-items-center">
												<div className="relative h-auto w-auto text-gray-600 font-light text-[10px]">
													Welcome to my profile
												</div>
												<div className="relative h-auto w-auto text-black font-extrabold text-2xl">
													Nehyan Nalker
												</div>
												<div className="relative h-auto w-auto text-black font-light text-sm">
													Will some beutiful.
												</div>
											</div>
										</div>
										<div className="relative h-[40px] w-[150px] cursor-pointer text-black border text-center flex items-center justify-center border-black font-light text-sm">
											Edit profile
										</div>
									</div>
								</div>
								<div className="relative h-auto w-[400px] bg-white top-16 px-4 py-6">
									<div className="relative h-auto w-full grid gap-8 place-content-center">
										<div className="relative h-auto w-full pt-5">
											<div className="relative text-xl font-extrabold">
												Your detail
											</div>
											<div className="relative h-auto w-full pt-8">
												<div className="relative h-auto w-full flex gap-6">
													<div className="relative h-auto w-auto">
														<div className="relative h-auto w-auto px-4 grid gap-2">
															<div className="relative text-xl font-extrabold text-black">
																1.3k
															</div>
															<div className="relative text-xs font-light text-gray-500">
																total Uploads
															</div>
														</div>
													</div>
													<div className="relative h-auto w-auto">
														<div className="relative h-auto w-auto px-4 grid gap-2">
															<div className="relative text-xl font-extrabold text-black">
																10.3M
															</div>
															<div className="relative text-xs font-light text-gray-500">
																total Views
															</div>
														</div>
													</div>
													<div className="relative h-auto w-auto">
														<div className="relative h-auto w-auto px-4 grid gap-2">
															<div className="relative text-xl font-extrabold text-black">
																1.3M
															</div>
															<div className="relative text-xs font-light text-gray-500">
																total likes
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="relative h-auto w-full pt-5">
											<div className="relative h-auto w-full grid gap-4">
												<div className="relative h-auto w-full text-sm font-extrabold">
													Account Detail
												</div>
												<div className="relative h-auto w-auto">
													<div className="relative h-auto w-auto grid gap-4 grid-cols-2">
														<div className="relative h-auto w-auto">
															<div className="relative h-auto w-auto grid gap-2">
																<div className="relative h-auto w-auto text-xs font-light text-gray-500">
																	Joined
																</div>
																<div className="relative h-auto w-auto text-sm">
																	2021/9/21
																</div>
															</div>
														</div>
														<div className="relative h-auto w-auto">
															<div className="relative h-auto w-auto grid gap-2">
																<div className="relative h-auto w-auto text-xs font-light text-gray-500">
																	Gmail
																</div>
																<div className="relative h-auto w-auto text-sm">
																	Nalker@gmail.com
																</div>
															</div>
														</div>
														<div className="relative h-auto w-auto">
															<div className="relative h-auto w-auto grid gap-2">
																<div className="relative h-auto w-auto text-xs font-light text-gray-500">
																	Portfolio
																</div>
																<div className="relative h-auto w-auto text-sm text-blue-500">
																	http://wam.unaux.com/
																</div>
															</div>
														</div>
														<div className="relative h-auto w-auto col-span-2">
															<div className="relative h-auto w-auto grid gap-2">
																<div className="relative h-auto w-auto text-sm font-light text-black">
																	Links
																</div>
																<div className="relative h-auto w-auto">
																	<div className="relative h-auto w-auto flex items-center gap-4">
																		<div className="relative h-auto w-auto text-blue-500 cursor-pointer">
																			<div className="relative h-auto w-auto flex items-center gap-4">
																				<div className="relative h-auto w-auto">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="24"
																						height="24"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="3"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="feather feather-facebook"
																					>
																						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
																					</svg>
																				</div>
																			</div>
																		</div>
																		<div className="relative h-auto w-auto text-purple-500 cursor-pointer">
																			<div className="relative h-auto w-auto flex items-center gap-4">
																				<div className="relative h-auto w-auto text-xs font-light text-gray-500">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="24"
																						height="24"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="3"
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
																						<line
																							x1="17.5"
																							y1="6.5"
																							x2="17.51"
																							y2="6.5"
																						></line>
																					</svg>
																				</div>
																			</div>
																		</div>
																		<div className="relative h-auto w-auto text-blue-500 cursor-pointer">
																			<div className="relative h-auto w-auto flex items-center gap-4">
																				<div className="relative h-auto w-auto text-xs font-light text-gray-500">
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="24"
																						height="24"
																						viewBox="0 0 24 24"
																						fill="none"
																						stroke="currentColor"
																						strokeWidth="3"
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						className="feather feather-twitter"
																					>
																						<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
																					</svg>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4 pt-16 pb-8">
						<div className="relative text-xl font-light py-3">
							Images of you
						</div>
						<div className="relative h-auto w-full flex items-center gap-4 flex-wrap">
							<div className="relative h-[300px] w-[250px] overflow-hidden rounded-xl cursor-pointer group border">
								<div className="relative h-full w-full flex items-center justify-center">
									<div className="relative h-auto w-auto">
										<div className="relative h-auto w-auto grid gap-4 place-content-center place-items-center">
											<div className="relative h-auto w-auto text-xs font-light">
												<div className="relative h-[80px] w-[80px] flex items-center justify-center">
													<div className="absolute top-0 left-0 h-[60px] w-[60px] border border-black"></div>
													<div className="absolute bottom-0 right-0 h-[60px] w-[60px] border border-black"></div>
												</div>
											</div>
											<div className="relative text-xs font-light">
												Upload one
											</div>
										</div>
									</div>
								</div>
							</div>
							{myPhotos.map((prop, index) => (
								<MyImages props={prop} key={index} />
							))}
						</div>
					</div>
				</div>
				{/* for footer */}
				<div className="relative h-auto w-full">
					<Footer />
				</div>
			</div>
		</>
	);
}
