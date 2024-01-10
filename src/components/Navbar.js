import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
        
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
            <input type="checkBox" className="form-check-input" id='flexSwitchCheckDefault' onClick={props.toggleMode} />
            <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Dark Mode</label>
          </div>

        </div>
      </div>
   </nav>
  )
} 

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: "Set title here",
    aboutText: "About text here"
}