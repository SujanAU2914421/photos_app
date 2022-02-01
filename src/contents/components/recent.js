import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import RecentImageList from "./imageTypes/recentImgList";
import MyRecentImageList from "./imageTypes/myRecentImgList";

export default function Recent() {
	const resentPhotos = [
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
	const myResentPhotos = [
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
					<div className="relative h-auto w-full hidden items-center gap-64 py-16 overflow-hidden justify-center">
						<div className="relative h-auto w-[500px]">
							<div className="relative h-auto w-auto text-2xl font-light tex-gray-700">
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
									<div className="relative h-[250px] w-[300px] overflow-hidden rounded-xl cursor-pointer group border">
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
									<div className="relative h-[250px] w-[200px] overflow-hidden rounded-xl cursor-pointer group border">
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
