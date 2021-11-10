

import * as React from 'react';

import './Style.css';


function Movieyard(props) {
    return (
        <div className='movie'>

            <lable>
                {props.likes} {props.name} {props.banner}
            </lable>

        </div>
    );
};

export default Movieyard;