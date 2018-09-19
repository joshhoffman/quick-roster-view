import React from 'react'
import AdminUnitList from "./admin/view/AdminUnitList";
import AdminWeaponList from "./admin/view/AdminWeaponList";
import CreateUnit from "./admin/create/CreateUnit";
import CreateWeapon from "./admin/create/CreateWeapon";
import config from './config';

class Admin extends React.Component {
    constructor() {
        super();

        this.state = {
            units: [],
            weapons: [],
            unitWeapons: []
        };

        this.createUnitHandler = this.createUnitHandler.bind(this);
        this.createWeaponHandler = this.createWeaponHandler.bind(this);
        this.addWeaponToUnit = this.addWeaponToUnit.bind(this);
    }

    componentDidMount() {
        fetch(config.config.serverName + "/units")
            .then(response => response.json())
            .then(json => {this.setState({units: json})})
            .catch(error => console.log(error));

        fetch(config.config.serverName + "/weapons")
            .then(response => response.json())
            .then(json => {this.setState({weapons: json})})
            .catch(error => console.log(error));
    }

    createUnitHandler(newUnit) {
        fetch(config.config.serverName + "/units", {
            method: 'POST',
            body: JSON.stringify(newUnit)
        })
            .then(s => fetch(config.config.serverName + "/units"))
            .then(response => response.json())
            .then(json => {this.setState({units: json, unitWeapons: []})})
            .catch(error => console.log(error));
    }

    createWeaponHandler(newWeapon) {
        console.log(newWeapon);
        fetch(config.config.serverName + "/weapons", {
            method: 'POST',
            body: JSON.stringify(newWeapon)
        })
            .then(s => fetch(config.config.serverName + "/weapons"))
            .then(response => response.json())
            .then(json => {this.setState({weapons: json})})
            .catch(error => console.log(error));
    }

    addWeaponToUnit(weapon) {
        console.log(weapon);
        this.state.unitWeapons.push(weapon);
        this.setState({unitWeapons: this.state.unitWeapons})
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Add unit</h4>
                        <CreateUnit createUnitHandler={this.createUnitHandler} unitWeapons={this.state.unitWeapons}/>
                    </div>
                    <div className="col-md-6">
                        <h4>Add weapon</h4>
                        <CreateWeapon createWeaponHandler={this.createWeaponHandler}/>
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
                        <AdminWeaponList addHandler={this.addWeaponToUnit} weapons={this.state.weapons}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin