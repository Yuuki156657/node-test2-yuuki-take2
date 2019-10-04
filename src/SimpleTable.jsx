import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
// import { rows } from './formDataContents';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));



export default function SimpleTable(props) {
  const classes = useStyles();

  console.log('bbbb', props);


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Url</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Updated at</TableCell>
            <TableCell align="right"><AddIcon color="primary" 
            onClick={() => { 
              props.openModel();
              props.setIsAddButton(true); 
            }} /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.created}</TableCell>
              <TableCell align="right">{row.updated}</TableCell>
              <TableCell align="right">
                <CreateIcon color="secondary" 
                  onClick={() => { 
                  props.openModel();
                  props.setIsAddButton(false); 
                  props.setFormDataId(row.id);
                }} />
                <DeleteIcon color="secondary" 
                  onClick={() => { 
                  props.deleteFormData(row.id);
                }}/>

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}