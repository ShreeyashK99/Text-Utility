import React, { useState } from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('Enter the text');
    const changeUpCase = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Lower Case",'success');

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const changeLoCase=()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lower Case",'success');
    }
    const clearText=()=>{
        setText("");
        props.showAlert("Text has been erased",'danger');
    }
    const handleCopy = ()=>{
        var text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied",'success');
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed",'success');
    }
    const handleCapital = ()=>{
    
        let newText = text.split(" ").map(text=>text.charAt(0).toUpperCase()+text.slice(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert("The data is capitalized",'success');
    }
    
        
    return (
        <div className={`bg-${props.mode}`}>
        <div className={`container bg-${props.mode}`}>
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className={`mb-3 ${props.mode}`}>
                <textarea className={`form-control text-${props.mode==='light'?'dark':'light' } bg-${props.mode}`} value={text} onChange={handleOnChange} id='my-box' rows='7'></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={changeUpCase}>Change to Uppercase</button>
                <button className="btn btn-success my-3 mx-1" onClick={changeLoCase}>Change to Lowercase</button>
                <button className="btn btn-danger my-3 mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-warning my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-success my-3 mx-1" onClick={handleCapital}>Make Capital</button>
            </div>
        </div>
        <div className="container my-3">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h1>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} words, {text.length} characters</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}> {0.008 * text.split(" ").length} Minutes to read</p>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter Something in above box to preview it here!"}</p>
        </div>
        </div>
    )};
