import React, { useState } from 'react';

const Login = () => {
    const [errors, setErrors] = useState({ name: "", password: "" })
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit = () => {
        console.log(name + " " + password)
        if (validateForm()) {

        }

    }
    const validateForm = () => {
        let errors = {}
        let isValid = true
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        const x = regex.test(name)
        if (name == null) {
            errors["name"] = "enter email"
            isValid = false
        }
        if (password == null) {
            errors["password"] = "enter password"
            isValid = false
        }
        if (x) {
            errors["name"] = "please enter valid email"
            isValid = false
        }
        setErrors(errors)
        return isValid
    }
    return (
        <div>
            enter user name :<input
                type="text"

                onChange={k => setName(k.target.value)}
                placeholder="enter username" />
            <div>{errors.name}</div>
            enter password:<input
                type="password"
                onChange={k => setPassword(k.target.value)}
                placeholder="enter password" />
            <div>
                {errors.password}
            </div>

     <button onClick={e => handleSubmit()}>sign in</button>

        </div>
    );
};

export default Login;