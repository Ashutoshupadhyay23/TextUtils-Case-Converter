import React, {useState} from 'react'

export default function TextForm(props) {


  const handleUpClick =()=>{
     
     let newText = text.toUpperCase();        setText(newText);
     props.showAlert('Converted to uppercase', 'success');
    }

    const handleLowerClick =()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }

    const handleClearClick =()=>{
      let newText = ''; 
      setText(newText);
      props.showAlert('Text Cleared','success');

    }

    const handleOnChange =(event)=>{
        
        setText(event.target.value );
    }

    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
      props.showAlert(' Text copied to clipboard', 'success');
    }


    const [text, setText] = useState('');
    // text = "new text";  // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 className='mb-2'>{props.heading}</h3>
      <div className="mb-3">
        <textarea  id="myBox" rows="7" placeholder='Enter text here...' className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3b4b5c':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conevrt to Uppercase</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Conevrt to 
      Lowercase</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview!'}</p>

    </div>
    </>
  )
}
