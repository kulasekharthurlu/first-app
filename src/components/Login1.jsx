import React, { useState } from 'react'

const Login1 = () => {
    const [username, setUsername] = useState("");
    const [passwoprd, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handliClick = (e) => {
        e.preventDefault();
        let result = {
            username, passwoprd, email
        }
        console.log(result)
    }
    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="entername" name="username" /><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" name="password" /><br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" name="email" /><br />
            <button onClick={handliClick}>Click Here</button>
        </div>
    )
}

export default Login1
