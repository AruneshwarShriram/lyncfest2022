/* eslint-disable no-unused-vars */
import React from "react";
import Hack from "../hack in hub.png"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

// Import the functions you need from the SDKs you need

import { Component } from "react";
//import Blink from 'react-blink-text';
import Font, { Text } from 'react-font';
import Shimmer from "react-shimmer-effect";

import { FaArrowCircleUp } from 'react-icons/fa';

import ScrollToTop from "react-scroll-to-top";

import Hack1 from "../hack_in_hub-removebg-preview.png"
const Title=()=>{
    return(
        <div class="py-10 bg-black" id="Title">
            <center class="">
                <div class="">
                <img src={Hack1} height="500" width="500" alt="as" />


            
                <header class="max-w-full md:w-1/2 mx-auto">
                    <div class="relative flex flex-col justify-center items-center space-y-3 mx-10">
                        <svg viewBox="0 0 80 120" fill="currentColor" class="absolute bottom-0 left-0 z-0 w-32 text-white">
                            <defs>
                                <pattern id="1" x="0" y="0" width=".1" height=".1">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#1)" width="80" height="120"></rect>
                        </svg>
                        <svg viewBox="0 0 80 120" fill="currentColor" class="absolute top-10 right-0 z-0 w-32 text-yellow-500">
                            <defs>
                                <pattern id="2" x="0" y="0" width=".1" height=".1">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#2)" width="80" height="120"></rect>
                        </svg>
                        
                            <h1 class="text-3xl font-bold text-center text-teal-600 "><h1 class="py-2">Join ~ Build ~ Learn</h1><br/> <span class="text-blue-300">
                            Bring-out your hidden tech genius in this 24 hours hackathon by solving difficult problems faced by the folks.
                            </span></h1>
                        {/*<p class="text-lg font-medium text-center">
                            Join. Build. Learn. Tryhard in Hack in Hub ‘22. Bring-out your hidden tech genius in this 24 hours hackathon by solving difficult problems faced by the folks.
    </p>*/}
    <div class="py-5">
                            <div class="flex items-center space-x-5 text-md font-semibold pt-1">
                                <a href="re" class="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-gray-900">Register</a>
                                <a href="re" class="px-5 py-2 bg-pink-900 text-white rounded-md hover:bg-blue-600">Details</a>
                            </div>
    </div>
                        
                    </div>
                    
                </header>
                    
                    
                    <div class="py-10">
                        <div class="flex justify-center space-x-10 m-10 font-semibold">
                            <a class="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center space-x-2" href="re">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                        clip-rule="evenodd" />
                                </svg>
                                <div class="flex">
                                    <span class="text-2xl text-slate-700">Venue : </span>
                                    <p class="font-bold text-xl py-0 px-0 text-slate-700"><br />
                                        {'\n'}
                                        @Sigma Auditorium<br />
                                        Sairam Institute

                                    </p>
                                </div>

                            </a>
                            <a class="bg-teal-500 text-white px-8 py-2 rounded-md flex items-center space-x-2" href="re">
                                <span class="text-2xl text-slate-700">Team : </span>
                                <p class="font-bold text-xl py-0 px-0 text-slate-700"><br />
                                    {'\n'}
                                    <text class="text-2xl">2~4</text> per Team<br />


                                </p>


                            </a>
                            <a class="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center space-x-2" href="re">
                                <span class="text-2xl text-slate-700">Dummy : </span>
                                <p class="font-bold text-xl py-0 px-0 text-slate-700"><br />
                                    {'\n'}
                                    <text class="text-xl">Scorcese</text> Tarantino<br />


                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>



                    </div>
                    </div>
                
            </center>
        
        </div>
    )
}
export default Title;