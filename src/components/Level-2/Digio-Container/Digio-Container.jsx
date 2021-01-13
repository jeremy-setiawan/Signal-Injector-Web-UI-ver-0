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

import './Digio-Container.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function DigioContainer(props){
    return(
        <section className="setup-on-ac-container">
            <section className="title-pos">
                <h1 className="title">Digital Input</h1>
            </section>
            <SetupSimpleOutput Value={props.FirestoreData.DI_1} Title="DI_1" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_2} Title="DI_2" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_3} Title="DI_3" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_4} Title="DI_4" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_5} Title="DI_5" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_6} Title="DI_6" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_7} Title="DI_7" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <SetupSimpleOutput Value={props.FirestoreData.DI_8} Title="DI_8" ImageOn={OnRelay} ImageOff={OffRelay}/>
            <section className="title-pos">
                <h1 className="title">Digital Output</h1>
            </section>
            <SetupSimpleInput Value={props.FirestoreData.DO_1} DOID={props.DOID} Title="DO_1" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_2} DOID={props.DOID} Title="DO_2" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_3} DOID={props.DOID} Title="DO_3" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_4} DOID={props.DOID} Title="DO_4" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_5} DOID={props.DOID} Title="DO_5" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_6} DOID={props.DOID} Title="DO_6" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_7} DOID={props.DOID} Title="DO_7" OnText="On" OffText="Off"/>
            <SetupSimpleInput Value={props.FirestoreData.DO_8} DOID={props.DOID} Title="DO_8" OnText="On" OffText="Off"/>
        </section>
    )
}

export default React.memo(DigioContainer);