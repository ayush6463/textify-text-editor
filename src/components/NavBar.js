import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {

 let myStyle={
  color: props.mode==='dark'?'white':'black',
 }

  return (
    <div>
      <nav className={` navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" style={myStyle} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav"  >
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Link className="nav-link active" style={myStyle}  aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" style={myStyle} href="/">{props.Texthere}</a>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" style={myStyle} to="/Text">About</Link>
        </li>
        
      </ul>
   
    </div>
    <div className={`form-check form-switch  text-${props.Mode}`} >
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
    </div> 
  )
}
