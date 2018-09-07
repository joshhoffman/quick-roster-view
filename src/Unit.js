import React from 'react'

class Unit extends React.Component {
    constructor() {
        super();

        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        console.log("clicked");
    }

    render() {
        return (
            <div onClick={this.clicked} key={this.props.unit.name}>{this.props.unit.name}</div>
        )
    }
}

export default Unit