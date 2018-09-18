import React from 'react'

class TextInputField extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        this.displayName = this.props.name;
        this.name = this.props.name.toLowerCase().replace(" ", "-");
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">{this.displayName}</div>
                <div className="col-md-4"><input type="text" id="{this.name}" name="{this.name}" required/></div>
            </div>
        )
    }
}

export default TextInputField;