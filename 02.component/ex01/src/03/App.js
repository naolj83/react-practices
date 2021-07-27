import React, { createElement } from 'react';
import FoodList from './FoodList';

export default function App() {
        const foods = [{
            no: 1, 
            name: 'Bread', 
            quantitiy: 10
        }, {
            no: 2, 
            name: 'Egg', 
            quantitiy: 20
        }, {
            no: 3, 
            name: 'Milk', 
            quantitiy: 50
        }];

        return (
            <div id='App'>
                <FoodList foods={ foods } />
            </div>
        );
}

// createElement(FoodList, { foods: foods });

// FoodList({
//     foods: foods
// });
// => FoodList(props);
// FoodList에서 props.~ 접근
