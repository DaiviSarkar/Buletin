import React from "react";

function NewsItem({item}){

const webURL = item.url;
const website = webURL.split("https://").pop().split("/")[0];

const date = item.publishedAt;
const formatDate = date.replace('T',' ');
const formatTime = formatDate.replace('Z', ' ');

const favi = "https://www.google.com/s2/favicons?domain="+ website + "&sz=10";

    return(
        <a href={item.url} className="article">
            <div className="article-image">
            <img src={item.urlToImage} alt={item.title} />
            </div>
            <div className="article-content">
                <div className="article-source">
                <img src={favi} alt={item.source.id}/>
                <span>{item.source.name}</span>
                </div>
                <div className="article-title">
                    <h6>{(item.title).substring(0,50)} ...</h6>
                </div>
                <p className="article-description">
                    {(item.description).substring(0,80)} ...
                </p>
                <div className="article-details">
                    <small><b>Published At : </b>{formatTime}</small>
                </div>
            </div>
        </a>

    )
}

export default NewsItem;