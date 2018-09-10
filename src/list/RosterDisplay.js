import React from 'react'
import RosterUnit from './RosterUnit'

class RosterDisplay extends React.Component {
    constructor() {
        super();

        this.removeUnit = this.removeUnit.bind(this);
    }

    removeUnit(unit) {
        this.props.removeUnitHandler(unit);
    }

    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            unitComponents.push(<RosterUnit removeHandler={this.removeUnit} key={unit.key} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default RosterDisplay