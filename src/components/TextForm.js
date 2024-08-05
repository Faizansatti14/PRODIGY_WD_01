import React, { useState } from 'react'  //usestate is a hook

export default function Text(props) {
  const [text, setText] = useState("Enter text here ");  //new state
  //setText('new text');
  
  const handleUpClick = () => {           //event handler
    //console.log("Uppercase was clicked " + text);
    let newtext= text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase!","success")
  }

  const handlelowChange=()=>{
    let newtext1= text.toLowerCase();
    setText(newtext1);
    props.showAlert("converted to lowercase!","success")
  }

  const handleToClipboard=()=>{
   navigator.clipboard.writeText(text);
   props.showAlert("Text copied to clipboard","success")
  }

  const handleToClear=()=>{
    if (!window.confirm('Do you want to delete the text')) return;
    {
      let newtext2="";
    setText(newtext2);
    }
    
   }

   const getButtonClass = () => {
    switch (props.mode) {
      case 'dark':
        return 'btn-dark-mode';
      case 'red':
        return 'btn-red-mode';
      default:
        return 'btn-light-mode';
    }
  };

 const handleonChange = (event) => {   //event handler
    setText(event.target.value);  //handle changes in input field
  }
  return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#052c3b':'white',color:props.mode==='dark'?'white':'black',caretColor: props.mode === 'dark' ? 'white' : 'black'}}/>
          </div>
          <button type="button" className={`btn ${getButtonClass()} mx-1`} onClick={handleUpClick}>convert to uppercase</button>
          <button type="button" className={`btn ${getButtonClass()} mx-1`} onClick={handlelowChange}>convert to lowercase</button>
          <button type="button" className={`btn ${getButtonClass()} mx-1`} onClick={handleToClipboard}>copy to clipboard</button>
          <button type="button" className={`btn ${getButtonClass()} mx-1`} onClick={handleToClear}>clear text</button>

      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Youe text summary</h1>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    
    </>
     
  )
}
