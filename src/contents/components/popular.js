import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import PopularImageList from "./imageTypes/popularImgList";

export default function Popular() {
	const popularPhotos = [
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
					<div className="relative h-auto w-full flex items-center gap-64 py-8 overflow-hidden justify-center">
						<div className="relative h-auto w-[500px]">
							<div className="relative h-auto w-auto text-2xl font-light tex-gray-700">
								A creative agency
							</div>
							<div className="relative h-auto w-auto">
								<div className="relative h-auto text-sm font-normal text-gray-500 w-full mt-8">
									Visit and uplooad with in worlds most strongest security
									system. No worry no problems just click and upload.
								</div>
								<div className="relative h-auto text-sm font-medium text-gray-500 w-full mt-8">
									Upload your favorite images and follow people. Enjoy every
									movement and capture them.
								</div>
								<div className="relative mt-16 h-auto w-auto flex items-center gap-6">
									<div className="relative h-[40px] w-auto px-8 flex items-center justify-center rounded-full bg-[#2E5090] text-white">
										Upload
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
					<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4">
						<div className="relative h-auto w-full flex items-center gap-2 flex-wrap">
							{popularPhotos.map((prop, index) => (
								<PopularImageList props={prop} key={index} />
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
