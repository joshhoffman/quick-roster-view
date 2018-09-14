import React from 'react'
import AdminUnit from './AdminUnit'

class AdminUnitList extends React.Component {
    constructor() {
        super()
    }

    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            unitComponents.push(<AdminUnit key={unit.id} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default AdminUnitList