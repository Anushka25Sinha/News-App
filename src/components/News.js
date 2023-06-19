import React from 'react'
import Cards from './Cards'


export default function News(props) {
    return (
        <div class='container'>
            {/* <Cards/>
        <Cards/>
        <Cards/>
        <Cards/> */}
            {
                //data &&
                props.data.map(function (e) {
                    return (
                        <Cards
                            author={e.author}
                            title={e.title}
                            description={e.description}
                            url={e.url}
                            urlToImage={e.urlToImage}
                            content={e.content}
                        />
                    )
                })
            }
        </div>
    )
}
