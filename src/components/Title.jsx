import React from "react";
import Hand from "../images/writing.png"


function Title(){
    return(<div className="tilte">
            <div className="welcome">W E L C O M E <span className="to">T O</span>  B U L E T I N</div>
            <h4 className="craft">Craft narratives <img className="hand" src={Hand}></img> that ignite <span className="inspi">inspiration</span> 
            <i class="fas fa-light fa-lightbulb"></i>, </h4>
            <h4 className="craft"> <span className="inspi">knowledge</span> <i class="fa-sharp fa-solid fa-book"></i> , and 
            <span className="inspi"> entertainment </span> <i class="fa-solid fa-clapperboard"></i></h4>
    </div>)
}


export default Title;