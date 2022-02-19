/* eslint-disable */
import React, { useContext, useState } from "react";
import Footer from "../../components/footer";
import { MainContext } from "../../contexts/mainContext";
import MyImages from "./imageTypes/myImages";

import { db, __storage } from "../../config/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const MAXFILESIZE = 50000000;

export default function Profile() {
	const [data, setData] = useContext(MainContext);

	const [imageFile, setImageFile] = useState(null);

	const date = new Date();
	const pathname = "images/" + date.getTime();

	const userRef = doc(db, "users", "OXbqsSDjDPrgcM85xYs0");
	const storageRef = ref(__storage, pathname);

	const uploadImageToStorage = async (__imgData) => {
		await uploadString(storageRef, __imgData, "data_url")
			.then(async (res) => {
				await getDownloadURL(res.ref)
					.then(async (url) => {
						await updateDoc(userRef, {
							profileImage: url,
						})
							.then(() => alert("Updated"))
							.catch((err) => console.log(err));
						console.log(url);
					})
					.catch((err) => console.log(err));
			})
			.catch((error) => console.log(error));
	};

	const handleFileInput = (e) => {
		const file = e.target.files[0];

		if (e.target.files.length > 0 && file) {
			if (file.size > MAXFILESIZE) {
				alert("Image size is larger.\nPlease upload image size less then 5MB");
			} else {
				const fileReader = new FileReader();

				fileReader.readAsDataURL(file);

				fileReader.onload = () => {
					setImageFile(fileReader.result);

					uploadImageToStorage(fileReader.result);
				};
			}
		} else {
			return;
		}
	};

	const myPhotos = [
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643607656641-f41f3d0ce20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643691782629-f3174929a789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643722571244-91033408e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643722997021-7c1c5a5a1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643724245978-87d333044166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1638913662584-731da41f5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			date: "2020/12/12 - 8:21",
		},
		{
			userName: "alan walker",
			linkOfImg:
				"https://images.unsplash.com/photo-1643721025162-87efb03044d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
			date: "2020/12/12 - 8:21",
		},
	];

	return (
		<>
			<div className="relative h-full w-full overflow-auto">
				<div className="relative h-[500px] w-full flex items-start justify-center">
					<div className="relative w-9/12 h-full flex items-center justify-center">
						<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
							<img
								src="https://images.unsplash.com/photo-1643721025162-87efb03044d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80"
								alt="cover background"
								title="Cover image"
								className="absolute w-full h-auto"
							/>
						</div>

						<div className="absolute z-20 w-[90%] h-auto top-56 border backdrop-blur-3xl bg-white/90 rounded-md overflow-hidden p-6 flex">
							<div className="relative  h-auto w-5/12 grid">
								<div className="relative h-auto w-auto">
									<form
										action="#"
										onSubmit={(e) => e.preventDefault()}
										className="relative h-auto w-auto grid place-content-center place-items-center gap-5"
									>
										<label htmlFor="fileInput">
											<div className="relative cursor-pointer h-[200px] border-4 border-white w-[200px] rounded-full flex items-center justify-center overflow-hidden">
												<img
													src={
														imageFile
															? imageFile
															: data.user
															? data.user.profileImage
															: "https://images.unsplash.com/photo-1643721025162-87efb03044d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80"
													}
													alt=""
													className="absolute h-auto w-full"
												/>
											</div>
										</label>

										{/* file input */}
										<input
											id="fileInput"
											type={"file"}
											accept="image/x-png, image/jpg, image/jpeg"
											className="hidden"
											onChange={handleFileInput}
										/>

										<div className="relative h-auto w-auto">
											<div className="relative h-auto w-auto grid gap-3 place-content-center place-items-center">
												<div className="relative h-auto w-auto text-gray-600 font-light text-[10px]">
													Welcome to my profile
												</div>
												<div className="relative h-auto w-auto text-black font-extrabold text-2xl">
													{data.user ? data.user.name : "Unknown"}
												</div>
												<div className="relative h-auto w-auto text-black font-light text-sm">
													Will some beutiful.
												</div>
											</div>
										</div>
										<div className="relative h-[40px] w-[150px] cursor-pointer text-black border text-center flex items-center justify-center border-black font-light text-sm">
											Edit profile
										</div>
									</form>
								</div>
							</div>

							<div className="relative w-7/12 h-auto">
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
																{data.user
																	? data.user.email
																	: "example@gmail.com"}
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

				<div className="relative h-auto w-full mt-32 xl:px-32 lg:px-32 md:px-16 px-4 pt-16 pb-8">
					<div className="relative text-xl font-light py-3">Images of you</div>
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

				{/* for footer */}
				<div className="relative h-auto w-full">
					<Footer />
				</div>
			</div>
		</>
	);
}
