import React, { Component } from 'react';

class Education extends Component {
    render() {
        const { title, bsInstitution, bsDegree, bsDates } = this.props.education;
        return (
            <div>
                <h2>{title}</h2>
                <p><strong>Institution:</strong> {bsInstitution}</p>
                <p><strong>Degree:</strong> {bsDegree}</p>
                <p><strong>Dates:</strong> {bsDates}</p>
            </div>
        );
    }
}
export default Education;
