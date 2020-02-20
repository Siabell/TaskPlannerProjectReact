import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class CardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardSubtitle>{this.props.description}</CardSubtitle>
                        <CardText>{this.props.status} - {this.props.dueDate}</CardText>
                        <CardText>{this.props.responsible.name}</CardText>
                        <CardText>{this.props.responsible.email}</CardText>
                        
                    </CardBody>
                </Card>
            </div>
        );
    }

}