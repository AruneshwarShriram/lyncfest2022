import React from 'react'
import '../Events.css'
import Quiz from "../logo-removebg-preview.png"


function Events() {
    
    return (
        
        <div className="events bg-blue-800">
            
        
            <div className="cards grid-cols-3">
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
                
                <div className="card__container">
                    <div className="card" data-aos="zoom-in">
                        <div className="logo_container">

                            <img src={Quiz} alt="memeicon" />

                        </div>
                        <div className="content_container">
                            <p>Are you hungry for a challenge? Do you think your coding skills can win this? Join Loop Up and find out!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card" data-aos="zoom-in">
                        <div className="logo_container">

                            <img src={Quiz} alt="memeicon" />
                            
                        </div>
                        <div className="content_container">
                            <p>Are you hungry for a challenge? Do you think your coding skills can win this? Join Loop Up and find out!
</p>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card" data-aos="zoom-in">
                        <div className="logo_container">

                            <img src={Quiz} alt="memeicon" />
                            
                        </div>
                        <div className="content_container">
                            <p>Test your deduction skills. Connect the dots and find the words. Link-a-Link will puzzle your brains.
</p>
                        </div>
                    </div>
                </div>
                     <div className="card__container">
                        <div className="card"  data-aos="zoom-in">
                            <div className="logo_container">

                            <img src={Quiz} alt="memeicon" />
                                
                            </div>
                            <div className="content_container">
                            <p>Do you wanna show off how smart you are? What better place than at a quiz show! Brag your omniscient potential at La Inquizition.
</p>
                            </div>
                        </div>
                    </div>
                     <div className="card__container">
                        <div className="card"  data-aos="zoom-in">
                            <div className="logo_container">
                            <img src={Quiz} alt="memeicon" />
                            </div>
                            <div className="content_container">
                            <p>	Let’s Cliq the wonders, Share the snap, and Celebrate photography.</p>
                            </div>
                        </div>
                    </div>
                <div className="card__container">
                    <div className="card" data-aos="zoom-in">
                        <div className="logo_container">

                            <img src={Quiz} alt="memeicon" />
                            
                        </div>
                        <div className="content_container">
                            <p>Gamers! Assemble to grab your crown at Legionz. PS: We have certified grass free zones. So no need to touch grass ;) </p>
                        </div>
                    </div>
                </div>
                
            
            </div>
            
        
        </div>
        
    )
}

export default Events
