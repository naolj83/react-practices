import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        console.log(this.props.foods);

        const foods = [];
        this.props.foods.forEach(function(food, index) {
            foods[index] = <ListItem key={food.no} name={food.name} quantitiy={food.quantitiy} />;
        });

        return (
            <ul>
                { foods }
            </ul>
        );
    }
}
