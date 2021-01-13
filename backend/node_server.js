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
    Current: {
        A1: 0,
        Description1: "Current Description"
    },
    Historical_Current_1: {
        Current_1: [],
        Timestamp: []
    },
    Historical_Voltage_1: {
        Voltage_1: [],
        Timestamp: []
    },
    Historical_Voltage_2: {
        Voltage_2: [],
        Timestamp: []
    },
    Historical_Voltage_3: {
        Voltage_3: [],
        Timestamp: []
    },
    Historical_Voltage_4: {
        Voltage_4: [],
        Timestamp: []
    },
    Historical_Voltage_5: {
        Voltage_5: [],
        Timestamp: []
    },
    Historical_Voltage_6: {
        Voltage_6: [],
        Timestamp: []
    },
    Historical_Voltage_7: {
        Voltage_7: [],
        Timestamp: []
    },
    Historical_Voltage_8: {
        Voltage_8: [],
        Timestamp: []
    },
    Status: {
        Charging: false,
        Power: false
    },
    Unit_Description: {
        UD1: "UD1",
        UD2: "UD2",
        UD3: "UD3",
        UD4: "UD4",
        UD5: "UD5",
        UD6: "UD6",
        UD7: "UD7",
        UD8: "UD8"
    },
    Voltage: {
        V1: 0,
        V2: 0,
        V3: 0,
        V4: 0,
        V5: 0,
        V6: 0,
        V7: 0,
        V8: 0
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

setInterval(MainLoop, 1000);