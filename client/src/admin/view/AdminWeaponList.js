import React from 'react'
import AdminWeapon from './AdminWeapon'

class AdminWeaponList extends React.Component {
    constructor() {
        super()
    }

    render() {

        const weaponComponents = [];

        for (const weapon of this.props.weapons) {
            console.log(weapon);
            weaponComponents.push(<AdminWeapon key={weapon.id} weapon={weapon} />);
        }

        return (
            <ul>{weaponComponents}</ul>
        )
    }
}

export default AdminWeaponList