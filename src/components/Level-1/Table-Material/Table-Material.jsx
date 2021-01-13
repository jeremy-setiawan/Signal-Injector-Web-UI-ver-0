import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableEvent() {
  const classes = useStyles();

  function createData(no, name, value, timerOn, timerOff) {
    return { no, name, value, timerOn, timerOff };
  }
  
  const rows = [
    createData(1, 'AC Running', 1, 2, 2232),
    createData(2, 'Power On', 1, 0, 232),
    createData(3, 'Temperature Controlled', 1, 11, 544),
    createData(4, 'Control Temperature Action', 1, 232, 67),
    createData(5, 'Compressor Running', 1, 23, 323),
    createData(6, 'Current Unplausible', 1, 222, 2232),
    createData(7, 'AC Goes Off', 1, 245, 2323),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.timerOn}</TableCell>
              <TableCell align="center">{row.timerOff}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TableStatus() {
  const classes = useStyles();

  function createData(no, group, name, value, setValue) {
    return { no, group, name, value, setValue };
  }
  
  const rows = [
    createData(1, 'STATUS', 'Unit', 1, 0),
    createData(2, 'STATUS', 'System', 1, 0),
    createData(3, 'CONTROL', 'Set Temperature', 1, 0),
    createData(4, 'CONTROL', 'Controlled Temperature Pin', 1, 0),
    createData(5, 'CONTROL', 'Set Timer Off', 1, 0),
    createData(6, 'CONTROL', 'Inplausible Current', 1, 0),
    createData(7, 'CONTROL', 'Compressor Current', 1, 0),
    createData(8, 'CONTROL', 'Running Current', 1, 0),
    createData(9, 'CONTROL', 'Time Signal', 1, 0),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">Set Value</TableCell>
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.setValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function TableParameter() {
  const classes = useStyles();

  function createData(no, name, value, setValue) {
    return { no, name, value, setValue};
  }
  
  const rows = [
    createData(1, 'AC Running', 1, 2, 2232),
    createData(2, 'Power On', 1, 0, 232),
    createData(3, 'Temperature Controlled', 1, 11, 544),
    createData(4, 'Control Temperature Action', 1, 232, 67),
    createData(5, 'Compressor Running', 1, 23, 323),
    createData(6, 'Current Unplausible', 1, 222, 2232),
    createData(7, 'AC Goes Off', 1, 245, 2323),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
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
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell align="center">{row.timerOn}</TableCell>
              <TableCell align="center">{row.timerOff}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export {TableEvent, TableStatus, TableParameter};