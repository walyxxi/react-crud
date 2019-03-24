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

    handleSave() {
        let name = this.state.name.trim()
        let phone = this.state.phone.trim()
        if (!name || !phone) {
            return
        }
        this.props.editPhoneBook(this.props.data.id, name, phone)
        this.setState({ editing: false })
    }

    render() {
        const { data, deletePhoneBook } = this.props
        if (this.state.editing) {
            return (
                <tr>
                    <td>{data.id}</td>
                    <td>
                        <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </td>
                    <td>
                        <input type="text" className="form-control" placeholder="081999123XXX" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }) }} />
                    </td>
                    <td style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-success" onClick={this.handleSave.bind(this)}><i className="fas fa-save"></i> Save</button>
                        &nbsp;
                        <button type="submit" className="btn btn-warning" onClick={() => { this.setState({ editing: false }) }}><i className="fas fa-ban"></i> Cancel</button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td style={{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-info" onClick={() => { this.setState({ editing: true }) }}><i className="fas fa-edit"></i> Edit</button>
                        &nbsp;
                        <button type="submit" className="btn btn-danger" onClick={() => deletePhoneBook(data.id)}><i className="fas fa-trash-alt"></i> Delete</button>
                    </td>
                </tr>
            )
        }
    }
}

export default PhoneData;
