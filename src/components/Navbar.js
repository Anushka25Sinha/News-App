import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // <div>Navbar</div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="/"><b>Newsify</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" ><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/News"><b>News</b></Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/ContactUs"><b>Contact Us</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"to="/Login"><b>Login</b></Link>
            </li>
            
          </ul>

        </div>
        <form className="d-flex" role="search">
            <input className="form-control me-2"
              onChange={e => props.setquery(e.target.value)}
              type="search"
              placeholder="Search Here"
              value={props.query}>
            </input>
            <button className="btn btn-outline-success" onClick={props.HandleSearch}>Search</button>
          </form>

      </div>
    </nav>
  )
}
