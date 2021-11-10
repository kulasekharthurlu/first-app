// @flow strict

import * as React from 'react';

import Add from './Add';
import List from './List';

function PhoneBook() {

    var l = [
        {
            name: "kula",
            pno: "9000414340",
            email: "kula@gmail.com",
            adress: "nv palli"
        },
        {
            name: "tony",
            pno: "8179591802",
            email: "tony@gmail.com",
            adress: "nv palli"
        },
        {
            name: "hari",
            pno: "9701127427",
            email: "hari@gmail.com",
            adress: "nv palli"
        },
        {
            name: "giri",
            pno: "9848022338",
            email: "giri@gmail.com",
            adress: "nv palli"
        }

    ]
    return (
        <div>
            <Add></Add>
            <List data={l}></List>



        </div >
    );
};

export default PhoneBook;