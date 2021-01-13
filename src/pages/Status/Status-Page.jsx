/************************** Import library/fungsi ****************************/
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Switch from '@material-ui/core/Switch';

import './Status-Page.css';
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
function StatusPage(props) {
    //const [data] = useFetchFirestore('Status');

    const [state, setState] = React.useState({
        checkedA: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    //**************Change firestoreData from Firestore cloud function*************/
    /*
    const firestoreSystemData = [
        {"no": 1, "name": "Temperature Control Enable", "value": data.firestoreData.TempControlEnable},
        {"no": 2, "name": "Timer Off Enable",           "value": data.firestoreData.TimerOffEnable},
    ]
    */
    const firestoreSystemData = [
        { "no": 1, "name": "Temperature Control Enable", "value": 0 },
        { "no": 2, "name": "Timer Off Enable", "value": 0 },
    ]
    //**************Change firestoreData from Firestore cloud function*************/

    const rowsSystem = firestoreSystemData;

    return (
        <section className="event-page-containter">
            <section className="event-page-title-container">
                <section className="title-pos">
                    <h1 className="title">Status Configuration</h1>
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
                            <TableCell align="center">Switch Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsSystem.map((row) => (
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
                                    <Switch
                                        defaultChecked={((row.value > 0) ? true : false)}
                                        onChange={handleChange}
                                        name="checkedA"
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </TableCell>
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

export default StatusPage;