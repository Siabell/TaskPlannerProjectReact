import React from 'react';
import DatePicker from 'react-datepicker';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import 'react-datepicker/dist/react-datepicker.css';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import moment from "moment";
import DateFnsUtils from '@date-io/date-fns';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


const states = [
    {
        value: 'Ready',
        label: 'Ready',
    },
    {
        value: 'In Progress',
        label: 'In Progress',
    },
    {
        value: 'Done',
        label: 'Done',
    },
];


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export function CardAdd(props) {
    const classes = useStyles();
    const [status, setStatus] = React.useState('In Progess');
    const [state, setState] = React.useState({ items: [], description: '', status: '', dueDate:  moment(), name: '', email: ''});
    const handleChangeStatus = event => {
        
        setState({status: event.target.value});
    };

    const handleChangeDate = e => {
        console.log(e)
        setState({ dueDate: moment(e, 'YYYY-MM-DD')
        });
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    New Task
        </Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="responsible"
                                label="Responsible"
                                name="responsible"
                                autoComplete="responsible"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                select
                                id="standard-select-currency"
                                label="Description"
                                name="description"
                                value={state.status}
                                onChange={handleChangeStatus}
                            >{states.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <DatePicker
                                id="due-date"
                                placeholderText="Due date"
                                value={state.dueDate}
                                onChange={handleChangeDate}
                                >
                            </DatePicker>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                </form>
            </div>
        </Container>
    );
}