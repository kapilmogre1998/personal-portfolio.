import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/personal-photo.jpeg';
import { CiCoffeeCup } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Kapil Mogre</b></h1>
          <div style={{ minWidth: '420px' }} >
            <Typed />
          </div>

          <div className='footerLinks'>
            <a href="https://github.com/kapilmogre1998" target='_blank'><FaGithub style={{ fontSize: '28px' }} /></a>
            <a href="https://www.linkedin.com/in/kapil-mogre/" target='_blank'><FaLinkedin style={{ fontSize: '28px' }} /></a>
            <a href='mailTo:kapilmogre1998@gmail.com' target='_blank'><GrMail style={{ fontSize: '30px' }} /></a>
          </div>
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am a passionate Frontend Developer with over 3 years of experience building responsive,
            user-friendly web applications. I specialize in creating seamless user experiences using modern technologies like <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>ReactJS</b>. <br /> <br />
            With a strong focus on clean code and performance optimization, I strive to deliver intuitive and engaging digital products.
            I enjoy collaborating with designers and backend teams to bring creative ideas to life and continuously learn new tools and techniques to stay at the forefront of web development.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home