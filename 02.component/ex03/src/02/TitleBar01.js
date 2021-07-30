import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor() {
        super(...arguments);
        // this.no = 10; -> 이렇게 쓰면 x, state 써야 o
        this.state = {
            no: 10
    }
}

    onClickHeader(e) { 
        // this.no++;
        // console.log('TitleBar01 click!!', this.no);
        // this.render();

        console.log('TitleBar01 click!!', ":", this.state.no);
        this.setState({
            no: this.state.no + 1
        });
    }; 

    render() {
        return (
            <h1 onClick={ this.onClickHeader.bind(this) }
            style ={ {
                cursor: 'pointer'
            } }>
            ex03 - Functional Event Handler(Class Component) 
            {
            // this.no
            this.state.no
            }
        </h1>
    );
    }
}

// 클래스 안에서 this는 객체가 있으니까 의미 o