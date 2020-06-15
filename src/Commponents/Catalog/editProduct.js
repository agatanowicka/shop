export default function editCard(props) {
    let productId = props.productId;
    return (fetch(`http://localhost:8080/collection/edit/${productId}`,  {
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
            if (res.status !== 200) {
                return alert('Failed to fetch status')
            }
            return true;
        })
        .catch(err => {
            return false;
        }))
}