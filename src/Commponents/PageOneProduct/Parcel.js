import React, { Component } from 'react';
import { FaShippingFast } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

class Parcel extends Component {
    render() {
        return (
            <div>
                <h5> <FaCarSide />  Standard free shipment within 2-5 business days</h5>
                <h5> <FaShippingFast />  Express delivery PLN 35.00 available</h5>
            </div>

        )
    }
}
export default Parcel