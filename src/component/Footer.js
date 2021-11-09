import React from 'react';
import { useState } from 'react';


const Footer = () => {
    return (
        <main>
            <div className="row">
                <div className="column">
                    <h1>WE HAVE ACHIEVE</h1>
                    <p>5000 Students, 120 Countries, 940 Courses Published</p>
                </div>
            </div>
            <div className='row'>
                <div className="column">
                    <h1>Contact us</h1>
                    <h4>BAC ONLINE LEARNING ACADEMY</h4>
                    <ul>
                        <li>012-3456789</li>
                        <li>B-2, G-Floor, Jln Utara, Section 14</li>
                        <li>46200, Petaling Jaya</li>
                        <li>Selangor.</li>
                        <li>baconlinelearning@gmail.com</li>
                    </ul>
                </div>
                <div className="column">
                    <h1>Community</h1>
                    <ul>
                        <li>Learners</li>
                        <li>Partners</li>
                        <li>Teaching Center</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="column">
                    <div>
                        &copy; {new Date().getFullYear()} BAC ONLINE LEARNING ACADEMY | All Right Reserved | Terms of Service | Privacy
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer;


// 5000 learners, 4000 graduare , 120 countries reach, 940 course publiched
//become an instructor