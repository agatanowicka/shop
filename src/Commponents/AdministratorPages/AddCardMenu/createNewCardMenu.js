import backendLink from "../../../backendLink";
function createNewCardMenu(props) {
    return fetch(backendLink+'/cardMenu/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + props.token
        },
        body: JSON.stringify({
            image: props.cardMenuForm.image.value,
            title: props.cardMenuForm.title.value,
            type: props.cardMenuForm.type.value
        })
    })
        .then(res => {
            if (res.status === 422) {
                console.log("Validation failed. Make sure the email address isn't used yet!");
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Creating a cardMenu failed!');
            }
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        });
}

export default createNewCardMenu