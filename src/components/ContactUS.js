import React from 'react'
import "./ContactUS.css"

export default function ContactUS() {
  return (
    <div className="ContactUs-page">
      <div className="containerlog">

        <form action="/action_page.php">

          <h1>Contact Us </h1>
          <p>Please fill this form with a message.</p>

          <input type="text" placeholder="Name" required autofocus></input>
          <input type="email" placeholder="Email" required></input>
          <input type="tel" placeholder="Mobile Number" required></input>
          <textarea placeholder="Message" required></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>

  )
}
