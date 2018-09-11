import React from 'react'
import WeaponSelector from './WeaponSelector'

class RosterUnit extends React.Component {
    constructor() {
        super();

        this.removeUnit = this.removeUnit.bind(this);
        this.addWeapon = this.addWeapon.bind(this);
    }

    removeUnit() {
        this.props.removeHandler(this.props.unit);
    }

    addWeapon(weapon) {
        this.props.addWeaponHandler(this.props.unit, weapon);
    }

    render() {
        const weapons = [];

        for (const weapon of this.props.unit.weaponSelections) {
            weapons.push(<li key={weapon.name + Math.random()}>{weapon.name}</li>)
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