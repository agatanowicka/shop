import React, { Component } from "react";

export class ActivePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeComponent: "",
            activeProduct:""
        }
        this.getProduct = this.getProduct.bind(this);
        this.getComponent = this.getComponent.bind(this);
    }
}
export default ActivePage