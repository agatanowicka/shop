import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NameAndPrice (props){
        return (
            <div>
                <h1>{props.name}</h1>
                <h4 className="price">{props.price}</h4>

            </div>
        )
}
export default NameAndPrice