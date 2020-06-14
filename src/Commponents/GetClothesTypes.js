
export default async function getClothesTypes() {
    return (fetch('http://localhost:8080/cardMenu/', { method: 'GET' })
        .then(res => {
            if (res.status !== 200) {
                return alert('Failed to fetch status')
            }
            return res.json();
        })
        .catch(err => {
            console.log(err);
            return [];
        }))
}
