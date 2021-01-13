/************************** Import library/fungsi ****************************/
import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';

import './Battery-Info.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function BatteryInfo(props){
    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Analog Input</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 1" value={props.FirestoreVoltage.AI_1} unit="V" />
                <ValueSimpleContainer title="Baterai 2" value={props.FirestoreVoltage.AI_2} unit="V" />
                <ValueSimpleContainer title="Baterai 3" value={props.FirestoreVoltage.AI_3} unit="V" />
                <ValueSimpleContainer title="Baterai 4" value={props.FirestoreVoltage.AI_4} unit="V" />
            </section>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 5" value={props.FirestoreVoltage.AI_5} unit="V" />
                <ValueSimpleContainer title="Baterai 6" value={props.FirestoreVoltage.AI_6} unit="V" />
                <ValueSimpleContainer title="Baterai 7" value={props.FirestoreVoltage.AI_7} unit="V" />
                <ValueSimpleContainer title="Baterai 8" value={props.FirestoreVoltage.AI_8} unit="V" />
            </section>
            <section className="title-pos">
                <h1 className="title">Analog Output</h1>
            </section>
            <hr className="temperature-separator"/>
        </section>
    );
}

export default React.memo(BatteryInfo);