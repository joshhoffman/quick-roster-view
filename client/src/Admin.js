import React from 'react'
import AdminUnitList from "./admin/view/AdminUnitList";
import AdminWeaponList from "./admin/view/AdminWeaponList";
import CreateUnit from "./admin/create/CreateUnit";
import CreateWeapon from "./admin/create/CreateWeapon";

class Admin extends React.Component {
    constructor() {
        super();

        this.state = {
            units: [],
            weapons: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/units")
            .then(response => response.json())
            .then(json => {this.setState({units: json})})
            .catch(error => console.log(error));

        fetch("weapons.json")
            .then(response => response.json())
            .then(json => {this.setState({weapons: json})})
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Add unit</h4>
                        <CreateUnit/>
                    </div>
                    <div className="col-md-6">
                        <h4>Add weapon</h4>
                        <CreateWeapon/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Units</h4>
                        <ul>
                            <AdminUnitList units={this.state.units}/>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4>Weapons</h4>
                        <AdminWeaponList weapons={this.state.weapons}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin