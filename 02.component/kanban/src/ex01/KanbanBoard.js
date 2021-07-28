import React from 'react';
import CardList from './CardList';
import cards from './data.json';

export default function KanbanBoard() {
    // console.log(cards);

    return (
        <div className={'KanbanBoard'}>
            <CardList key="ToDo" title={'ToDo'} cards={cards.filter(card => card.status == 'ToDo')}/>
            <CardList key="Doing" title={'Doing'} cards={ cards.filter(card => card.status == 'Doing')}/>
            <CardList key="Done" title={'Done'} cards={cards.filter(card => card.status == 'Done')}/>
        </div>
        );
}

// 컴포넌트는 부모 자식간의 통신만 가능 하고 형제끼리 x
// -> 그래서 빈통이라도 필요(통신 위해)