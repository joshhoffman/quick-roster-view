import React from 'react'
import AdminUnit from './AdminUnit'

class AdminUnitList extends React.Component {
    constructor() {
        super()
    }

    render() {

        const unitComponents = [];

        console.log(this.props.units);

        for (const unit of this.props.units) {
            unitComponents.push(<AdminUnit key={unit.id} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default AdminUnitList