import React from "react";
import Movie from "../images/John-Wick-Chapter-4.jpg";
import Logo from "../images/png-clipart-netflix-round-logo-tech-companies-thumbnail.png";

function Mainnews(){
    return(<div>
    <div className="row">
    <div className="col-lg-6">
        <img className="mainnews-pic" src={Movie}></img>
        </div>
        <div className="des col-lg-6">
        <p className="net"><img className="n-logo" src={Logo}></img> Netflix . 12 minutes ago</p>
       <h1 className="news-head">Where To Watch 'John Wick : Chapter 4'</h1>
       <p className="seen">There's been no official announcement regarding John Wick: Chapter 4 streaming release. However, given it's a Lionsgate
       film, John Wick: Chapter 4 will eventually be released on Starz,...</p>
       <p className="seen"><span className="movies">Movies</span> . 4 min read</p>
    </div>
    </div>
    </div>)
}

export default Mainnews;