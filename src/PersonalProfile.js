import React, { Component } from 'react';

class Personal extends Component {
    render() {
        return (
        <div className="personal">
             <h2><i>{this.props.profile.title}</i></h2>
             <p className='personal-1 large-text'>{this.props.profile.content}</p>
        </div>
        )
    }
}
export default Personal;