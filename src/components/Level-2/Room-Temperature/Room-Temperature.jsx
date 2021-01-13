/************************** Import library/fungsi ****************************/
import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';
import './Room-Temperature.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function RoomTemperature(props){

    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Room Temperature</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Temperature 1" value={props.FirestoreData.Temperatur1} unit="*C" information="under the desk"/>
                <ValueSimpleContainer title="Temperature 2" value={props.FirestoreData.Temperatur2} unit="*C" information="below the AC"/>
                <ValueSimpleContainer title="Temperature 3" value={props.FirestoreData.Temperatur3} unit="*C" information="on the door"/>
                <ValueSimpleContainer title="Temperature 4" value={props.FirestoreData.Temperatur4} unit="*C" information="outside the room"/>
            </section>
        </section>
        
    );
}


export default React.memo(RoomTemperature);