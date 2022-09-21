import React from "react";
import Quiz from "../imgs/legionz.png";
import "../Events.css";

import Fresa from "../imgs/fresa.png";
import Tagros from "../imgs/tagros.png";
import Sirsub from "../imgs/sirsub.png";
import Hope from "../imgs/hope.png";


const Sponsor=()=>{
    return(
        <div id="sponsers" class="bg-black py-10">
            <center class="text-3xl font-nunito text-yellow-500 font-bold py-10">Sponsors</center>
            
            <div class="cards1 grid-cols-4 px-28 py-10">
                <a href="https://fresatechnologies.com/">
                <div className="card__container">
                    <div className="card " >
                        <div className="logo_container" data-aos=" zoom-in">

                            <img src={Fresa} alt="memeicon" />

                        </div>
                        
                    </div>
                    </div></a>
                <a href="https://tagros.com/">
                <div className="card__container">
                    <div className="card ">
                        <div className="logo_container" data-aos=" zoom-in">

                            <img src={Tagros} alt="memeicon" />

                        </div>
                        
                    </div>
                </div></a>
                <a href="https://sirsubinfotech.com/">
                <div className="card__container">
                    <div className="card " >
                        <div className="logo_container" data-aos="zoom-in">

                            <img src={Sirsub} alt="memeicon" />

                        </div>
                        
                    </div>
                    </div></a>
                <a href="https://www.hopelearning.net/">
                <div className="card__container">
                    <div className="card " >
                        <div className="logo_container" data-aos="zoom-in">

                            <img src={Hope} alt="memeicon" />

                        </div>
                        
                    </div>
                </div></a>
                
            </div>
            
        </div>
    )
}
export default Sponsor;