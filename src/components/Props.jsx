import React, { Component } from 'react';

class Props extends Component {
    render() {
        return (
            <div>
                <h1 style={{
                    color: "red",
                    backgroundColor: "blue",
                    textAlign: "center",
                    padding: "50px"
                }}>{this.props.user}</h1>
            </div>
        );
    }
}

export default Props;