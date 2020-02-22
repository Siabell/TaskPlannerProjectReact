import React, { Component } from 'react';
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
import CheckIcon from '@material-ui/icons/Check';
import {CardList} from './CardList';

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



export class CardAdd extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [{description: "some description text ",
        responsible: { name: "Santiago Carrillo", email: "sancarbar@gmail"
        }, status: "ready", dueDate: new Date(2020,1,30).toDateString()
        }], description: '', status: '', dueDate: moment(), name: '', email: ''};
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeStatus(event){    
        this.setState({status: event.target.value});
    };

    handleChangeName (event) {
        this.setState({name: event.target.value});
    };

    handleChangeEmail (event) {
        this.setState({email: event.target.value});
    };

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    };

    handleChangeDate (date) {
        console.log(date)
        this.setState({
            dueDate: date.target.value
        });
    };

    handleClick = (e) => {
        
        window.location.href = "/index";

    } 

    handleSubmit(e){

        e.preventDefault();
        const newItem = {
            description: this.state.description,
            responsible: { name: this.state.name, email: this.state.email },
            status: this.state.status,
            dueDate: this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment(),
            name: '',
            email: '',
            open: false
        }));
        
    }

    render() {
    return (
        <div>
            
        
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography component="h1" variant="h5" >
                    New Task
                </Typography>

                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                selected={this.state.description}
                                onChange={this.handleChangeDescription}
                                autoComplete="description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                selected={this.state.name}
                                onChange={this.handleChangeName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="email"
                                name="email"
                                selected={this.state.email}
                                onChange={this.handleChangeEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                select
                                id="standard-select-currency"
                                label="Status"
                                name="status"
                                value={this.state.status}
                                onChange={this.handleChangeStatus}
                            >{states.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography component="body" variant="h7">
                            Due Date:
                        </Typography><br></br>
                        <input
                            required
                            type="date"
                            id="new-todoDate"
                            onChange={this.handleChangeDate}
                            value={this.state.dueDate}
                            />
                        </Grid>
                    </Grid>
                    <br></br>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<CheckIcon />}
                    >
                        Save
                        
                    </Button>
                </form>

                <CardList items={this.state.items}/>
            </div>
            
        </Container>
        </div>
    );
    }
}