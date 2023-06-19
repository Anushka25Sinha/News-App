import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // <div>Navbar</div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" href="/">Newsify</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Home" >Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/AboutUs">About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ContactUs">Contact Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/News">News</Link>
            </li>
            
            

          </ul>
            <div>
              <input
                onchange={e => props.setquery(e.target.value)}
                type="search"
                placeholder="Search Here"
                value= {props.query}>
              </input>
              <button onClick={props.HandleSearch}>Search</button>
            </div>
        </div>
      </div>
    </nav>
  )
}
