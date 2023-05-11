import React, { useEffect, useState } from "react";
import NewsGrid from "./NewsGrid";


function News(){

const [items, setItems] = useState([]);


useEffect(() => {
     fetch('https://newsapi.org/v2/everything?q=apple&from=2023-05-05&to=2023-05-05&sortBy=popularity&apiKey=9c4f9c614b414131853fd50d1b94c662')
     .then(res => res.json())
     .then(data => setItems(data.articles))
    },[])
console.log(items);

    return(
        <div>
            <h4 className="latest">Latest News</h4>
    
            <NewsGrid items={items} />
        </div>
    )
}


export default News;