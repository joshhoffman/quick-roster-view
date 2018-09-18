import React from 'react';
import TextInputField from './TextInputField'

class CreateUnit extends React.Component {
    constructor() {
        super();

        this.properties = [
            "Name",
            "Move",
            "Weapon Skill",
            "Ballistic Skill",
            "Strength",
            "Toughness",
            "Wounds",
            "Attacks",
            "Leadership",
            "Save",
            "Points"
        ];

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const newUnit = {
            name: data.get("name"),
            move: data.get("move"),
            weaponSkill: data.get("weapon-skill"),
            ballisticSkill: data.get("ballistic-skill"),
            strength: data.get("strength"),
            toughness: data.get("toughness"),
            wounds: data.get("wounds"),
            attacks: data.get("attacks"),
            leadership: data.get("leadership"),
            save: data.get("save"),
            points: data.get("points"),
            weapons: this.props.unitWeapons.map(x => x.id)
        };

        document.getElementById("unit-form").reset();

        this.props.createUnitHandler(newUnit);
    }

    render() {
        const fields = [];
        const weaponOptions = [];

        for (const field of this.properties) {
            fields.push(<TextInputField key={field} name={field}/>)
        }

        for (const option of this.props.unitWeapons) {
            weaponOptions.push(<option key={option.id} value={option.id}>{option.name}</option>)
        }

        return (
            <div>
                <form onSubmit={this.onSubmit} id="unit-form">
                    {fields}
                    Weapons<br />
                    <select name="weapons" multiple={true}>
                        {weaponOptions}
                    </select>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUnit