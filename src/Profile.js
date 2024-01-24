import React from 'react'
import Typical from 'react-typical'

export default function 
() {
  return (
    <div className='profile'>
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='cols'>
                        <div className='cols-icon'>
                            <a href='https://github.com/TM-Nkomo'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://za.linkedin.com/in/tm-nkomo'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='mailto:michellenkomo@outlook.com'>
                                <i className='fa fa-envelope'></i>
                            </a>
                            <a href='mailto:michellenkomo@outlook.com'>
                                <i className='fa fa-at'></i>
                            </a>

                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hi! I'm <span className='highlighted-text'>Michelle</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer",
                                        1000,
                                        "React/React Native",
                                        1000,
                                        "Java",
                                        1000,
                                        "Agile",
                                        1000,
                                        "Enthusiastic",
                                        1000,
                                        "Innovative",
                                        1000,
                                    ]}
                                />
                            </h1>

                            <span className='profile-role-tagline'>
                            I love designing and coding the frontend and backend of user-friendly websites.
                            Nice to meet you!
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'> Contact Me </button>
                        <a href='TM%20Nkomo%20Resume.pdf' download='TM Nkomo Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-bg'>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
