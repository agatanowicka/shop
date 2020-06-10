function createNewOrder(props) {
    const token = localStorage.getItem('token');
    return fetch('http://localhost:8080/order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
            products: props.productsIdAndSize
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