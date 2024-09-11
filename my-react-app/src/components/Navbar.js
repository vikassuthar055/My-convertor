import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Navbar(props) {
  return (
    <> 
< nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{fontWeight:'bold'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title} </Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
       </li>
        <li className="nav-item" style={{color:props.mode==='light'?'dark':'light'}}>
          <Link className="nav-link active" to="/About">About</Link>
        </li>
        {/* <li className="nav-item" style={{ color:props.mode==='light'?'dark':'light'}}>
          <Link className="nav-link" to="/">Contact Me </Link>
        </li> */}
      </ul>
      <div className="d-flex">
         <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}  style={{height:"30px",width:"30px",cursor:"pointer"}}>B</div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px",width:"30px",cursor:"pointer"}}>R</div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:"30px",width:"30px",cursor:"pointer"}}>G</div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px",width:"30px",cursor:"pointer"}}>Y</div>
        <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:"30px",width:"30px",cursor:"pointer"}}>SB</div>
        <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:"30px",width:"30px",cursor:"pointer"}}>GR</div>
      </div>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}  >
      < input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable Dark Mode":"Enable Light Mode"}</label>
      </div> */}
    </div>
  </div>
  </nav>
</>
 
      

  )
}
