import backendLink from "../../backendLink";

export default function editCardMenu(props) {
    let cardMenuId = props.cardMenuId;
    const token = localStorage.getItem('token');
    return (fetch(backendLink + `/cardMenu/product/${cardMenuId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
            image: props.cardMenuForm.image.value,
            title: props.cardMenuForm.title.value,
            type: props.cardMenuForm.type.value
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