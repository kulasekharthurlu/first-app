import React, { useState } from 'react';
import Axios from 'axios';


const Register = () => {
    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        qualification: ""
    });
    const [firstname, setFirstName] = useState(null)
    const [lastname, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [gender, setGender] = useState(null)
    const [qualification, setQualification] = useState(null)

    const handleSubmit = () => {
        let foo = validateForm();
        if (foo) {
            let userData = { firstname, lastname, email, password, gender, qualification }
            Axios.post("http://localhost:2021/app/saveuser", userData)
                .then((res) => {
                    console.log(res);
                    if (res.data.message === "registered successfully")
                        alert(res.data.message);
                    else
                        alert("error")
                }).catch(() => { console.log("error") })

        }
    }
    const validateForm = () => {
        let error = {}
        let isValid = true
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        const x = regex.test(email)

        if (email == null) {
            error["email"] = "enter email"
            isValid = false
        }
        if (firstname === null || firstname.trim() === "") {
            error["firstname"] = "enter firstname"
            isValid = false
        }
        if (lastname === null) {
            error["lastname"] = "enter lastname"
            isValid = false
        }
        if (password === null) {
            error["password"] = "enter password"
            isValid = false
        }
        if (gender === null) {
            errors["gender"] = "please select gender"
            isValid = false
        }
        if (qualification === null) {
            error["qualification"] = "select qualification"
            isValid = false
        }
        if (!x) {
            errors["email"] = "please enter valid email"
            isValid = false
        }
        setErrors(error)
        return isValid
    }
    function firstName(e) {
        setFirstName(e.target.value);
    }

    return (
        <div className="rege"><center>
            <table >
                
                <h1>Registration Form</h1>
                <tr>
                    <td>firstname: </td>
                    <td><input type="text" name="firstnam " onChange={e => firstName(e)} /><div>{errors.firstname}</div></td>
                </tr>

                <tr>
                    <td> lastname:</td>
                    <td><input type="text" name="lastname" onChange={l => setLastName(l.target.value)} /><div>{errors.lastname}</div></td>
                </tr>

                <tr>
                    <td>email:</td>
                    <td><input type="email" name="emali" onChange={m => setEmail(m.target.value)} /><div>{errors.email}</div></td>
                </tr>

                <tr>
                    <td>password:</td>
                    <td> <input type="password" name="password" onChange={k => setPassword(k.target.value)} /><div>{errors.password}</div> </td>
                </tr>

                <tr>
                    <td>gender:</td>
                    <td><input type="radio" value="male" checked={gender === "male"}
                        onChange={g => setGender(g.target.value)} />male
                        <input type="radio" value="female" checked={gender === "female"}
                            onChange={g => setGender(g.target.value)} />female<div>{errors.gender}</div></td>
                </tr>

                <tr>
                    <td> qualification:</td><td><select onChange={q => setQualification(q.target.value)} >
                        <option value="select" >select</option>
                        <option value="mca">mca</option>
                        <option value="B.TECH">B.TECH</option>
                        <option value="MBA">MBA</option>
                    </select><div>{errors.qualification}</div></td>
                </tr>

            </table>
            <button onClick={e => handleSubmit()}>Register</button>
        </center>
        </div>
    );
};

export default Register;