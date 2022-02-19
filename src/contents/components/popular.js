import React from "react";
// import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import PopularImageList from "./imageTypes/popularImgList";

export default function Popular() {
	const popularPhotos = [
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643322874167-95d2ba19aa65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643682702464-b11a1a0a9598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643653187392-ad4ce89d8ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643574546768-05ef9943b25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643560237570-3a53c6b9b8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643721914023-99f76af1136a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80https://images.unsplash.com/photo-1643721859448-4d241d04448b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643607656641-f41f3d0ce20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
	];
	return (
		<>
			<div className="relative h-full w-full overflow-y-auto">
				<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4 py-0">
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
						<div className="relative h-auto w-auto items-center justify-center xl:flex lg:flex md:flex hidden">
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
						<div className="relative h-auto w-full flex items-center gap-2 flex-wrap justify-start">
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
