import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sale() {
    return (
        <div className="saleContainer">
            <div
                style={{
                    backgroundImage: 'url(/images/sale.jpg)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    height: '400px',
                    width: "80%",
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
            </div>
        </div>
    )
}
export default Sale