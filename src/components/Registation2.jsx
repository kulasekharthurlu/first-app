import React, { useState } from 'react';

const Example = () => {
    const [errors, setErrors] = useState({
        firstname: ""
    });
    const [firstname, setFirstname] = useState(null);
    const handle = () => {
        let see = validationForm();


    }
    const validationForm = () => {
        alert("button clicked");
        let errors = {}
        let isValid = true

        if (firstname == null) {
            errors["firstname"] = "enter firstname"
            isValid = false
        }
        setErrors(errors)
        return isValid

    }
    return (
        <div>
            firstname:<input type="text"
                placeholder="enter first name"
                 onChange={e => setFirstname(e.target.value)} 
                 />
            <div>{errors.firstname}</div>
            lastname:<input type="text"
            placeholder="enter last name"
            onChange={l=>setLastname(l.target.value)}
            />

            <button onClick={e => handle() }>Registration</button>
        </div>
    );
};

export default Example;