import React from 'react'
// import { useState } from 'react'

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //       color:"white",
  //       backgroundColor: "black",
  //   });
    // const [btntext, setBtnText]=useState("Enable dark mode");

    // const toggleStyle = ()=>{
    //   if(mystyle.color==='white'){
    //      setMyStyle({
    //      color:"black",
    //      backgroundColor: "white",
    //     })
    //     setBtnText("Enable Dark mood")
    //   }
    //      else{
    //       setMyStyle( {
    //        color:"white",
    //        backgroundColor: "black"});
    //        setBtnText("Enble Light mode")}
    // }
  return (
    <div className='container'  style={{backgroundColor:"transparent"}}> 
        <h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}> About Us </h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item"  >
      <h2 className="accordion-header"  >
        <button style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        <strong>About developer. </strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
        <div className="accordion-body">
         Hello My name is vikas suthar I'm 26 years old I am from lakes of city UDAIPUR Rajasthan.I made this app as a my project.{/*} I done diploma Civil engineering from SS polytechnic college Udaipur. After completing my diploma civil engineering I inrolled for one year intership in maharana pratap airport udaipur as a trainee.After one year I got my one year apprentiship certificate from <strong>"AIRPORT AUTHORITY OF INDIA"</strong> but After that  I  could not get any job in this field with the time I lost my interest in this field then i desided to switch my career in IT so I started preparation .Now  I have skills for frontend developer like Html,css,java script,react js,node js etc.
        I have made a lot of projects based on HTML,CSS,JS and REACT JS that are mentioned in my portfolio. */}
        </div>
      </div>
    </div>
    <div className="accordion-item"  style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
      <h2 className="accordion-header">
        <button style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        <strong> About The App</strong>
      </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <p>Hy guys it is very simple and more interesting app by This  app not only you can type anything that you want but also you can convert the text in uppercase and lowercase,You can also copy the text and remove the extra spaces.  </p>
        </div>
      </div>
    </div>
    <div className="accordion-item"  style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
      <h2 className="accordion-header">
        <button style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        <strong> Email.</strong>

        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         <ul>
          <li>sutharvikas3291@gmail.com</li>
          <li>vikassuthar3291@gmail.com</li>
          </ul>
          </div>
      </div>
    </div>
  </div >
    
    </div>
  )
}
