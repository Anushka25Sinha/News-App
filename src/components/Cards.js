import React from 'react'
import "./Cards.css"
export default function Cards(props) {
  return (
    <div class='module'>
      <div class='thumbnail'>
        <img src={props.urlToImage}></img>

      </div>
      <div class='content'>

        <h1 class='title'>{props.title}</h1>
        <h2 class='sub-title'>{props.description}</h2>
        

        <div class="description">{props.content}</div>

      </div>
    </div>
  )
}
