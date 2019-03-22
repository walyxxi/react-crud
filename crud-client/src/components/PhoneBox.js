import React, { Component } from 'react';
import PhoneFormAdd from './PhoneFormAdd';
import PhoneDataList from './PhoneDataList';

export default class PhoneBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ id: 1553258696357, name: 'Waliyul Ardy', phone: '082236857567'}, { id: 1553258696358, name: 'Khusni Jafar', phone: '082235890324' }]
        }
        this.postPhoneBook = this.postPhoneBook.bind(this)
        this.deletePhoneBook = this.deletePhoneBook.bind(this)
        this.updatePhoneBook = this.updatePhoneBook.bind(this)
    }

    postPhoneBook(item) {
        this.setState(state => ({
            data: [...state.data, item]
        }))
    }

    deletePhoneBook(id) {
        this.setState(state => ({
            data: state.data.filter((item) => item.id !== id)
        }))
    }

    updatePhoneBook(id, newData) {
        console.log(id, newData);
        this.setState(state => ({
            data: state.data.map(item => item.id === id ? Object.assign({}, item, {name: newData.name, phone: newData.phone}) : item)
        }))
    }

    render() {
        return (
            <div>
                <div className="container text-center">
                    <h4>
                        <font><b>Phone Book Apps</b></font>
                    </h4>
                </div>
                <div style={{ height: '5px' }}><br /></div>
                <PhoneFormAdd postPhoneBook={this.postPhoneBook} />
                <div style={{ height: '10px' }}><br /></div>
                <PhoneDataList datas={this.state.data} updatePhoneBook={this.updatePhoneBook} deletePhoneBook={this.deletePhoneBook} />
            </div>
        )
    }
}
