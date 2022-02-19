import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import RecentImageList from "./imageTypes/recentImgList";
import MyRecentImageList from "./imageTypes/myRecentImgList";

export default function Recent() {
	const resentPhotos = [
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643715923961-3019006e3fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643716116926-3d6e90257b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643553041525-ef7f9f4655a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643716116926-3d6e90257b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1640622842924-3ae860f77265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			date: "2020/12/12 - 8:21",
		},
	];
	const myResentPhotos = [
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643553041525-ef7f9f4655a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643716116926-3d6e90257b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643553041525-ef7f9f4655a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"/images/https://images.unsplash.com/photo-1643622802547-e84404182024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80.jpg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1640622842924-3ae860f77265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653773680-eb00565bcbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
			date: "2020/12/12 - 8:21",
		},
	];
	return (
		<>
			<div className="relative h-full w-full overflow-y-auto">
				<div className="relative h-auto w-full px-0 py-0">
					<div className="relative h-auto w-full hidden items-center gap-64 py-16 overflow-hidden justify-center">
						<div className="relative h-auto w-[500px]">
							<div className="relative h-auto w-auto text-2xl font-light text-gray-700">
								Down are the most recent Photos uploaded in cloud.
							</div>
							<div className="relative h-auto w-auto">
								<div className="relative h-auto text-sm font-normal text-gray-500 w-full mt-8">
									Visit and uplooad with in worlds most strongest security
									system. No worry no problems just click and upload. Upload
									your favorite images and follow people. Enjoy every movement
									and capture them.
								</div>
								<div className="relative h-auto text-sm font-medium text-gray-500 w-full mt-8">
									you havent uploaded any photos till now.
								</div>
								<div className="relative mt-16 h-auto w-auto grid gap-6">
									<div className="relative h-[40px] w-auto px-8 flex items-center justify-center rounded-full bg-[#2E5090] text-white">
										Upload now
									</div>
									<div className="relative h-auto w-auto text-xs font-light text-gray-600">
										The link redirects you to your profile
									</div>
								</div>
							</div>
						</div>
						<div className="relative h-auto w-auto flex items-center justify-center">
							<div className="relative h-[300px] w-auto flex items-center justify-center">
								<div
									className="relatiive flex items-center justify-center h-full w-auto"
									style={{ transform: "scale(3)" }}
								>
									<MainSvg />
								</div>
							</div>
						</div>
					</div>
					<div className="relative h-auto w-full overflow-hidden">
						<div
							className="relative h-[400px] w-full flex items-center justify-center"
							style={{
								background: `url(${myResentPhotos[0].linkOfImg})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						></div>
					</div>
					<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4 pb-16">
						<div className="relative text-xl font-light pt-3 pb-2">Yours</div>
						<div className="relative h-auto w-full">
							<div className="relative w-full overflow-x-auto overflow-y-hidden h-[300px]">
								<div className="absolute h-full w-auto flex items-center gap-2 py-4">
									<div className="relative h-[250px] w-[300px] overflow-hidden rounded-xl cursor-pointer https://images.unsplash.com/photo-1643622802547-e84404182024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80 border">
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
									{myResentPhotos.map((prop, index) => (
										<MyRecentImageList props={prop} key={index} />
									))}
									<div className="relative h-[250px] w-[200px] overflow-hidden rounded-xl cursor-pointer https://images.unsplash.com/photo-1643622802547-e84404182024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80 border">
										<div className="relative h-full w-full flex items-center justify-center">
											<div className="relative h-auto w-auto">
												<div className="relative h-auto w-auto grid gap-4 place-content-center place-items-center">
													<div className="relative h-auto w-auto text-xs font-light">
														<div className="relative h-[80px] w-[80px] flex items-center justify-center">
															<div className="absolute h-[40px] w-[2px] bg-black"></div>
															<div className="absolute h-[2px] w-[40px] bg-black"></div>
														</div>
													</div>
													<div className="relative text-xs font-light">
														Load more
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4">
						<div className="relative text-xl font-light py-3">Worlds</div>
						<div className="relative h-auto w-full flex items-center gap-4 flex-wrap">
							{resentPhotos.map((prop, index) => (
								<RecentImageList props={prop} key={index} />
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
