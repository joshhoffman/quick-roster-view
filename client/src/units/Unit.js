import React from 'react'

class Unit extends React.Component {
    constructor() {
        super();

        this.addUnit = this.addUnit.bind(this);
    }

    addUnit() {
        this.props.addHandler(this.props.unit);
    }

    render() {
        return (
            <div key={this.props.unit.name}>
                {this.props.unit.name} &nbsp;
                <button onClick={this.addUnit}>Add</button>
            </div>
        )
    }
}

export default Unit