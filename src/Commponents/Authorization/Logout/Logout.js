import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.clear();
            this.props.history.push('/Login')
            window.location.reload()
    };
    render() {
        return (<Redirect to="/" />)
    }
}
export default Logout