export default function deleteCardMenu( id) {
    let cardMenuId = id;
    return (fetch(`http://localhost:8080/cardMenu/product/${cardMenuId}`, { method: 'DELETE' })
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