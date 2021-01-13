/************************** Import library/fungsi ****************************/
//library terkait Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./service_key.json");

//library untuk (format) timestamp
var moment = require('moment');
/************************ Deklarasi objek/variabel ***************************/
// terkait firestore (cloud firestore di dalam google firebase)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-db-4aa92.firebaseio.com"
});

var dummyBuffer = {
    Data: [],
    Timestamp: []
}

const dataLimit = 100;

// Get a reference to the database service
var firestore = admin.firestore();

var firestoreDataBuffer = {
    SI_1_AI: {
        AI_1: 0,
        AI_2: 0,
        AI_3: 0,
        AI_4: 0,
        AI_5: 0,
        AI_6: 0,
        AI_7: 0,
        AI_8: 0
    },
    SI_1_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    },
    SI_1_DI: {
        DI_1: false,
        DI_2: false,
        DI_3: false,
        DI_4: false,
        DI_5: false,
        DI_6: false,
        DI_7: false,
        DI_8: false
    },
    SI_1_DO: {
        DO_1: false,
        DO_2: false,
        DO_3: false,
        DO_4: false,
        DO_5: false,
        DO_6: false,
        DO_7: false,
        DO_8: false
    },
    SI_2_AI: {
        AI_1: 0,
        AI_2: 0,
        AI_3: 0,
        AI_4: 0,
        AI_5: 0,
        AI_6: 0,
        AI_7: 0,
        AI_8: 0
    },
    SI_2_AO: {
        AO_1: 0,
        AO_2: 0,
        AO_3: 0,
        AO_4: 0,
        AO_5: 0,
        AO_6: 0,
        AO_7: 0,
        AO_8: 0
    },
    SI_2_DI: {
        DI_1: false,
        DI_2: false,
        DI_3: false,
        DI_4: false,
        DI_5: false,
        DI_6: false,
        DI_7: false,
        DI_8: false
    },
    SI_2_DO: {
        DO_1: false,
        DO_2: false,
        DO_3: false,
        DO_4: false,
        DO_5: false,
        DO_6: false,
        DO_7: false,
        DO_8: false
    }
}

/************************ Deklarasi fungsi/event ***************************/
function getRndFloat(min, max, decnumber) {
    return parseFloat(((Math.random() * (max - min + 1)) + min).toFixed(decnumber));
}

function GenerateRandom(currentbuffer) {
    for (var i = 0; i < 256; i++) {
        currentbuffer.data[i] = getRndInteger(800, 1500);
    }
    currentbuffer.timestamp = String(moment().format('hh:mm:ss'));

    return currentbuffer;
}

/*
firestore.collection('Baterai-Monitoring-V0').doc('Current').get()
    .then((doc) => {
        console.log(doc.data());
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
*/

function storeBuffer(currentBuff, Buff, Timestamp) {
    if ((Buff.length) > dataLimit) {
        Buff.shift();
        Buff[dataLimit] = currentBuff;
        Timestamp.shift();
        Timestamp[dataLimit] = String(moment().format('DD MMMM YYYY HH:mm:ss [UTC] Z'));
    }
    else {
        Buff[Buff.length] = currentBuff;
        Timestamp[Timestamp.length] = String(moment().format('DD MMMM YYYY HH:mm:ss [UTC] Z'));
    }
    return [Buff, Timestamp];
}

function MainLoop() {
    // -------------------------------------------- MULAI EDIT DI SINI
    // Data Status
    firestoreDataBuffer.Status.Power = false;
    firestoreDataBuffer.Status.Charging = false;

    // Data Voltage
    firestoreDataBuffer.Voltage.V1 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V2 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V3 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V4 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V5 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V6 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V7 = getRndFloat(11, 14, 2);
    firestoreDataBuffer.Voltage.V8 = getRndFloat(11, 14, 2);

    // Data Current
    firestoreDataBuffer.Current.A1 = getRndFloat(2, 4, 2);
    //console.log(firestoreDataBuffer.Voltage);

    // -------------------------------------------- STOP EDIT DI SINI

    //storeBuffer(getRndFloat(2,4,2),dummyBuffer.Data,dummyBuffer.Timestamp);
    storeBuffer(
        firestoreDataBuffer.Voltage.V1,
        firestoreDataBuffer.Historical_Voltage_1.Voltage_1,
        firestoreDataBuffer.Historical_Voltage_1.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V2,
        firestoreDataBuffer.Historical_Voltage_2.Voltage_2,
        firestoreDataBuffer.Historical_Voltage_2.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V3,
        firestoreDataBuffer.Historical_Voltage_3.Voltage_3,
        firestoreDataBuffer.Historical_Voltage_3.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V4,
        firestoreDataBuffer.Historical_Voltage_4.Voltage_4,
        firestoreDataBuffer.Historical_Voltage_4.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V5,
        firestoreDataBuffer.Historical_Voltage_5.Voltage_5,
        firestoreDataBuffer.Historical_Voltage_5.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V6,
        firestoreDataBuffer.Historical_Voltage_6.Voltage_6,
        firestoreDataBuffer.Historical_Voltage_6.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V7,
        firestoreDataBuffer.Historical_Voltage_7.Voltage_7,
        firestoreDataBuffer.Historical_Voltage_7.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Voltage.V8,
        firestoreDataBuffer.Historical_Voltage_8.Voltage_8,
        firestoreDataBuffer.Historical_Voltage_8.Timestamp
    );
    storeBuffer(
        firestoreDataBuffer.Current.A1,
        firestoreDataBuffer.Historical_Current_1.Current_1,
        firestoreDataBuffer.Historical_Current_1.Timestamp
    );

    //console.log(firestoreDataBuffer.Historical_Voltage_1);

    firestore.collection('Baterai-Monitoring-V0').doc('Status').set(firestoreDataBuffer.Status)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Voltage').set(firestoreDataBuffer.Voltage)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Current').set(firestoreDataBuffer.Current)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-1').set(firestoreDataBuffer.Historical_Voltage_1)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-2').set(firestoreDataBuffer.Historical_Voltage_2)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-3').set(firestoreDataBuffer.Historical_Voltage_3)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-4').set(firestoreDataBuffer.Historical_Voltage_4)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-5').set(firestoreDataBuffer.Historical_Voltage_5)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-6').set(firestoreDataBuffer.Historical_Voltage_6)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-7').set(firestoreDataBuffer.Historical_Voltage_7)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Voltage-8').set(firestoreDataBuffer.Historical_Voltage_8)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    firestore.collection('Baterai-Monitoring-V0').doc('Historical-Current-1').set(firestoreDataBuffer.Historical_Current_1)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

firestore.collection('Signal_Injector').doc('SI_1_AI').set(firestoreDataBuffer.SI_1_AI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_1_AO').set(firestoreDataBuffer.SI_1_AO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_1_DI').set(firestoreDataBuffer.SI_1_DI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_1_DO').set(firestoreDataBuffer.SI_1_DO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_2_AI').set(firestoreDataBuffer.SI_2_AI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_2_AO').set(firestoreDataBuffer.SI_2_AO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_2_DI').set(firestoreDataBuffer.SI_2_DI)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

firestore.collection('Signal_Injector').doc('SI_2_DO').set(firestoreDataBuffer.SI_2_DO)
    .catch((error) => {
        console.error("Error adding document: ", error);
    });


//setInterval(MainLoop, 1000);