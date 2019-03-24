import React, { Component } from 'react';

export default class PhoneFormAdd extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            adding: false,
            name: this.props.name || '',
            phone: this.props.phone || ''
        }
        this.handleButtonAdd = this.handleButtonAdd.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleButtonAdd() {
        this.setState({ adding: true })
    }

    handleButtonCancel() {
        this.setState({ adding: false })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        var name = this.state.name.trim()
        var phone = this.state.phone.trim()
        if (!name || !phone) {
            return
        }
        this.props.onSave(name, phone)
        this.setState({ name: '', phone: '', adding: false })
    }

    render() {
        return (
            <div>
                {
                    this.state.adding ?
                    <div className="card">
                        <div className="card-header">Adding Form</div>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Name"
                                        onChange={this.handleNameChange} value={this.state.name} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Phone</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="081999123XXX"
                                        onChange={this.handlePhoneChange} value={this.state.phone} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    <i className="fas fa-save"></i> Save
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-warning" onClick={this.handleButtonCancel}>
                                    <i className="fas fa-ban"></i> Cancel
                                </button>
                            </form>
                        </div>
                    </div> 
                    :
                    <button type="button" className="btn btn-primary" onClick={this.handleButtonAdd}>
                        <i className="fas fa-plus"></i> Add
                    </button>
                }
            </div>
        )
    }
}
