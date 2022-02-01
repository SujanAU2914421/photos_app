import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import MainSvg from "../components/mainSvg";

export default function Hoome() {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto">
        <div className="relative h-auto w-full px-0 py-0">
          <div className="relative h-auto w-full px-0 py-0">
            <div className="relative h-auto w-full flex items-center gap-64 py-8 overflow-hidden justify-center flex-wrap-reverse">
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
                    <Link
                      to="/profile"
                      className="relative h-[40px] w-auto px-8 flex items-center justify-center rounded-full bg-[#2E5090] text-white"
                    >
                      Upload
                    </Link>
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
          </div>
          <div className="relative h-auto w-full pb-16">
            <div className="relative h-auto w-full mt-8 px-32">
              <div className="relative h-auto w-5/12">
                <div className="relative h-auto w-full">
                  <div className="text-3xl font-light text-gray-700">
                    Recntly posted
                  </div>
                  <div className="relative h-auto w-full text-sm font-light mt-6">
                    There are many popular images that you should checkout
                  </div>
                  <div className="relative text-sm font-light mt-3 underline text-blue-500">
                    Share link
                  </div>
                </div>
                <div className="relative h-auto w-auto text-sm flex items-center gap-2 capitalize mt-3 font-medium">
                  Most popular posts -
                  <Link
                    to="/popular"
                    className="relative text-xs text-gray-600 font-light"
                  >
                    see all
                  </Link>
                </div>
              </div>
              <div className="relative h-auto w-full">
                <div className="relative h-[400px] w-[full]">
                  <div className="relative h-full w-full overflow-x-auto overflow-y-hidden">
                    <div className="absolute h-full w-auto flex items-center gap-4">
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/group.jpg)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/lake.webp)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/business.jpg)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
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
            <div className="relative h-auto w-full mt-16 px-32">
              <div className="relative h-auto w-5/12">
                <div className="relative h-auto w-full">
                  <div className="text-3xl font-light text-gray-700">
                    Recntly posted
                  </div>
                  <div className="relative h-auto w-full text-sm font-light mt-6">
                    The popular peoples recent post. There are thoussands of
                    recently added photos. The posting rate is icreasing day by
                    day. You can also Post photos.
                  </div>
                  <div className="relative text-sm font-light mt-3 underline text-blue-500">
                    Share link
                  </div>
                </div>
                <div className="relative h-auto w-auto text-sm flex items-center gap-2 capitalize mt-3 font-medium">
                  Most recent posts -
                  <Link
                    to="/recent"
                    className="relative text-xs text-gray-600 font-light"
                  >
                    see all
                  </Link>
                </div>
              </div>
              <div className="relative h-auto w-full">
                <div className="relative h-[400px] w-[full]">
                  <div className="relative h-full w-full overflow-x-auto overflow-y-hidden">
                    <div className="absolute h-full w-auto flex items-center gap-4">
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/field.webp)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/mountain.webp)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-[90%] w-[300px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden group">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div
                            className="relative h-full w-full scale-[1] group-hover:scale-[1.1] duration-500"
                            style={{
                              background: "url(/images/business.jpg)",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <div className="absolute z-10 h-full w-full cursor-pointer group flex items-end justify-center duration-300 hover:opacity-100">
                            <div className="relative h-full w-full flex items-center justify-center bottom-0">
                              <div className="relative h-auto group-hover:opacity-100 opacity-0 text-white w-auto flex items-center justify-center gap-4">
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-eye"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                                <div className="relative text-center w-auto h-auto grid place-items-center gap-1">
                                  <div className="relative h-auto w-auto">
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
                                      className="feather feather-heart"
                                    >
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto text-[10px] font-light">
                                    100090
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-auto w-full py-4 px-4 text-white">
                                <div className="relative h-auto w-auto flex items-center gap-4">
                                  <div className="relative h-[40px] w-[40px] rounded-full flex items-center justify-center border">
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
                                      className="feather feather-user"
                                    >
                                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                      <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                  </div>
                                  <div className="relative h-auto w-auto">
                                    <div className="relative h-auto w-auto grid gap-1">
                                      <div className="relative h-auto w-auto text-xs font-semibold">
                                        Alan walker
                                      </div>
                                      <div className="relative h-auto w-auto text-[9px] font-light">
                                        2020/12/12 - 8:21
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
            <div className="relative h-auto w-full mt-28 px-32 hidden">
              <div className="relative h-auto w-auto text-sm font-light flex items-center gap-2 capitalize bottom-4">
                Most recent posts -
                <Link to="/recent" className="relative text-xs text-gray-600">
                  see all
                </Link>
              </div>
              <div className="relative h-auto w-full">
                <div className="relative h-auto w-full flex flex-wrap gap-2">
                  <div className="relative h-[300px] w-[250px] flex items-center justify-center rounded-xl overflow-hidden">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div
                        className="relative h-full w-full"
                        style={{
                          background: "url(/images/field.webp)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative h-[300px] w-[250px] flex items-center justify-center rounded-xl overflow-hidden">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div
                        className="relative h-full w-full"
                        style={{
                          background: "url(/images/field.webp)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative h-[300px] w-[250px] flex items-center justify-center rounded-xl overflow-hidden">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div
                        className="relative h-full w-full"
                        style={{
                          background: "url(/images/field.webp)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
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
