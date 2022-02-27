import React, { useState } from 'react'


export default function Textform(props) {

    
    const toUpperCase = () => {
        //alert('hi');
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase  ","success");
    }
    const onchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container mx-20 my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 >{props.heading}</h2>
            <div class="form-group">

                <textarea className="form-control" style={{backgroundColor: props.mode!=='dark'?'white':"#323238",color: props.mode==='dark'?'white':'black'}} value={text} onChange={onchange} id="myBox" rows="8"></textarea>
            </div>
            <button  disabled={text.length===0} className="btn btn-primary" onClick={toUpperCase}>Convert to Uppercase</button>

        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
             <h2>Preview</h2>
             <p>{text.length >0 ? text:"Nothing to preview"}</p>
             
        </div>
        </>
    )
}
