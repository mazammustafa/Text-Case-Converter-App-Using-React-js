import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [fontStyle, setfontStyle] = useState('normal');
    const [convertCaseBtn, setconvertCaseBtn] = useState('Convert To UpperCase');
    const [convertItalicBtn, setconvertItalicBtn] = useState('Convert To Italic');
    const [btnColor, setBtnColor] = useState('btn-primary');
    const [italicBtnColor, setItalicBtnColor] = useState('btn-warning');
    // for uppercase & lowercase
    const handleTextCase = () => {
        if (!text) {
            alert("Enter Your Text")
        } else {
            if (text === text.toUpperCase()) {
                setText(text.toLowerCase());
                setconvertCaseBtn('Convert To UpperCase');
                setBtnColor('btn-primary');

            }
            else {
                setText(text.toUpperCase());
                setconvertCaseBtn('Convert To LowerCase');
                setBtnColor('btn-success');
            }
            let caserecord = document.getElementById("caserecord")
            caserecord.innerHTML += `<li><button class="btn ${btnColor}">${convertCaseBtn}</button></li>`
        }
    }

    // // for uppercase
    // const handleUpperCase = () => {
    //     setText(text.toUpperCase());
    // }
    // // for lowercase
    // const handleLowerCase = () => {
    //     setText(text.toLowerCase());
    // }

    const handleClearText = () => {
        setText("");
    }
    const handleItalicText = () => {
        if (!text) {
            alert("Enter your Text Here")
        } else {
            if (fontStyle === 'normal') {
                setfontStyle('italic');
                setconvertItalicBtn('Convert to Normal');
                setItalicBtnColor('btn-secondary');
            } else {
                setfontStyle('normal');
                setconvertItalicBtn('Convert to Italic');
                setItalicBtnColor('btn-warning');
            }

            let caserecord = document.getElementById("caserecord")
            caserecord.innerHTML += `<li><button class="btn ${italicBtnColor}">${convertItalicBtn}</button</li>`
        }
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
                    <textarea className="form-control" id="myBox" rows="10" value={text} placeholder='Enter Your Text Here..' onChange={handleOnChange} style={{ fontStyle: fontStyle }}></textarea>
                </div>
                <button className={`btn ${btnColor} me-2`} onClick={handleTextCase} id="caseBtn">{convertCaseBtn}</button>
                {/* <button className='btn btn-primary me-2' onClick={handleLowerCase}>Convert To LowerCase</button> */}
                <button className={`btn ${italicBtnColor} me-2`} onClick={handleItalicText}>{convertItalicBtn}</button>
                <button className='btn btn-danger me-2' onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container border border-1">
                <h1>Case Records</h1>
                <ol id="caserecord" className='d-flex gap-5 flex-wrap '></ol>
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
