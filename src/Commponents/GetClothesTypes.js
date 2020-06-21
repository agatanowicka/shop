import backendLink from "../backendLink";

export default async function getClothesTypes() {
    return (fetch(backendLink+'/cardMenu/', { method: 'GET' })
        .then(res => {
            if (res.status !== 200) {
                return alert('Failed to fetch status')
            }
            return res.json();
        })
        .catch(err => {
            return [];
        }))
}
