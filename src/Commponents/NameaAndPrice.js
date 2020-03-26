import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import clothes from "../clothes";

function NameAndPrice (props){
        return (
            <div>
                <h1>{clothes[0].name}</h1>
                <h4 className="price">{clothes[0].price}</h4>

            </div>
        )
}
export default NameAndPrice