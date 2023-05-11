import React from "react";

function Navbar(){
    return (<div>

    <nav className="navbar navbar-expand-sm navbar-light">
    <span className="brnd h4">Buletin</span>
    <span className="line">|</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="nav">
          <li className="nav-item active" >
            <span className="nav-links" href="#">Stories</span>
          </li>
          <li className="nav-item">
            <span className="nav-links" href="#">Creator</span>
          </li>
          <li className="nav-item">
            <span className="nav-links" href="#">Community</span>
          </li>
          <li className="nav-item">
            <span className="nav-links" href="#">Subscribe</span>
          </li>
         
      </ul>
      <span className="right-side">
      <i class="fas fa-regular fa-pen-to-square write"></i> <span className="w-word">Write</span>
      <i class="fa-regular fa-bell bell"></i>
    
          
        <button className="profile-pic"><img src="https://5.imimg.com/data5/RF/GO/MY-40182304/boy-school-uniform-10x10.jpg"></img></button>
      </span>
    </div>
   </nav>

   </div>)
}


export default Navbar;
