import React from 'react'
import AdminUnit from './AdminUnit'

class AdminUnitList extends React.Component {
    constructor() {
        super();

        this.updateUnitHandler = this.updateUnitHandler.bind(this);
    }

    updateUnitHandler(updatedUnit) {
        return this.props.updateUnitHandler(updatedUnit);
    }

    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            unitComponents.push(<AdminUnit updateUnitHandler={this.updateUnitHandler} key={unit.id} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default AdminUnitList