import React, { Component } from 'react';

class Work extends Component {
    render() {
        const { title, job1, job1content, job2, job2content } = this.props.workExperience;
        return (
            <div className='work-experience'>
                <h2 className='work-title'><i>{title}</i></h2>
                <div className='jobs'>
                    <h3>{job1}</h3>
                    <p className='large-text'>{job1content}</p>
                    <h3>{job2}</h3>
                    <p className='large-text'>{job2content}</p>
                </div>
            </div>
        );
    }
}
export default Work;
