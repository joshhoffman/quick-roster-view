import React from 'react'
import UnitList from './UnitList'
import RosterDisplay from './list/RosterDisplay'

class App extends React.Component {
    constructor() {
        super();
        this.units = [];
        this.selectedUnits = [];
        this.state = {
            units: this.units,
            selectedUnits: this.selectedUnits
        };

        this.addUnitToList = this.addUnitToList.bind(this);
        this.removeUnitFromList = this.removeUnitFromList.bind(this);
    }

    componentDidMount() {
        fetch("units.json")
            .then(response => response.json())
            .then(json => {this.setState({units: json})})
            .catch(error => console.log(error));
    }

    addUnitToList(unit) {
        unit.key = unit.name + String(Math.random());
        this.selectedUnits.push(unit);
        this.setState({selectedUnits: this.selectedUnits})
    }

    removeUnitFromList(unit) {
        const key = unit.key;
        this.selectedUnits = this.selectedUnits.filter(u => u.key !== key);
        this.setState({selectedUnits: this.selectedUnits})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <UnitList addUnitHandler={this.addUnitToList} units={this.state.units} />
                </div>
                <div className="col-md-6">
                    <RosterDisplay removeUnitHandler={this.removeUnitFromList} units={this.state.selectedUnits} />
                </div>
            </div>
        )
    }
}

export default App