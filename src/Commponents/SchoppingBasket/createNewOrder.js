import backendLink from "../../backendLink";

function createNewOrder(productsIdAndSize) {
    const token = localStorage.getItem('token');
    return fetch(backendLink + '/order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
            products: productsIdAndSize
        })
    })
        .then(res => {
            return true;
        })
        .catch(err => {
            return false;
        });
}
export default createNewOrder