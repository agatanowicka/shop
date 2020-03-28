import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMenu from "./CardMenu"

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="topContainerBackground">
                    <h1 className="topContainerHeading">Spring 2020</h1>
                </div>
               <CardMenu />
            </div>
        )
    }

}
export default HomePage