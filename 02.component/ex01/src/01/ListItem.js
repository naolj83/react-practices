import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <li>{this.props.name}: {this.props.quantitiy}</li>
        );
    }
}
