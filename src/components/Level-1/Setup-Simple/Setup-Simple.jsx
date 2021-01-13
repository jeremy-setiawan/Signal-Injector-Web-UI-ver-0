import React from 'react'
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Setup-Simple.css';

function SetupSimple(props){
    const [state, setState] = React.useState({
        checkedA: true
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

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
                                <img src={(props.Value>0) ? props.ImageOn:props.ImageOff} alt="AC On" className="setup-image-size"></img>
                            </section>
                        </section>
                        <section className={(props.Value>0)?"":"setup-hidden"}>
                            <section className="setup-loading">
                                <CircularProgress 
                                thickness={5.2}
                                />
                            </section>
                        </section>
                    </section>
                    <section className="setup-slider-toggle">
                    <p className="setup-toggle-font">{props.OffText}</p>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p className="setup-toggle-font">{props.OnText}</p>
                    </section>
                </section>
                
            </section>
            <hr className="setup-separator"/>    
        </section>          
    )
}

export default React.memo(SetupSimple);