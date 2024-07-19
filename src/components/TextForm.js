import React, {useState} from "react";

export default function TextForm(props) {
    //this is state declared using hook
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleclrClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        //this event.target.value is used to change the text
        setText(event.target.value)
    }

    //copy text
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "success");
  }

  //remove extra space
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed all Extra spaces from text", "success");
  }

    // const[text, setText] = useState('Enter text Here');
    const[text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#20212b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            //state display
            value={text} 
            onChange={handleOnChange}
            id="mybox"
            rows="15"
            style={{backgroundColor: props.mode==='light'?'white':'#20212b', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclrClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      {/* adding more logic to textutlis */}
      {/* /\s+/ regular expression for the whitespace and new line */}
      <div className="container" style={{color: props.mode==='dark'?'white':'#20212b'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
      </div>

    </>
  );
}
