export default function editCardMenu(e, id) {
    e.preventDefault();
    let cardMenuId = id;
    const token = localStorage.getItem('token');
    return (fetch(`http://localhost:8080/cardMenu/product/${cardMenuId}`, { method: 'POST',  headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' +token
    } })
        .then(res => {
            if (res.status !== 200) {
                return alert('Failed to fetch status')
            }
            return res.json()
        })
        .catch(err => {
            console.log(err);
        }))
}