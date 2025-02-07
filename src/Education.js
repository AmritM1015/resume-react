import React, { Component } from 'react';

class Education extends Component {
    render() {
        const { title, bsInstitution, bsDegree, bsDates } = this.props.education;
        return (
            <div className='education'>
                <h2><i>{title}</i></h2>
                <div className='university'>
                    <p className='large-text'><strong>Institution:</strong> {bsInstitution}</p>
                    <p className='large-text'><strong>Degree:</strong> {bsDegree}</p>
                    <p className='large-text'><strong>Dates:</strong> {bsDates}</p>
                </div>
            </div>
        );
    }
}
export default Education;
