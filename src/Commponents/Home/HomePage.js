import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMenu from "./CardMenu";
import Sale from "./Sale"

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="topContainerBackground">
                    <h1 className="topContainerHeading">Spring 2020</h1>
                </div>
                <Sale />
               <CardMenu />
            </div>
        )
    }

}
export default HomePage