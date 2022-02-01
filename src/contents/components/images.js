import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Footer from "../../components/footer";
import MainSvg from "../../components/mainSvg";
import ImageList from "./imageTypes/imageList";

export default function Images() {
	const naturePhotos = [
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
	];
	const beautyPhotos = [
		{
			userName: "alan walker",
			linkOfImg: "/images/pinkTree.jpeg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/lake.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/field.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/pinkTree.jpeg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/lake.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/field.webp",
			date: "2020/12/12 - 8:21",
		},
	];
	const sunsetsPhotos = [
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
	];
	const mountainsPhotos = [
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/glowMountain.jpeg",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/mountain.webp",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg: "/images/glowMountain.jpeg",
			date: "2020/12/12 - 8:21",
		},
	];
	const morePhotos = [
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
					<div className="relative h-auto w-full xl:px-32 lg:px-32 md:px-16 px-4">
						<div className="relative h-auto w-full flex items-center gap-64 py-8 overflow-hidden justify-center">
							<div className="absolute z-20 h-full w-full bg-transparent flex items-center justify-center xl:text-9xl lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white opacity-30 font-extrabold">
								Photos
							</div>
							<div className="relative h-[300px] w-full flex items-center justify-center">
								<div
									className="relative h-full w-full"
									style={{
										background: "url(/images/field.webp)",
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								></div>
							</div>
						</div>
					</div>
					<div className="relative h-auto w-full mt-8">
						<div className="relative h-auto w-auto xl:px-32 lg:px-32 md:px-16 px-4">
							<div className="relative h-auto w-full">
								<div className="relative h-auto w-full grid gap-4">
									<div className="relative h-auto w-full grid gap-4">
										<div className="relative h-auto w-full grid gap-4">
											<div className="relative h-auto w-auto text-xl text-light">
												Catagories
											</div>
											<div className="relative h-auto flex items-center gap-5 text-sm font-light flex-wrap">
												<Link to="/images" className="relative h-auto w-auto">
													Nature
												</Link>
												<Link
													to="/images/beauty"
													className="relative h-auto w-auto"
												>
													Beauty
												</Link>
												<Link
													to="/images/sunsets"
													className="relative h-auto w-auto"
												>
													Sunsets
												</Link>
												<Link
													to="/images/mountains"
													className="relative h-auto w-auto"
												>
													Mountins
												</Link>
												<Link
													to="/images/more"
													className="relative h-auto w-auto"
												>
													More
												</Link>
											</div>
										</div>
									</div>
									<Switch>
										<Route path="/images" exact>
											<div className="relative h-auto w-full flex flex-wrap gap-4 mt-4">
												{naturePhotos.map((photoData, index) => (
													<ImageList props={photoData} key={index} />
												))}
											</div>
										</Route>
										<Route path="/images/beauty">
											<div className="relative h-auto w-full flex flex-wrap gap-4 mt-4">
												{beautyPhotos.map((photoData, index) => (
													<ImageList props={photoData} key={index} />
												))}
											</div>
										</Route>
										<Route path="/images/sunsets">
											<div className="relative h-auto w-full flex flex-wrap gap-4 mt-4">
												{sunsetsPhotos.map((photoData, index) => (
													<ImageList props={photoData} key={index} />
												))}
											</div>
										</Route>
										<Route path="/images/mountains">
											<div className="relative h-auto w-full flex flex-wrap gap-4 mt-4">
												{mountainsPhotos.map((photoData, index) => (
													<ImageList props={photoData} key={index} />
												))}
											</div>
										</Route>
										<Route path="/images/more">
											<div className="relative h-auto w-full flex flex-wrap gap-4 mt-4">
												{morePhotos.map((photoData, index) => (
													<ImageList props={photoData} key={index} />
												))}
											</div>
										</Route>
									</Switch>
								</div>
							</div>
						</div>
					</div>
					{/* for footer */}
					<div className="relative h-auto w-full">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
