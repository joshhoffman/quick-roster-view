import React from 'react'
import WeaponSelector from './WeaponSelector'
import RosterWeapon from './RosterWeapon'

class RosterUnit extends React.Component {
    constructor() {
        super();

        this.removeUnit = this.removeUnit.bind(this);
        this.addWeapon = this.addWeapon.bind(this);
        this.removeWeapon = this.removeWeapon.bind(this);
    }

    removeUnit() {
        this.props.removeHandler(this.props.unit);
    }

    addWeapon(weapon) {
        this.props.addWeaponHandler(this.props.unit, weapon);
    }

    removeWeapon(weapon) {
        this.props.removeWeaponHandler(this.props.unit, weapon);
    }

    render() {
        const weapons = [];

        for (const weapon of this.props.unit.weaponSelections) {
            weapons.push(<RosterWeapon key={weapon.name + Math.random()} weapon={weapon} removeWeaponHandler={this.removeWeapon} />)
        }

        return (
            <div key={this.props.unit.name}>
                {this.props.unit.name} &nbsp;
                <WeaponSelector addWeaponHandler={this.addWeapon} weapons={this.props.weapons}/>
                <ul>
                    {weapons}
                </ul>
                <button onClick={this.removeUnit}>Remove</button>
            </div>
        )
    }
}

export default RosterUnit