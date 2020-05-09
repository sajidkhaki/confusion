import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from "reactstrap";

class Menu extends Component {
    constructor(props) {  // Here we initiate component property.
        super(props); // Props are passed to react components via HTML attribute. They are like arguments which we pass to react components.
        this.state = { // state is where we store property values
            selectedDish: null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }


    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <div className='row'>
                        <div key={dish.id} className="col-12 col-md-5 m-3">
                            <Card>
                                <CardImg width='100%' src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText> {dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-3'>
                            <h4>Comments</h4>
                            {dish.comments.map((comment) => {
                                return (
                                    <div key={comment.id}>
                                        <ul className='list-unstyled'>
                                            <li>
                                                {comment.comment}
                                                <p> -- {comment.author}, {}
                                                    {new Intl.DateTimeFormat('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: '2-digit'
                                                    }).format(new Date(comment.date))}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            );
        } else
            return (
                <div></div>
            );
    }


    render() {
        let menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card
                        onClick={() => this.onDishSelect(dish)}
                    >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }

}
export default Menu;