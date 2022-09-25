/* eslint-disable no-unused-vars */
import React from "react";

import Hack1 from "../hack_in_hub-removebg-preview.png";
const Title = () => {
  return (
    <div class="py-10 bg-black" id="Title">
      <center class="">
        <div class="">
          <img src={Hack1} height="500" width="500" alt="as" />

          <header class="max-w-full md:w-1/2 mx-auto">
            <div class="relative flex flex-col justify-center items-center space-y-3 mx-10">
              <svg
                viewBox="0 0 80 120"
                fill="currentColor"
                class="absolute bottom-0 left-0 z-0 w-32 text-white"
              >
                <defs>
                  <pattern id="1" x="0" y="0" width=".1" height=".1">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#1)" width="80" height="120"></rect>
              </svg>
              <svg
                viewBox="0 0 80 120"
                fill="currentColor"
                class="absolute top-10 right-0 z-0 w-32 text-yellow-500"
              >
                <defs>
                  <pattern id="2" x="0" y="0" width=".1" height=".1">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#2)" width="80" height="120"></rect>
              </svg>

              <h1 class="text-3xl font-bold text-center text-teal-600 ">
                <h1 class="py-2">Join ~ Build ~ Learn</h1>
                <br />{" "}
                <span class="text-blue-300">
                  Bring-out your hidden tech genius in this 24 hours hackathon
                  by solving difficult problems faced by the folks.
                </span>
              </h1>
              {/*<p class="text-lg font-medium text-center">
                            Join. Build. Learn. Tryhard in Hack in Hub ‘22. Bring-out your hidden tech genius in this 24 hours hackathon by solving difficult problems faced by the folks.
    </p>*/}
              <div class="py-5">
                <div class="flex items-center space-x-5 text-md font-semibold pt-1">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdNcdV2l22sYJgrXZZYok9jGd21vClnyGyPCaWXrZp23I0uQw/viewform"
                    class="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-gray-900"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div class="py-10">
            <div class="flex justify-center space-x-10 m-10 font-semibold ">
              <div className="w-[250px] h-[250px] shadow-[2px_2px_20px_2px_#8673b1] bg-[#0AACBE] flex items-center justify-center rounded-md hover:scale-105 transition ease-in-out cursor-pointer ">
                <div class=" text-white px-4 py-2 rounded-md flex items-center space-x-2 ">
                  <div class="flex items-center flex-col">
                    <span class="text-3xl text-black mb-4">Venue </span>

                    <p class="font-bold text-2xl py-0 px-0 text-black">
                      <br />
                      {"\n"}
                      Sri Sai Ram Institute of technology
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[250px] bg-[#0AACBE] shadow-[2px_2px_20px_2px_#8673b1] flex items-center justify-center rounded-md hover:scale-105 transition ease-in-out">
                <div class=" text-white px-8 py-2 rounded-md flex items-center justify-center space-x-2 flex-col">
                  <p class="font-bold text-3xl py-0 px-0 text-black">
                    <br />
                    <text class="text-2xl">2~4</text> per Team
                    {"\n"}
                    <br />
                  </p>
                </div>
              </div>
              <div className="w-[250px] h-[250px] bg-[#0AACBE] shadow-[2px_2px_20px_2px_#8673b1] flex items-center justify-center rounded-md hover:scale-105 transition ease-in-out">
                <div class=" text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 flex-col">
                  <p class="font-bold text-3xl py-0 px-0 text-black">
                    <br />
                    {"\n"}
                    <p>Free Registration</p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
export default Title;
