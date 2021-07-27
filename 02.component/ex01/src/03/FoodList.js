import React from 'react';
import ListItem from './ListItem';

export default function FoodList( {foods}) {
        return (
            <ul>
                { foods.map((food) => <ListItem 
                                            key={food.no} 
                                            name={food.name} 
                                            quantitiy={food.quantitiy} />) }
            </ul>
        );
}
