import React from 'react'
import AdminWeapon from './AdminWeapon'

class AdminWeaponList extends React.Component {
    constructor() {
        super();

        this.addWeaponToUnit = this.addWeaponToUnit.bind(this);
    }

    addWeaponToUnit(weapon) {
        this.props.addHandler(weapon);
    }

    render() {

        const weaponComponents = [];

        for (const weapon of this.props.weapons) {
            weaponComponents.push(<AdminWeapon key={weapon.id} weapon={weapon} addHandler={this.addWeaponToUnit} />);
        }

        return (
            <ul>{weaponComponents}</ul>
        )
    }
}

export default AdminWeaponList