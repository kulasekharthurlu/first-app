import React, { useState } from 'react'

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handliClick = (e) => {
        console.log(data)
        let result = validateForm()
        if (result) {
            console.log("form data is valid")

        } else {
            console.log(errors)
        }

    }
    const validateForm = () => {
        let errors = {}
        let isValid = true
        if (data.username.length <= 4) {
            alert("username is very short")
        }
        if (data.password.length <= 4) {
            alert("password is very short")
        }
        
        if (data.username === "") {
            isValid = false
            errors["username"] = "enter username"

        }
        if (data.password === "") {
            isValid = false
            errors["password"] = "enter password"

        }
        if (data.email === "") {
            isValid = false
            errors["email"] = "enter email"

        }
        setErrors(errors)
        return isValid

    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler}
                placeholder="entername" name="username" />
            {errors.username}<br />
            <input type="password" onChange={onChangeHandler}
                placeholder="password" name="password" />
            {errors.password}<br />
            <input type="email" onChange={onChangeHandler}
                placeholder="email" name="email" />
            {errors.email}<br />
            <br />
            <button onClick={handliClick}>Click Here</button>
        </div>
    )
}

export default Signup
