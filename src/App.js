import React from 'react'
import UnitList from './units/UnitList'
import RosterDisplay from './roster/RosterDisplay'
import StatDisplay from './display/StatDisplay'
import _ from 'lodash'

class App extends React.Component {
    constructor() {
        super();
        this.units = [];
        this.weapons = [];
        this.selectedUnits = [];
        this.state = {
            units: this.units,
            weapons: this.weapons,
            selectedUnits: this.selectedUnits
        };


        this.addUnitToList = this.addUnitToList.bind(this);
        this.removeUnitFromList = this.removeUnitFromList.bind(this);
        this.addWeaponToUnit = this.addWeaponToUnit.bind(this);
    }

    componentDidMount() {
        fetch("units.json")
            .then(response => response.json())
            .then(json => {this.setState({units: json})})
            .catch(error => console.log(error));

        fetch("weapons.json")
            .then(response => response.json())
            .then(json => {this.setState({weapons: json})})
            .catch(error => console.log(error));
    }

    addUnitToList(unit) {
        const newUnit = _.merge({}, unit);
        newUnit.key = unit.id + String(Math.random());
        newUnit.weaponSelections = [];
        this.selectedUnits.push(newUnit);
        this.setState({selectedUnits: this.selectedUnits})
    }

    removeUnitFromList(unit) {
        const key = unit.key;
        this.selectedUnits = this.selectedUnits.filter(u => u.key !== key);
        this.setState({selectedUnits: this.selectedUnits})
    }

    addWeaponToUnit(unit, weapon) {
        const unitInList = this.selectedUnits.find(u => u.key === unit.key);
        unitInList.weaponSelections.push(weapon);
        this.setState({selectedUnits: this.selectedUnits})
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <UnitList addUnitHandler={this.addUnitToList} units={this.state.units} />
                    </div>
                    <div className="col-md-6">
                        <RosterDisplay addWeaponHandler={this.addWeaponToUnit} removeUnitHandler={this.removeUnitFromList} units={this.state.selectedUnits} weapons={this.state.weapons} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <StatDisplay units={this.state.selectedUnits} weapons={this.state.weapons} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App