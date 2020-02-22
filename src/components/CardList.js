import React from 'react';
import {CardComponent} from './CardComponent.js'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {DrawerF} from './DrawerF.js';

export class CardList extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        window.location.href = "/addTask";

    } 

    render() {
        this.state = { items: [{description: "some description text ",
            responsible: {
                name: "Santiago Carrillo",
                email: "sancarbar@gmail"
            },
            status: "ready",
            dueDate: new Date(2020,1,30).toDateString()
        }, {description: "some description text ",
        responsible: {
            name: "Santiago Carrillo",
            email: "sancarbar@gmail"
        },
        status: "ready",
        dueDate: new Date(2020,1,30).toDateString()
        }]};

        this.data = this.state.items;
        if (this.props.items){
            this.data = this.props.items;
        } else{
            this.state.items = this.props.items
        }
        const cardList = this.data.map((todo, i) => {
            return (
                <div key={i}>
                <CardComponent  responsible={todo.responsible} status={todo.status} description={todo.description} dueDate={todo.dueDate}/>
                </div>
            );
        });

        return (
            <div>
                
            <Grid container spacing={0} style={{ width: 'auto' }}>
                    {this.data.map((todo,i) => (
                        <Grid key={i} item>
                        <CardComponent  responsible={todo.responsible} status={todo.status} description={todo.description} dueDate={todo.dueDate}/>
                        </Grid>
                    ))}
            </Grid>
            
            </div>
        );


    }

}