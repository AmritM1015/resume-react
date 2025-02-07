import React, { Component } from 'react';

class Personal extends Component {
    render() {
        return <div>
             <h2>{this.props.profile.title}</h2>
             <p>{this.props.profile.content}</p>
        </div>
    }
}
export default Personal;