import React from 'react';

import NewsItem from './news_item';

const newsList = (props) =>{
    console.log('Props inside news list  ', props);

    const items = props.newsData.map((item)=>{
        return(
           <NewsItem key={item.id} item={item}/>
        )
    })
    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;