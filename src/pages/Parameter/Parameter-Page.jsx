/************************** Import library/fungsi ****************************/
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Button from '@material-ui/core/Button';

import './Parameter-Page.css';
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

var bufferParam = {
    CONTROL:{
        CompressorCurrent: 0,
        ControlledTemperaturePin: 0,
        OnCurrent: 0,
        SetTemperature: 0,
        SetTimerOff: 0,
        UnplausibleCurrent: 0,
    },
    STATUS:{
        System:0,
        Unit: 0
    }
};

/************************ Deklarasi kelas/komponen ***************************/
function ParameterPage(){
    const classes = useStyles();
    //const [data] = useFetchFirestore('Parameter');
    //bufferParam.STATUS = (data.firestoreData.STATUS===undefined) ? bufferParam.STATUS : data.firestoreData.STATUS;
    //bufferParam.CONTROL = (data.firestoreData.CONTROL===undefined) ? bufferParam.CONTROL : data.firestoreData.CONTROL;

    //**************Change firestoreData from Firestore cloud function*************/
    const firestoreSTATUSData = [
        {"no": 1, "name": "Unit",   "value": bufferParam.STATUS.Unit},
        {"no": 2, "name": "System", "value": bufferParam.STATUS.System},
    ];

    const firestoreCONTROLData = [
        {"no": 1, "name": "Set Temperature",            "value": bufferParam.CONTROL.SetTemperature},
        {"no": 2, "name": "Controlled Temperature Pin", "value": bufferParam.CONTROL.ControlledTemperaturePin},
        {"no": 3, "name": "Set Timer Off",              "value": bufferParam.CONTROL.SetTimerOff},
        {"no": 4, "name": "Inplausible Current",        "value": bufferParam.CONTROL.UnplausibleCurrent},
        {"no": 5, "name": "Compressor Current",         "value": bufferParam.CONTROL.CompressorCurrent},
        {"no": 6, "name": "Running Current",            "value": bufferParam.CONTROL.OnCurrent},
        {"no": 6, "name": "Time Signal",                "value": 232},
    ];
    //**************Change firestoreData from Firestore cloud function*************/

    const rowsSTATUS = firestoreSTATUSData;
    const rowsCONTROL = firestoreCONTROLData;

    return(
        <section className="event-page-containter">
            <section className="event-page-title-container">
                <section className="title-pos">
                    <h1 className="title">Parameter STATUS</h1>
                </section>
                <hr className="event-separator"/>
            </section>
            <TableContainer 
            className="event-table-containter"
            >
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" width= "10%">No</TableCell>
                            <TableCell align="left" width= "30%">Name</TableCell>
                            <TableCell align="center" width= "20%">Value</TableCell>
                            <TableCell align="center" width= "20%">Edit</TableCell>
                            <TableCell align="center" width= "20%">Send</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsSTATUS.map((row) => (
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
                            <TableCell align="center">
                                <input type="text" id="fname" name="fname" placeholder={row.value} className="parameter-edit"></input>
                            </TableCell>
                            <TableCell align="center">
                                <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth={true}>
                                    {row.name}
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <section className="event-page-title-container">
                <section className="title-pos">
                    <h1 className="title">Parameter CONTROL </h1>
                </section>
                <hr className="event-separator"/>
            </section>
            <TableContainer 
            className="event-table-containter"
            >
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" width= "10%">No</TableCell>
                            <TableCell align="left" width= "30%">Name</TableCell>
                            <TableCell align="center" width= "20%">Value</TableCell>
                            <TableCell align="center" width= "20%">Edit</TableCell>
                            <TableCell align="center" width= "20%">Send</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsCONTROL.map((row) => (
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
                            <TableCell align="center">
                                <input type="text" id="fname" name="fname" placeholder={row.value} className="parameter-edit"></input>
                            </TableCell>
                            <TableCell align="center">
                                <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth={true}>
                                    {row.name}
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <section className="event-page-title-container">
                <hr className="event-separator"/>
            </section>
        </section>
    )
}

export default ParameterPage;