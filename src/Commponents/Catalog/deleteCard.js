import backendLink from "../../backendLink";

export default function deleteCard( id) {
    let cardMenuId = id;
    return (fetch(backendLink + `/collection/product/${cardMenuId}`, { method: 'DELETE' })
        .then(res => {
            if (res.status !== 200) {
                return alert('Failed to fetch status')
            }
            return true
        })
        .catch(err => {
            return false
        }))
}