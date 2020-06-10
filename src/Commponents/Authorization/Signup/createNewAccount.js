function createNewAccount(props) {
    const formData = props.signupForm;
    return fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: formData.firstName.value,
            lastName: formData.lastName.value,
            email: formData.email.value,
            password: formData.password.value,
            address: formData.address.value,
        })
    })
        .then(res => {
            if (res.status === 422) {
                console.log("Validation failed. Make sure the email address isn't used yet!");
            }
            if (res.status !== 200 && res.status !== 201) {
                console.log('Creating a user failed!');
            }
            return true
        })
        .catch(err => {
            console.log(err);
            return false
        });
}
export default createNewAccount