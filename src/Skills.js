import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { title, content1, content2, content3, content4, content5, content6, content7, content8, content9 } = this.props.keySkills;
        return (
            <div className='key-skills'>
                <h2 class><i>{title}</i></h2>
                <div className='skills large-text'>
                    <ul>
                        <li>{content1}</li>
                        <li>{content2}</li>
                        <li>{content3}</li>
                    </ul>
                    <ul>
                        <li>{content4}</li>
                        <li>{content5}</li>
                        <li>{content6}</li>
                    </ul>
                    <ul>
                        <li>{content7}</li>
                        <li>{content8}</li>
                        <li>{content9}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Skills;
