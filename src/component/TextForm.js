import React, { useState } from 'react'

export default function TextForm(props) {
    const clickToUpperCase=()=>{
        // console.log("Btn was clicked");
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const clickToLowerCase=()=>{
        // console.log("Btn was clicked");
        let newtext=text.toLowerCase();
        settext(newtext)
    }
    const handleOnChange=(event)=>{
        // console.log("onchange")
        settext(event.target.value);
    }
    const [text,settext]=useState("");
  return (
    
 
<div className="my-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myApp" rows="10"></textarea>
  <button className="btn btn-primary" onClick={clickToUpperCase} >Convert to upperCase</button>
  <button className="btn btn-primary" onClick={clickToLowerCase} >Convert to LowerCase</button>

</div>
      
    
  )
}
