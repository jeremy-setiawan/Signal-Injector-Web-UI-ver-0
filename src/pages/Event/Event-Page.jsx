/************************** Import library/fungsi ****************************/
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import './Event-Page.css';
/*
import useFetchFirestore from '../../hooks/useFetchFirestore';
*/
/************************ Deklarasi objek/variabel ***************************/
const useStyles = makeStyles({
    table: {
        width: "90%",
    },
    header: {
        fontSize: '44pt',
    }
});

/************************ Deklarasi kelas/komponen ***************************/
function EventPage() {
    const classes = useStyles();
    //const [data] = useFetchFirestore('Event');

    //**************Change firestoreData from Firestore cloud function*************/
    /*
    const firestoreData = [
        { "no": 0, "name": "AC Running", "value": data.firestoreData.EvtQ0, "timerOn": data.firestoreData.EvtTON0, "timerOff": data.firestoreData.EvtTOFF0 },
        { "no": 1, "name": "Power On", "value": data.firestoreData.EvtQ1, "timerOn": data.firestoreData.EvtTON1, "timerOff": data.firestoreData.EvtTOFF1 },
        { "no": 2, "name": "Temperature Controlled", "value": data.firestoreData.EvtQ2, "timerOn": data.firestoreData.EvtTON2, "timerOff": data.firestoreData.EvtTOFF2 },
        { "no": 3, "name": "Control Temperature Action", "value": data.firestoreData.EvtQ3, "timerOn": data.firestoreData.EvtTON3, "timerOff": data.firestoreData.EvtTOFF3 },
        { "no": 4, "name": "Compressor Running", "value": data.firestoreData.EvtQ4, "timerOn": data.firestoreData.EvtTON4, "timerOff": data.firestoreData.EvtTOFF4 },
        { "no": 5, "name": "Current Unplausible", "value": data.firestoreData.EvtQ5, "timerOn": data.firestoreData.EvtTON5, "timerOff": data.firestoreData.EvtTOFF5 },
        { "no": 6, "name": "AC Goes Off", "value": data.firestoreData.EvtQ6, "timerOn": data.firestoreData.EvtTON6, "timerOff": data.firestoreData.EvtTOFF6 }
    ]
    */
    const firestoreData = [
        { "no": 0, "name": "AC Running", "value": 0, "timerOn": 0, "timerOff": 0 },
        { "no": 1, "name": "Power On", "value": 1, "timerOn": 1, "timerOff": 1 },
        { "no": 2, "name": "Temperature Controlled", "value": 2, "timerOn": 2, "timerOff": 2 },
        { "no": 3, "name": "Control Temperature Action", "value": 3, "timerOn": 3, "timerOff": 3 },
        { "no": 4, "name": "Compressor Running", "value": 4, "timerOn": 4, "timerOff": 4 },
        { "no": 5, "name": "Current Unplausible", "value": 5, "timerOn": 5, "timerOff": 5 },
        { "no": 6, "name": "AC Goes Off", "value": 6, "timerOn": 6, "timerOff": 6 }
    ]
    //**************Change firestoreData from Firestore cloud function*************/

    const rows = firestoreData;

    return (
        <section className="event-page-containter">
            <section className="event-page-title-container">
                <section className="title-pos">
                    <h1 className="title">Event Record</h1>
                </section>
                <hr className="event-separator" />
            </section>
            <TableContainer
                className="event-table-containter"
            >
                <Table className={classes.table}>
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Value</TableCell>
                            <TableCell align="center">Timer On</TableCell>
                            <TableCell align="center">Timer Off</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.no}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {row.no}
                                </TableCell>
                                <TableCell align="left"> {row.name} </TableCell>
                                <TableCell align="center"> {row.value} </TableCell>
                                <TableCell align="center"> {row.timerOn} </TableCell>
                                <TableCell align="center"> {row.timerOff} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <section className="event-page-title-container">
                <hr className="event-separator" />
            </section>
        </section>
    )
}

export default EventPage;