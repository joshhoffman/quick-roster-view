import React from 'react'

class AdminUnit extends React.Component {
    render() {
        return (
            <div key={this.props.unit.name}>
                {this.props.unit.name}
            </div>
        )
    }
}

export default AdminUnit