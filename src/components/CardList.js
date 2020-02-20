import React from 'react';
import {CardComponent} from './CardComponent'

export class CardList extends React.Component {

    constructor(props) {
        super(props);
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
        const cardList = this.state.items.map((todo, i) => {
            return (
                <CardComponent key={i} responsible={todo.responsible} status={todo.status} description={todo.description} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <tbody>
                {cardList}
                </tbody>
            </table>
        );


    }

}