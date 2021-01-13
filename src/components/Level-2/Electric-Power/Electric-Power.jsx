import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';


import './Electric-Power.css';

function ElectricPower(props){

    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Power Consumption</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Current Peak" value={props.FirestoreData.CurrentPeak} unit="A" information="Current peak to peak"/>
                <ValueSimpleContainer title="Current RMS" value={props.FirestoreData.CurrentRMS} unit="A" information="Effective Current"/>
                <ValueSimpleContainer title="Power" value="2200" unit="W" information="Power Consumption"/>
                <ValueSimpleContainer title="Energy" value="2200" unit="Wh" information="Energy from from last running start"/>
            </section>
        </section>
    )
}

export default React.memo(ElectricPower);