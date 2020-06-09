import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMenu from "./CardMenu";
import Sale from "./Sale";
import Newsletter from './Newsletter';

function HomePage() {
    return (
        <div>
            <div className="topContainerBackground">
                <h1 className="topContainerHeading">Spring 2020</h1>
            </div>
            <Sale />
            <CardMenu />
            <Newsletter />
        </div>
    )
}
export default HomePage