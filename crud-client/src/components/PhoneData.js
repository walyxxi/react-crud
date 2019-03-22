import React, { Component } from 'react';

class PhoneData extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false,
            name: this.props.data.name || '',
            phone: this.props.data.phone || ''
        }
        this.handleSave = this.handleSave.bind(this)
    }

    handleSave(e) {
        e.preventDefault();
        this.props.updatePhone(this.props.data.id, this.state)
        this.setState({ editing: false })
    }

    render() {
        if (this.state.editing) {
            return (
                <tr>
                    <td>{this.props.index}</td>
                    <td>
                        <form onSubmit={this.handleSave}>
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </form>
                    </td>
                    <td>
                        <form onSubmit={this.handleSave}>
                            <input type="text" className="form-control" placeholder="081999123XXX" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                        </form>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                        <form onSubmit={this.handleSave}><button type="submit" className="btn btn-success"><i className="fas fa-save"></i> Save</button></form>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.state.name}</td>
                    <td>{this.state.phone}</td>
                    <td style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-info" onClick={() => { this.setState({ editing: true }) }}><i className="fas fa-edit"></i> Edit</button>
                        &nbsp;
                        <button type="submit" className="btn btn-danger" onClick={this.props.onDelete}><i className="fas fa-trash-alt"></i> Delete</button>
                    </td>
                </tr>
            )
        }
    }
}

export default PhoneData;
