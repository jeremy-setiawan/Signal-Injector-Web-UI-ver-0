/************************** Import library/fungsi ****************************/
import React from 'react';

import {
    BatteryInfo,
    //ElectricPower,
    //EmbeddedData,
    ParameterAdjusment,
    //RoomTemperature,
    DigioContainer} from '../../components';

    import './Home-Page.css';

import useFetchFirestore from '../../hooks/useFetchFirestore';

// mount firebase sekali saja dalam aplikasi, tetapi di dalam folder ./src
import firebase from '../../firestore/firebase';

/************************ Deklarasi objek/variabel ***************************/
export var firestoreDbRef = firebase.firestore();

/************************ Deklarasi kelas/komponen ***************************/
function HomePage(){
    const [data_si1_ai] = useFetchFirestore('SI_1_AI');
    const [data_si1_ao] = useFetchFirestore('SI_1_AO');
    const [data_si1_di] = useFetchFirestore('SI_1_DI');
    const [data_si2_ai] = useFetchFirestore('SI_2_AI');
    const [data_si2_ao] = useFetchFirestore('SI_2_AO');
    const [data_si2_di] = useFetchFirestore('SI_2_DI');
    
    return(
        <section className="home-container">
            <section className="title-pos">
                <h1 className="title">Signal Injector 1</h1>
            </section>
            <DigioContainer FirestoreData={data_si1_di.firestoreData} DOID="SI_1_DO"/>
            <BatteryInfo FirestoreVoltage={data_si1_ai.firestoreData} FirestoreInformation={data_si1_ai.firestoreData}/>
            <ParameterAdjusment FirestoreData={data_si1_ao.firestoreData} AOID="SI_1_AO"/>
            <section className="title-pos">
                <h1 className="title">Signal Injector 2</h1>
            </section>
            <DigioContainer FirestoreData={data_si2_di.firestoreData} DOID="SI_2_DO"/>
            <BatteryInfo FirestoreVoltage={data_si2_ai.firestoreData} FirestoreInformation={data_si2_ai.firestoreData}/>
            <ParameterAdjusment FirestoreData={data_si2_ao.firestoreData} AOID="SI_2_AO"/>
        </section>
    )
}

export default React.memo(HomePage);