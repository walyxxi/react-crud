import React, { Component } from 'react';
import PhoneFormAdd from './PhoneFormAdd';
import PhoneDataList from './PhoneDataList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PhoneBookActions from '../actions';

class PhoneBox extends Component {
    componentDidMount() {
        this.props.actions.loadPhoneBook();
    }

    render() {
        const { data, actions } = this.props
        return (
            <div>
                <div className="container text-center">
                    <h4>
                        <font><b>Phone Book Apps</b></font>
                    </h4>
                </div>
                <div style={{ height: '5px' }}><br /></div>
                <PhoneFormAdd name="" phone="" onSave={actions.addPhoneBook} />
                <div style={{ height: '10px' }}><br /></div>
                <PhoneDataList data={data} actions={actions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(PhoneBookActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneBox)
