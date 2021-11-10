// @flow strict

import * as React from 'react';

function Filter() {
    // const names = ["kula", "tony", "alex", "google", "pilip",];
    //const filtered = nums.filter(name => name.includes("l"));


    const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
    const filtered = nums.filter(name => name > 80)
    return (
        <div>
            {
                filtered.map(item => <li>{item}</li>)
            }

        </div>
    );
};

export default Filter;