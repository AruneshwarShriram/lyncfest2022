/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Hack from "../hack in hub.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { Component } from "react";
//import Blink from 'react-blink-text';
import Font, { Text } from 'react-font';
import Shimmer from "react-shimmer-effect";
import { FaArrowCircleUp } from 'react-icons/fa';
import ScrollToTop from "react-scroll-to-top";

import Hack1 from "../hack_in_hub-removebg-preview.png";
import Fest from "../logo-removebg-preview.png";


import Title from "./Title";
import Table from "./Table";
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false)

    return (
        <div class="">
            <ScrollToTop smooth
                viewBox="0 0 24 24"

                svgPath="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"
            />
            <nav className=" bg-conic-to-tl from-white via-blue-200 to-black h-24">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  py-0">
                    <div class="py-0">
                        <div class="float-left grid grid-flow-col">
                            <a href="/">
                                <img
                                    className="py-1"
                                    src={Fest}
                                    height={90}
                                    width={90}
                                    alt="Workflow"
                                />
                            </a>

                            <div class="py-8 px-3 text-3xl font-bold text-stone-100 font-nunito">
                                Lync Fest @ SIT</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-evenly h-16 py-11  font-bold">
                        <div className="flex  justify-evenly float-left">
                            <div className="hidden md:block py-5 px-5">
                                <div className="ml-10 flex items-baseline space-x-4 text-lg">
                                    <a
                                        href="#schedule"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                                    >
                                        Schedule
                                    </a>

                                    <a
                                        href="hackathon/PS"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        Problem Statements
                                    </a>

                                    <a

                                        href="#guidelines"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"

                                    >
                                        Guidelines
                                    </a>
                                    <a
                                        href="#domains"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        Domains
                                    </a>

                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        class="p-2 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSdNcdV2l22sYJgrXZZYok9jGd21vClnyGyPCaWXrZp23I0uQw/viewform?usp=sf_link"
                                            className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium"
                                        >
                                            Register
                                        </a></motion.div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>
            


        </div>
    );
}
export default Nav;