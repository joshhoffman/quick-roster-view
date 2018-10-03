import React from 'react'
import _ from 'lodash'

class AdminUnitDetails extends React.Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.stopClick = this.stopClick.bind(this);
        this.valueChanged = this.valueChanged.bind(this);

        // Todo: make this a config somewhere
        this.propertyList = [
            "move",
            "weaponSkill",
            "ballisticSkill",
            "strength",
            "toughness",
            "wounds",
            "attacks",
            "leadership",
            "save"
        ];

        this.state = {};
        for (const key in this.propertyList) {
            this.state[this.propertyList[key]] = '';
        }
    }

    componentDidMount() {
        for(const key in this.props.unit) {
            if (_.indexOf(this.propertyList, key) >= 0) {
                this.state[key] = this.props.unit[key];
            }
        }
        this.setState(this.state);
    }

    save(e) {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData(e.target);

        const newUnit = {
            id: this.props.unit.id,
            name: this.props.unit.name,
            move: data.get("move"),
            weaponSkill: data.get("weaponSkill"),
            ballisticSkill: data.get("ballisticSkill"),
            strength: data.get("strength"),
            toughness: data.get("toughness"),
            wounds: data.get("wounds"),
            attacks: data.get("attacks"),
            leadership: data.get("leadership"),
            save: data.get("save"),
            points: this.props.unit.points,
            weapons: this.props.unit.weapons
        };

        console.log(newUnit);
        this.props.updateUnitHandler()
            .then(x => document.getElementById("edit-unit-form").reset())
    }

    stopClick(e) {
        e.stopPropagation();
        this.setState({})
    }

    valueChanged(e) {
        console.log(e.target);
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    render() {
        const unit = this.props.unit;
        const inputs = [];
        // this.props.values = {};

        for (const val in this.propertyList) {
            // this.props.values[val] = unit[val];
            // console.log(this.);
            const prop = this.propertyList[val];
            inputs.push(<td key={prop}><input onChange={this.valueChanged} style={{'width': '110%'}} type="text" value={this.state[prop]} name={prop} /></td>)
        }

        return (
            <div onClick={this.stopClick}>
                <form onSubmit={this.save} id="edit-unit-form">
                <table className="table table-bordered table-sm">
                    <thead>
                    <tr>
                        <th>M</th>
                        <th>WS</th>
                        <th>BS</th>
                        <th>S</th>
                        <th>T</th>
                        <th>W</th>
                        <th>A</th>
                        <th>Ld</th>
                        <th>S</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {inputs}
                        <td><input type="submit" value="Submit"></input></td>
                    </tr>
                    </tbody>
                </table>
                </form>
            </div>
        )
    }
}

export default AdminUnitDetails;