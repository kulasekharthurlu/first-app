// import React, { Component } from 'react';

// class demo extends Component {
//     state = {
//         name: "kulasekkhar"
//     }
//     render() {
//         return (
//             <div>
//                 <h1>hellow javascript {this.state.name}</h1>
//             </div>
//         );
//     }
// }
//export default demo;
import React, { useState } from 'react'

const Demo = () => {
    const [name, setName] = useState("world");
    return (
        <div>
            <h1>javaSscript{name}</h1>

        </div>
    )
}
export default Demo;
