import React from 'react'

class WeaponSelector extends React.Component {
    constructor() {
        super();

        this.selected = -1;
        this.weaponNames = [];
        this.addWeapon = this.addWeapon.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.weaponNames = this.props.weapons.map(w => w.name);
    }

    addWeapon() {

        if (this.selected < 0) {
            return;
        }

        const selectedWeapon = this.props.weapons.find(w => w.id === this.selected);
        this.props.addWeaponHandler(selectedWeapon);
    }

    handleChange(event) {
        this.selected = event.target.value;
    }

    render() {
        const options = this.props.weapons.map(w => <option key={w.id} value={w.id}>{w.name}</option>);

        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value="-1"></option>
                    {options}
                </select>
                <button onClick={this.addWeapon}>Add</button>
            </div>
        )
    }
}

export default WeaponSelector