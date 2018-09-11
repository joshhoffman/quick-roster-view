import React from 'react'
import StatWeaponItem from './StatWeaponItem'

class StatWeapon extends React.Component {
    constructor() {
        super();
    }

    render() {
        const weapon = this.props.weapon;
        const weapons = [];

        for (const weapon of this.props.weapons) {
            weapons.push(<StatWeaponItem weapon={weapon} key={weapon.key}/>)
        }

        return (
            <table className="table table-bordered table-sm">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Range</th>
                    <th>Type</th>
                    <th>Strength</th>
                    <th>AP</th>
                    <th>D</th>
                </tr>
                </thead>
                <tbody>
                {weapons}
                </tbody>
            </table>
        )
    }
}

export default StatWeapon