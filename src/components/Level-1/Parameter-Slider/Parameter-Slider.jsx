import React from 'react';
import {ValueSimpleContainer, DiscreteSlider} from '../../Level-1';
import Button from '@material-ui/core/Button';

import './Parameter-Slider.css';
import firestoreDbRef from '../../../pages/Home/Home-Page';

function ParameterSlider(props){

    return(
        <section className="parameter-adj-holder">
            <section className="parameter-title-pos">
                <h1 className="parameter-title">{props.parameterName}</h1>
            </section>        
            <hr className="parameter-separator"/>
            <section className="parameter-slider-holder"/**Slider Holder */>
                <section className="parameter-scale-box"/**min value */>
                    <h1 className="parameter-scale-text">{props.minUnit}</h1>
                </section>
                <section className="parameter-slider-pos"/**slider */>
                    <DiscreteSlider 
                    minScale={props.minScale} 
                    maxScale={props.maxScale} 
                    defaultValue={props.defaultValue}
                    />
                </section>
                <section className="parameter-scale-box"/**max value */>
                    <h1 className="parameter-scale-text">{props.maxUnit}</h1>
                </section>
            </section>
            <section className="parameter-send-button-column">
                <section className="parameter-send-button-holder">
                    <Button 
                    variant="contained" 
                    color="primary"
                    fullWidth={true}>
                        Send
                    </Button>
                </section>
            </section>
            
            <section className="parameter-adj-value">
            <ValueSimpleContainer title={props.title} value={props.value} unit={props.unit} information={props.information}/>
            </section>
            <br/>
            <br/>
            
        </section>
    );
}

export default ParameterSlider;