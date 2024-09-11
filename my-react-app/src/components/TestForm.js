import React from 'react'
import { useState } from 'react'

export default function TestForm(props) { 
  const handleUpClick =()=>{
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert( "Converted to uppercase", "success")
    
  }
  const handleOnchange =(event)=>{
    setText(event.target.value)
  }
const handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase", "success")

}
const handleClearClick = ()=>{
  let newText = "";
  setText(newText);
  props.showAlert("Texts cleared", "success")

}
const handleCopy=()=>{
  var text =document.getElementById("myBox");
  text.select()
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("copied on clipboard", "success")

}
const handleRemoveSpace=() => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra space", "success")

}

  const [text, setText] = useState("")
    
  return (<>
    <div className='container'  style={{color:props.mode ==='light'?'black':'white'}}>
          <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3 my-1" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleUpClick}>convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
        </div>
      
    </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
           
         <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes read</p>
         <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  )
}
