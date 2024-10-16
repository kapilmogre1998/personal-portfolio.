import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, my name is <b>Kapil Mogre</b>, and I am from Nagpur, India. I have 3 years of professional experience working as a <b>Front-End Developer</b> at <a href='https://www.nobroker.in/' target='_blank' >NoBroker.in,</a> a unicorn proptech company.
            <br /> <br />
            At Nobroker, I built and maintained web apps for a smooth user experience. I worked with teams to create scalable solutions in real estate tech, using JavaScript, React, and responsive design to make user-friendly interfaces.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        {['Html', 'CSS', 'JS', 'React','Tailwind',  'Bootstrap', 'Sass', 'MUI', 'Git', 'Npm', 'Postman', 'Figma', 'Nginx' ].map((skill) => <Skills skill={skill} />)}
      </div>
    </>
  )
}

export default About