import React from 'react'
import Unit from './Unit.js'

class UnitList extends React.Component {
    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            unitComponents.push(<Unit key={unit.name} unit={unit} />);
        }

        return <ul>{unitComponents}</ul>
    }
}

export default UnitList