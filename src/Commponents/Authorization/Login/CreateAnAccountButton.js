import React from 'react';
import Button from 'react-bootstrap/Button';

function CreateAnAccountButton() {
    return (
        <div>
            <Button href="/Signup"
                style={{
                    backgroundColor: "#E7B2A5",
                    borderColor: "rgb(240, 130, 198)",
                    borderWidth: "3px", color: "rgb(51, 50, 50)"
                }}
                variant="outline-danger"
                className="createAnAccountButton">
                Create an account
                     </Button>
        </div>
    )
}
export default CreateAnAccountButton