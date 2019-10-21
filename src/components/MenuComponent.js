import React, { Component } from 'react';
import { Media } from 'reactstrap'

class Menu extends Component {
    constructor(props) {  // Here we initiate component property.
        super(props); // Props are passed to react components via HTML attribute. They are like arguments which we pass to react components.
        this.state = { // state is where we store property values
        };
    }

    render()
    {
        let menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        })
        return(
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        )
    }
}
export default Menu;