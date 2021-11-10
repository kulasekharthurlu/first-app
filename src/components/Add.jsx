// @flow strict

import React, { useState } from 'react';


function Add() {
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [adress, setAdress] = useState(null)

    const handleSubmit = () => {
        console.log("working");

    }
    handleSubmit();
    return (
        <div>
            <h1>Add items</h1>
            <p>enter name:<input type="text" placeholder="enter name"
                onChange={a => setName(a.target.value)} /></p>
            <p>enter phoneno:<input type="text" placeholder="enter phoneno"
                onChange={b => setEmail(b.target.value)} /></p>
            <p>enter email:<input type="text" placeholder="enter email"
                onChange={c => setPhone(c.target.value)} /></p>
            <p> enter adress:<input type="text" placeholder="enter  adress"
                onChange={d => setAdress(d.target.value)} /></p>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default Add;