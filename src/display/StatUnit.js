import React from 'react'
import StatWeapon from './StatWeapon'

class StatUnit extends React.Component {
    constructor() {
        super();
    }

    render() {
        const weapons = [];

        for (const weapon of this.props.unit.weaponSelections) {
            weapons.push(<StatWeapon key={weapon.name + Math.random()} weapon={weapon} />)
        }

        return (
            <div key={this.props.unit.name}>
                {this.props.unit.name} &nbsp;
                <ul>
                    {weapons}
                </ul>
            </div>
        )
    }
}

export default StatUnit