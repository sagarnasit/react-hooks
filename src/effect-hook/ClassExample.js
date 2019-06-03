import React, { Component } from 'react';

class ClassExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.increaseCount = this.increaseCount.bind(this);
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }
    
    componentWillMount() {
        console.log('Component will mount');
    }

    increaseCount() {
        this.setState( {
            count: this.state.count + 1,
        } )
    }

    render() {
        return (
            <div>
                <p>You have clicked {this.state.count} times</p>
                <button onClick={this.increaseCount }>Click Me</button>
            </div>
        );
    }
}

export default ClassExample;