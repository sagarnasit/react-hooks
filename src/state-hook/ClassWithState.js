import React, { Component, useState } from 'react';

class ClassWithState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
        this.setState( {
            count: this.state.count + 1,
        } )
    }

    render() {
        return(
        <>
            <p>You have clicked {this.state.count} times</p>
            <button onClick={this.increaseCount }>Click Me</button>
        </>
        );
    }
}

export default ClassWithState