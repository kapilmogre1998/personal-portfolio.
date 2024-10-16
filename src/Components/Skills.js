import React from 'react'; 
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiMui } from "react-icons/si";
// import { CgCPlusPlus } from "react-icons/cg";
// import {DiNodejs, DiJavascript1} from "react-icons/di";
// import {SiExpress, SiMongodb, SiVercel} from "react-icons/si";
import {SiPostman} from "react-icons/si";
import { SiNginx } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {

        Tailwind: <TbBrandTailwind />,
        Sass: <FaSass />,
        MUI: <SiMui />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Git : <FaGitAlt/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Html: <ImHtmlFive2 />,
        CSS: <DiCss3 />,
        JS: <DiJsBadge />,
        Nginx: <SiNginx />
        // Github : <FaGithub/>,
        // Vercel : <SiVercel/>,
        // Javascript: <DiJavascript1/>,
        // Node : <DiNodejs/>,
        // Express : <SiExpress/>,
        // MongoDb : <SiMongodb/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
      <div>{skill}</div>
    </div>
  )
}

export default Skills
