import React ,{useState} from 'react'

export default function TextForm(props) {

    function handleUpcase(){
          console.log('clicked')
          
         let newText=text.toUpperCase()
          setText(newText)
    }

    // function handleBold(){
    //     console.log("bold")
        
    //     let d= document.getElementById("myBox").getAttribute('value')
        
    //     setText(d)
   

    // }

function handleOnchange(event){
    console.log("Change")
    setText(event.target.value)
}
let myStyle={
  color: props.mode==='dark'?'white':'black',
 }


    const [text,setText]=useState("")

  return (
    <> <div className="mb-3">
    <h1 style={myStyle}>{props.heading}</h1>
    <label htmlFor="myBox" className="form-label" style={myStyle}>{props.texthere} </label>
    <textarea className="form-control" id="myBox" rows="10"  value={text} onChange={handleOnchange}></textarea>
  </div>

  <button className="btn btn-primary" onClick={handleUpcase}> Upper Case</button>
  {/* <button className="bold" }>Bold</button> */}

  <div className="container my-3">
    <p style={myStyle}>Word Count: {text.split(" ").filter((e)=>{return e.length!==0}).length}</p>
    <p style={myStyle}>Number of characters: {text.length}</p>
    <p style={myStyle}>Time to read it: {0.08*(text.split(" ").filter((e)=>{return e.length!==0}).length)}</p>
  </div>
 
   
  </>
   
     
  
  )
}
