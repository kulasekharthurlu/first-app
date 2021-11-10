// @flow strict

import * as React from 'react';
import { TextField } from '@material-ui/core';

function Test() {
    return (
        <div>
            <TextField
                id="outlined-basic"
                type="text"
                name="Name"
                //value={data.Name}
                label="Name"
                variant="outlined" /><br />
        </div>
    );
};

export default Test;