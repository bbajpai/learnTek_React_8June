import React from 'react';


const NewsItem = (props)=>{
    console.log('Inside news item ' , props);
    return(
         <div className="news_item">
                 <h3>{props.item.title}</h3>
                <p>
                     {props.item.feed}
                 </p>
         </div>
    )
}


export default NewsItem;