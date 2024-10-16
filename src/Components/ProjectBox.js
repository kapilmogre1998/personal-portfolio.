import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Memory Card": "The Memory Card Game is a web-based game where players match pairs of cards by flipping them over. It’s designed to help improve memory skills and is built using React JS. The game features a responsive design, making it accessible on various devices.",
    "Memory Card Github" : "https://github.com/kapilmogre1998/memory-card-game",
    "Memory Card Website" : "https://memory-card-game-blue.vercel.app/",

    "Rock Paper Scissor": "This project is a simple web-based Rock-Paper-Scissors game that allows users to play against the computer. The game features a clean and intuitive interface where users can choose their move and see the computer's choice in real time. The game tracks scores, displaying the results of each round and the overall winner.",
    "Rock Paper Scissor Github" : "https://github.com/kapilmogre1998/js-rock-paper-scissors",
    "Rock Paper Scissor Website" : "https://js-rock-paper-scissors-six.vercel.app/",

    "Search Country": "The Search Country application is a web-based tool designed to allow users to search and view detailed information about any country in the world. The application fetches data from a public API and displays relevant details like the country’s name, capital, population, flag, languages, currencies, and more.",
    "Search Country Github":"https://github.com/kapilmogre1998/search-country",
    "Search Country Website":"https://search-country-ez84.vercel.app/",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div className='project-desc' >
        <div>
          <br />
          <h3>{projectName}</h3>
          <br />
          {desc[projectName]}
          <br />
        </div>
        <div>
          <a style={{ display: show }} href={desc[projectName + ' Github']} target='_blank'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>

          <a href={desc[projectName + ' Website']} target='_blank'>
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectBox