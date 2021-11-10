// @flow strict

import React, { useState } from 'react';

function OnSubmit() {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = data;
    const onChange = e => {

        let foo = { ...data, [e.target.name]: e.target.value, }
        setData(foo)
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="username" name="username" onChange={onChange}
                    /><br />
                    <input type="password"
                        placeholder="password"
                        name="password"
                        onChange={onChange}
                    /><br />
                    <input type="submit" name="submit" />
                </form>
            </center>
        </div>
    );
};

export default OnSubmit;