import React from 'react'
import StatWeapon from './StatWeapon'
import UnitStats from './UnitStats'

class StatUnit extends React.Component {
    constructor() {
        super();
    }

    render() {
        const unit = this.props.unit;

        return (
            <div key={unit.name}>
                <b>{unit.name}</b> &nbsp;
                <UnitStats unit={unit}/>
                <StatWeapon weapons={unit.weaponSelections}/>
            </div>
        )
    }
}

export default StatUnit