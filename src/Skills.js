import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { title, content1, content2, content3, content4, content5, content6, content7, content8 } = this.props.keySkills;
        return (
            <div>
                <h2>{title}</h2>
                <ul>
                    <li>{content1}</li>
                    <li>{content2}</li>
                    <li>{content3}</li>
                    <li>{content4}</li>
                    <li>{content5}</li>
                    <li>{content6}</li>
                    <li>{content7}</li>
                    <li>{content8}</li>
                </ul>
            </div>
        );
    }
}
export default Skills;
