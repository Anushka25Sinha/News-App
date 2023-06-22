import React from 'react'
import "./Cards.css"
export default function Cards(props) {
  return (
    <div className='module'>
      <div className='thumbnail'>
        <img src={props.urlToImage}></img>

      </div>
      <div className='content'>
        <a href={props.url}target="_blank">
                <h1 className='title'>{props.title}</h1>
        </a>

        
        <h2 className='sub-title'>{props.description}</h2>
        

        <div className="description">{props.content}</div>

      </div>
    </div>
  )
}
