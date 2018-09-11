import React from 'react'
import Unit from './Unit.js'

class UnitList extends React.Component {
    constructor() {
        super();
        this.addUnit = this.addUnit.bind(this);
    }

    addUnit(unit) {

        this.props.addUnitHandler(unit);
    }

    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            unitComponents.push(<Unit addHandler={this.addUnit} key={unit.id} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default UnitList