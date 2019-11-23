import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MaterialTable from 'material-table';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
        width: "100%"
    },
    formControl: {
        // margin: this.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        //marginTop: this.spacing(2),
    },
    dvBox: {
        padding: "-10 px !important",


    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('tblUsers1', 'ID', 'int', 'NULL', 'Primary Key'),
    createData('tblUsers2', 'FirstName', 'varchar', 20, 'First Name'),
    createData('tblUsers3', 'LastName', 'varchar', 50, 'Last Name'),
    createData('tblUsers4', 'LoginId', 'varchar', 67, 'Login Id'),
    createData('tblUsers5', 'Password', 'varchar', 49, 'Password'),
];

export default function SimpleTable() {
    const classes = useStyles();


    const [age, setAge] = React.useState('');

    //const inputLabel = React.useRef(null);
    //const [labelWidth, setLabelWidth] = React.useState(0);
    //React.useEffect(() => {
    //    //setLabelWidth(inputLabel.current.offsetWidth);
    //}, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    const [state, setState] = React.useState({
        columns: [
            { title: 'Table Name', field: 'tablename' },
            { title: 'Column Name', field: 'columnname' },
            { title: 'Data Type', field: 'datatype' },
            { title: 'CharacterMaxLength', field: 'charmaxlength' },
            { title: 'Notes', field: 'notes' },
        ],
        data: [

            { title: 'tblUsers1', columnname: 'ID', datatype: 'int', charmaxlength: 'NULL', notes:'Primary Key'},
            { title: 'tblUsers2', columnname: 'FirstName', datatype: 'varchar', charmaxlength: '20', notes: 'First Name' },
            { title: 'tblUsers3', columnname: 'LastName', datatype: 'varchar', charmaxlength: '50', notes: 'Last Name' },
            { title: 'tblUsers4', columnname: 'LoginId', datatype: 'varchar', charmaxlength: '67', notes: 'Login Id' },        
            { title: 'tblUsers5', columnname: 'Password', datatype: 'varchar', charmaxlength: 49, notes: 'Password' },
        ],
    });


    return (
        <div>
            <FormControl className={classes.formControl}> 
                <InputLabel id="demo-simple-select-autowidth-label">Tables List</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>tblUsers</MenuItem>
                    <MenuItem value={20}>tblSetup</MenuItem>
                    <MenuItem value={30}>tblRoles</MenuItem>
                </Select>
            </FormControl>
            <MaterialTable
                title="Tables"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState(prevState => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />

            <Paper className={classes.root}>

              


              
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Table Name</TableCell>
                            <TableCell align="right">Column Name</TableCell>
                            <TableCell align="right">Data Type</TableCell>
                            <TableCell align="right">CharacterMaxLength</TableCell>
                            <TableCell align="right">Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>

    );
}