import React from "react";

export default function ImageList({ props }) {
	return (
		<>
			<div className="relative h-[320px] w-[280px] overflow-hidden rounded-xl cursor-pointer group border">
				<div className="absolute top-0 left-0 h-full w-full z-10 group">
					<div className="relative px-3 py-3">
						<div className="relative group-hover:opacity-100 opacity-0 text-xs font-semibold text-white text-right ml-auto">
							Zoom in
						</div>
					</div>
					{/* user detail */}
					<div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
						<div className="relative h-auto w-full flex gap-4 justify-between">
							<div className="relative h-auto w-auto">
								<div className="relative h-auto w-auto grid gap-1">
									<div className="relative h-auto w-auto text-xs font-semibold">
										{props.userName}
									</div>
									<div className="relative h-auto w-auto text-[9px] font-light">
										{props.date}
									</div>
								</div>
							</div>
							<div className="relative h-auto w-auto flex font-extrabold gap-4">
								<div className="relative text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="17"
										height="17"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
									</svg>
									<div className="relative h-auto w-auto text-[9px]">198</div>
								</div>
								<div className="relative text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="17"
										height="17"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
										<circle cx="12" cy="12" r="3"></circle>
									</svg>
									<div className="relative h-auto w-auto text-[9px]">123</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-full w-full flex items-center justify-center overflow-hidden">
					<div
						className="absolute h-full w-full scale-[1] duration-500 group-hover:scale-[1.05]"
						style={{
							background: `url(${props.linkOfImg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
		</>
	);
}
