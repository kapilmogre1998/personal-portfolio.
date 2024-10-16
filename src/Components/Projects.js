import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import memoryCardImage from '../images/memory_card_game.png';
import rockpaperscissor from '../images/rock-paper-scissors.png';
import searchcountry from '../images/search-country.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Personal Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={memoryCardImage} projectName="Memory Card" />
        <ProjectBox projectPhoto={rockpaperscissor} projectName="Rock Paper Scissor" />
        <ProjectBox projectPhoto={searchcountry} projectName="Search Country" />
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects