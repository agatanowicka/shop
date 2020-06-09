

function createNewProduct( props) {
    debugger;
   
    return fetch('http://localhost:8080/colection/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + props.token
        },
        body: JSON.stringify({
            images: props.images,
            type: props.type,
            name: props.newProductForm.name.value,
            color: props.newProductForm.color.value,
            price: props.newProductForm.price.value,
            fabric: props.newProductForm.fabric.value,
            typeOfMaterial: props.newProductForm.typeOfMaterial.value,
            careTips: props.newProductForm.careTips.value,
            details: props.newProductForm.details.value,
            productNumber: props.newProductForm.productNumber.value,
            sizeAndQuantity: props.sizeAndQuantity,
        })
    })
        .then(res => {
            if (res.status === 422) {
                console.log("Validation failed. Make sure the email address isn't used yet!");
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Creating a product failed!');
            }
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}
export default createNewProduct