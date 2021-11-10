// @flow strict

import React, { useState } from 'react';

function OnChange() {
    const [user, setUser] = useState("");

    const handler = e => {
        setUser(e.target.value)
    }
    return (
        <div>
            <center>
                <input type="text" placeholder="entername" value={user} name="user"
                    onChange={handler}
                /><br />
                {user}
            </center>


        </div>
    );
};

export default OnChange;