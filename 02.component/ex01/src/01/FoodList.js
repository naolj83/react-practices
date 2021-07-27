import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render() {
        return (
            <ul>
                <ListItem name='Bread' quantitiy='10' />
                <ListItem name='Egg' quantitiy='5' />
                <ListItem name='Milk' quantitiy='11' />
                <ListItem name='Carrot' quantitiy='12' />
            </ul>
        );
    }
}
