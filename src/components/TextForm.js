import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('');

    // for uppercase
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    // for lowercase
    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleClearText = () => {
        setText("");
    }

    // for input change 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3">
                <h1>{props.headings}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} placeholder='Enter Your Text Here..' onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary me-2' onClick={handleUpperCase}>Convert To UpperCase</button>
                <button className='btn btn-primary me-2' onClick={handleLowerCase}>Convert To LowerCase</button>
                <button className='btn btn-primary me-2' onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container">
                <h1 className='my-3'>Text Preview: </h1>
                <p >{text}</p>
                <h1 className='my-3'>Summary: </h1>
                <p>Number Of Character are: {text.length}</p>
                <p>Number Of Words are: {(text.split(" ").length - 1)}</p>
                <p>Time Requires To Read: {(text.length * .08)}</p>
            </div>
        </>
    );
}

export default TextForm;
