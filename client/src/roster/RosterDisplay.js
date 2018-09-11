import React from 'react'
import RosterUnit from './RosterUnit'

class RosterDisplay extends React.Component {
    constructor() {
        super();

        this.removeUnit = this.removeUnit.bind(this);
        this.addWeaponToUnit = this.addWeaponToUnit.bind(this);
        this.removeWeaponFromUnit = this.removeWeaponFromUnit.bind(this);
    }

    removeUnit(unit) {
        this.props.removeUnitHandler(unit);
    }

    addWeaponToUnit(unit, weapon) {
        this.props.addWeaponHandler(unit, weapon);
    }

    removeWeaponFromUnit(unit, weapon) {
        this.props.removeWeaponHandler(unit, weapon);
    }

    render() {

        const unitComponents = [];

        for (const unit of this.props.units) {
            const weapons = [];

            for (const weapon of this.props.weapons) {
                const found = unit.weapons.find(w => weapon.id === w);
                if (found) {
                    weapons.push(weapon);
                }
            }

            unitComponents.push(<RosterUnit addWeaponHandler={this.addWeaponToUnit} removeWeaponHandler={this.removeWeaponFromUnit} addUnitHandler={this.addWeaponToUnit} weapons={weapons} removeHandler={this.removeUnit} key={unit.key} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default RosterDisplay