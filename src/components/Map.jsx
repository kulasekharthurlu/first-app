// @flow strict

import React from 'react';

function Map() {
    //const arr = ["react js", "Angular Js", "Node JS", "view JS"]
    const arr = [{
        id: 1,
        title: "react JS"
    },
    {
        id: 2,
        title: "Angular JS"
    },
    {
        id: 3,
        title: "Node JS"
    },
    {
        id: 4,
        title: "View JS"
    },
    ]
    return (
        <div>
            {
                arr.map(
                    (value) => <li key={value.id}>{value.title}</li>
                )
            }
        </div>
    );
};

export default Map;