import React from 'react'
import AdminUnitDetails from './AdminUnitDetails'

class AdminUnit extends React.Component {
    constructor() {
        super();

        this.viewDetails = false;
        this.unitClicked = this.unitClicked.bind(this);
        this.updateUnitHandler = this.updateUnitHandler.bind(this);
    }

    unitClicked() {
        this.viewDetails = !this.viewDetails;
        this.setState({});
    }

    updateUnitHandler(updatedUnit) {
        return this.props.updateUnitHandler(updatedUnit);
    }

    render() {
        let details = '';
        if (this.viewDetails) {
            details = <AdminUnitDetails unit={this.props.unit} updateUnitHandler={this.updateUnitHandler}/>
        }
        return (
            <div key={this.props.unit.name} onClick={this.unitClicked}>
                {this.props.unit.name}
                {details}
            </div>
        )
    }
}

export default AdminUnit