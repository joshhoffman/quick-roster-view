import React from 'react'

class TextInputField extends React.Component {
    componentDidMount() {
        this.displayName = this.props.name;
        this.name = this.props.name.toLowerCase().replace(" ", "-");

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(evt) {
        evt.preventDefault();
        this.props.buttonHandler(this.props.name);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">{this.displayName}</div>
                <div className="col-md-4"><input type="text" id={this.name} name={this.name} required/></div>
                <div className="col-md-1">{this.props.buttonHandler ? <button onClick={this.buttonClicked}>Button!</button> : <div />}</div>
            </div>
        )
    }
}

export default TextInputField;