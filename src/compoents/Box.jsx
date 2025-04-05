import React ,{useState}from 'react'



export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext= text.toUpperCase();
    settext(newtext); 
      }
    const handleOnChange = (event) => { 
    console.log("On change");
    settext(event.target.value);
    } 
    const handleLoClick = () => {
      let newText= text.toLowerCase();
      settext(newText);
    }
    const handleClearClick = () => {
      let newText= ('');
      settext(newText);
    }
    const handleCopyText = () => {
      
      navigator.clipboard.writeText(text);
    }

  const [text, settext] = useState('')
  return (
    <>
    < div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
      
      <div className="mb-3 my-3 mx-5">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} style={{background:props.mode==='light'?'white':'#CFCDDB',color:props.mode==='light'?'black':'white'}} placeholder={"Enter text here"} onChange={handleOnChange} id="TextArea" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-5" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary " onClick={handleLoClick}>Concert to Lowercase</button>
        <button className="btn btn-primary mx-5" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleCopyText}>Copy Text</button>
    </div>

    <div className="container mx-5 my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
