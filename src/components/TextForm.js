import React, { useState } from 'react';
 

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const handleloClick = (event) => {
        let ltext = text.toLowerCase();
        setText(ltext);
       props.showAlert("Converted to lowerCase","success");

    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById('mytext');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="mytext" rows="10" onChange={handleOnChange} 
                    style={{ backgroundColor: props.mode === 'dark' ? 'rgb(12 47 92)' : 'white', 
                    color: props.mode === 'dark' ? 'white' : 'black' }}>

                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Space Remover</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text Summary</h2>
                <p> {text.split(" ").length} words, {text.length} characters</p>
                <p>{0.08 * text.split(" ").length}Minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
            </div>
        </>
    )
};
