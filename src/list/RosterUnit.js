import React from 'react'

class RosterUnit extends React.Component {
    constructor() {
        super();

        this.removeUnit = this.removeUnit.bind(this);
    }

    removeUnit() {
        this.props.removeHandler(this.props.unit);
    }

    render() {
        return (
            <div key={this.props.unit.name}>
                {this.props.unit.name} &nbsp;
                <button onClick={this.removeUnit}>Remove</button>
            </div>
        )
    }
}

export default RosterUnit