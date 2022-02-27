//import React, { useState } from 'react'
import React from 'react'


export default function About(props) {

    // const [myStyle,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    // const [currentMode,setMode]=useState("Enable dark mode")
    // const toggleColor=()=>{

    //     if(myStyle.color==='black')
    //     {
    //         setMyStyle(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black'
    //             }

    //         )
    //         setMode("Enable light mode")
    //     }
    //     else{
    //         setMyStyle(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         )
    //         setMode("Enable dark mode")
    //     }
    // }

    let myStyle={
        color: props.mode==="dark" ? "white":"black",
        backgroundColor: props.mode==="dark" ? "black":"white"
    }
    return (
        <>
         
            <div className='container my-3' style={myStyle}>
            <h2>About us</h2>
                <div className="accordion" id="accordionExample" >
                    <div className="card">
                        <div className="card-header" id="headingOne" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left" style={myStyle}type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body" style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed"style={myStyle}  type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body" style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree" style={myStyle}>
                            <h2 className="mb-0">
                                <button className="btn btn-link btn-block text-left collapsed"style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body" style={myStyle}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={toggleColor} className="btn btn-primary">{currentMode} </button> */}
            </div>
            
        </>
    )
}
