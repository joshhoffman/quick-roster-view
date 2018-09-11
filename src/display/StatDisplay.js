import React from 'react'
import StatUnit from './StatUnit'

class StatDisplay extends React.Component {
    constructor() {
        super();
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

            unitComponents.push(<StatUnit weapons={weapons} key={unit.key} unit={unit} />);
        }

        return (
            <ul>{unitComponents}</ul>
        )
    }
}

export default StatDisplay