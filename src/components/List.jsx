// @flow strict

import * as React from 'react';

function List(props) {
    console.log(props.data)
    let k = props.data.map((w, i) => {
        return (<tr key={i}><td>{w.name}</td>
            <td>{w.pno}</td>
            <td>{w.email}</td>
            <td>{w.adress}</td>
        </tr>)

    })
    console.log(k);
    return (
        <div>
            <h2>list items</h2>
            <table>
                <thead><tr> <td>name</td>
                    <td>pno</td>
                    <td>email</td>
                    <td>adress</td>
                </tr>
                </thead>
                <tbody>
                    {k}
                </tbody>
            </table>

        </div>
    );
};

export default List;