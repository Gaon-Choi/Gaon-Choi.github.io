import React from 'react';
import './styles.css'

function About(){
    return (
        <div className='about'>
            <div className='profile'>
                <div className='name'>
                    <div className='engName'>Gaon Choi</div>
                    <div className='korName'>최가온</div>
                    <div className='github'>[Github] Gaon-Choi</div>
                    <div className='email'>[Email] choigaon1028@gmail.com</div>
                </div>
                <div className='profile-pic'/>
            </div>
            <div className='education'>
                <h2>Education</h2>
                <h3>Hanyang University</h3>
                <ul>
                    <li>Bachelor of Science, Department of Computer Science and Engineering</li>
                    <li>Bachelor of Science, Department of Electronic Engineering</li>
                </ul>
            </div>
            <div className='work'>
                <h2>Work Experience</h2>
                <h3>EnjoySoft</h3>
                <ul>
                    <li>Backend Developer (2023.02 ~ Present)</li>
                    <li>Alternative Military Service</li>
                </ul>
            </div>
        </div>
    );
}

export default About;