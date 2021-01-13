/************************** Import library/fungsi ****************************/
import React from 'react';
import {SetupSimpleInput,SetupSimpleOutput} from '../../Level-1';
//import OnAC from '../../../images/Icon On AC.png';
//import OffAC from '../../../images/Icon Off AC.png';
import OnRelay from '../../../images/Icon Relay On AC.png';
import OffRelay from '../../../images/Icon Relay Off AC.png';
/*
import OnBattery from '../../../images/Icon On Battery.png';
import OffBattery from '../../../images/Icon Off Battery.png';
*/

import './Setup-Container.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function SetupContainer(props){
    return(
        <section className="setup-on-ac-container">
            <section className="title-pos">
                <h1 className="title">Digital Input</h1>
            </section>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-1" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-2" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-3" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-4" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-5" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-6" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-7" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.Power} Title="DI-8" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <section className="title-pos">
                <h1 className="title">Digital Output</h1>
            </section>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-1" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-2" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-3" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-4" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-5" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-6" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-7" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.Power} Title="DO-8" OnText="On" OffText="Off"/>
        </section>
    )
}

export default React.memo(SetupContainer);