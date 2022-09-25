import React from "react";
import Technical from "../imgs/technical-support.png";
import Technical1 from "../imgs/technical-support-removebg-preview.png";
import NonTech from "../imgs/garland-removebg-preview.png";

import Hackathon from "../imgs/hack in hub.png";
import Hack from "../imgs/hack_in_hub-removebg-preview.png";
import Letter from "../imgs/letter box.png";
import Legionz from "../imgs/legionz.png";
import Cliq from "../imgs/let's cliq.png";
import Link1 from "../imgs/link-a-link.png";
import Loop from "../imgs/loop up.png";
import Lync from "../imgs/lync fest.jpg";
import Lync1 from "../imgs/logo-removebg-preview.png";
import Quiz from "../imgs/la Inquizition.png";
import HH from "../imgs/HH.png";

import "../Events.css";
import { motion } from "framer-motion";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Title from "./Title";
import Aboutus from "./Aboutus";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Events(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div id="events">
            <div class="bg-black">
            <div class="font-bold text-5xl bg-black text-white py-10">Events</div>
            <br />
            <div class="events">
                
                <div className="cards grid-cols-3 px-28 py-16">
                    <div >
                       <div class="py-5">
                                <text class="text-xl font-nunito font-semibold text-white bottom-10">Technical Events</text>

                       </div>
                            
                        <a href="#technical">
                    <div className="card__container">
                        <div className="card " data-aos="zoom-in">
                            <div className="logo_container bg-black">

                                <img src={Technical1} class="" alt="memeicon" />

                            </div>
                            
                        </div>
                            </div>
                            </a></div>
                        <div>
                            <div class="py-5">
                                <text class="text-xl font-nunito font-semibold text-white bottom-10">Hackathon</text>

                            </div>
                             <a href="/hackathon">
                            
                            <div className="card__container">
                                <div className="card" data-aos="zoom-in">
                                    <div className="logo_container1 ">
                                        <br />

                                        <img class="er py-0" src={HH} height={700} width={700} alt="memeicon" />
                                        

                                    </div>
                                    
                                    
                                    
                                </div>
                                
                                
                            </div>
                            </a></div>
                            <div class="">
                                <div class="py-5">
                                <text class="text-xl font-nunito font-semibold text-white bottom-10" >Non Technical Events</text>

                                </div>
                            <a href="#nontech">
                            <div className="card__container">
                                <div className="card" data-aos="zoom-in">
                                    <div className="logo_container">

                                        <img src={NonTech} alt="memeicon" />

                                    </div>
                                    
                                </div>
                            </div>
                        </a></div>
                    

                </div>
            </div>
            <div id="technical" class="font-bold text-3xl text-white  py-10">Technical Events</div>
            <div className="cards grid-cols-3 px-28 py-10">
                {/*<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div class="flex items-center space-x-3">
                        <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                        <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                    </div>
                    <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
                </a>
                <div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
                    <FrontOfCard />
                    <BackOfCard />
    </div>*/}
                <a href="/letterbox">
                        <div className="card__container">
                            <div className="card " data-aos="zoom-in">
                                <div className="logo_container">

                                    <img src={Letter} alt="memeicon" />

                                </div>
                                <div className="content_container text-xl ">
                                    <p> Present your mind boggling and eye catching ideas here at Letter Box. Who knows? Your idea could be the next big thing in the world. What are you waiting for? Grab this amazing opportunity!

                                    </p>
                                </div>
                            </div>
                        </div>
                </a>

                
                <a href="/quiz">
                        <div className="card__container">
                            <div className="card" data-aos="zoom-in">
                                <div className="logo_container">

                                    <img src={Quiz} alt="memeicon" />

                                </div>
                                <div className="content_container">
                                    <p>Do you wanna show off how smart you are? What better place than at a quiz show! Brag your omniscient potential at La Inquizition.
                                    </p>
                                </div>
                            </div>
                        </div> 
                </a>
                
                <a href="/loopup">
                        <div className="card__container">
                            <div className="card" data-aos="zoom-in">
                                <div className="logo_container">

                                    <img src={Loop} alt="memeicon" />

                                </div>
                                <div className="content_container">
                                    <p>
                                        Are you hungry for a challenge? Do you think your coding skills can win this? Join Loop Up and find out!


                                    </p>
                                </div>
                            </div>
                        </div>
                </a>
                

            </div>

            <br />

            <div id="nontech" class="font-bold text-3xl text-white  py-10">Non - Technical Events</div>
            
            <div className="cards grid-cols-3 px-28 py-10">
                <a href="lets-cliq">
                        <div className="card__container">
                            <div className="card" data-aos="zoom-in">
                                <div className="logo_container">

                                    <img src={Cliq} alt="memeicon" />

                                </div>
                                <div className="content_container">
                                    <p>Let’s Cliq the wonders, Share the snap, and Celebrate photography.

                                    </p>
                                </div>
                            </div>
                        </div>
                </a>
                



                <a href="/legionz">
                        <div className="card__container">
                            <div className="card" data-aos="zoom-in">
                                <div className="logo_container">
                                    <img src={Legionz} alt="memeicon" />
                                </div>
                                <div className="content_container">
                                    <p>
                                        Gamers! Assemble to grab your crown at Legionz. PS: We have certified grass free zones. So no need to touch grass ;)

                                    </p>
                                </div>
                            </div>
                        </div>
                </a>
                
                
                <a href="/link-to-link">
                        <div className="card__container">

                            <div className="card" data-aos="zoom-in">

                                <div className="logo_container">

                                    <img src={Link1} alt="memeicon" />

                                </div>
                                <div className="content_container">
                                    <p>
                                        Test your deduction skills. Connect the dots and find the words. Link-a-Link will puzzle your brains.


                                    </p>
                                </div>


                                <div className="logo_container">

                                    <img src={Link1} alt="memeicon" />

                                </div>
                                <div className="content_container">
                                    <p>
                                        Test your deduction skills. Connect the dots and find the words. Link-a-Link will puzzle your brains.


                                    </p>
                                </div>
                            </div></div>
                </a>
                
                        
                        
            </div>
                <div class="flex-col grid-cols-3 justify-evenly">
                    <center>
                    <div class="px-20 py-20">
                        <text class="text-white font-bold text-3xl "> Individual Events</text>
                        <div class=" container h-20 w-48 py-16">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.5 }}
                                class="py-3  px-10 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white">
                                <a
                                        href="https://forms.gle/E7YCbJiyakyj8bb79"
                                    className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                                >
                                    Register
                                </a></motion.div>

                        </div></div></center>
                    <center>
                        <div class="px-20 py-20">
                            <text class="text-white font-bold text-3xl "> Group Events</text>
                            <div class=" container h-20 w-48 py-16">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 1 },
                                    }}
                                    whileTap={{ scale: 0.5 }}
                                    class="py-3  px-10 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white">
                                    <a
                                        href="https://forms.gle/ynHQpAtb4GqtVSTB7"
                                        className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                                    >
                                        Register
                                    </a></motion.div>

                            </div></div></center>
                    </div>

            </div></div>)
} 
export default Events;