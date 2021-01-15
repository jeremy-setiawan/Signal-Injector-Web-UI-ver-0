import React from 'react'
import {ParameterSlider} from '../../Level-1';

import './Parameter-Adjusment.css';

function ParameterAdjusment(props){
    return(
        <section className="parameter-holder">
            <ParameterSlider 
                parameterName={"Analog Output 1"} 
                minUnit={"0 V"}
                maxUnit={"5 V"}
                minScale={0}
                maxScale={5}
                defaultValue={2.5}
                title={"AO_1"}
                value={props.FirestoreData.AO_1}
                unit={" V"}
                AOID={props.AOID}
                //information={"Adjusted Temperature"}
            />
            <ParameterSlider
                parameterName={"Analog Output 2"} 
                minUnit={"0 V"}
                maxUnit={"5 V"}
                minScale={0}
                maxScale={5}
                defaultValue={2.5}
                title={"AO_2"}
                value={props.FirestoreData.AO_2}
                unit={" V"}
                AOID={props.AOID}
                //information={"Adjusted Fan Speed"}
            />
        </section>
    )
}

export default React.memo(ParameterAdjusment);