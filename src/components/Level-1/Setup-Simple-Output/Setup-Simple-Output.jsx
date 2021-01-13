import React from 'react'

import './Setup-Simple-Output.css';

function SetupSimpleOutput(props){
    const [state, setState] = React.useState({
        checkedA: true
      });

    return(
        <section className="setup-container">
            <section className="setup-flex">
                <section className="setup-text">
                    <p className="setup-font">{props.Title}</p>
                    <p className="setup-information">{props.Information}</p>
                </section>
                <section className="setup-attr">
                    <section className="setup-status">
                        <section className="">
                            <section className="setup-finish-image">
                                <img src={(props.Value) ? props.ImageOn:props.ImageOff} alt="AC On" className="setup-image-size"></img>
                            </section>
                        </section>
                    </section>
                </section>
                
            </section>
            <hr className="setup-separator"/>    
        </section>          
    )
}

export default React.memo(SetupSimpleOutput);