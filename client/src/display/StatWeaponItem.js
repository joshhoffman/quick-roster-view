import React from 'react'

class StatWeaponItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        const weapon = this.props.weapon;

        return (
            <tr>
                <td>{weapon.name}</td>
                <td>{weapon.range}</td>
                <td>{weapon.type}</td>
                <td>{weapon.strength}</td>
                <td>{weapon.ap}</td>
                <td>{weapon.damage}</td>
            </tr>
        )
    }
}

export default StatWeaponItem