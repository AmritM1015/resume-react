import React, { Component } from 'react';

class Work extends Component {
    render() {
        const { title, job1, job1content, job2, job2content } = this.props.workExperience;
        return (
            <div>
                <h2>{title}</h2>
                <h3>{job1}</h3>
                <p>{job1content}</p>
                <h3>{job2}</h3>
                <p>{job2content}</p>
            </div>
        );
    }
}
export default Work;
