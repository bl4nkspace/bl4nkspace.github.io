import './Projects.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGithub, FaItchIo, FaGlobe } from 'react-icons/fa';
import { SiGodotengine } from 'react-icons/si';
import projects from '../data/projects.json';

const iconsMap = {
    //languages
    html: <FaHtml5 color='#E34F26' title='Html' />,
    css: <FaCss3Alt color='#1572B6' title='Css' />,
    js: <FaJsSquare color='#e2cb1d' title='JavaScript' />,
    react: <FaReact color='#52b0c5' title='React' />,
    python: <FaPython color='#346C99' title='Python' />,
    godot: <SiGodotengine color='#4487B9' title='Godot Engine' />,
    //platforms
    github: <FaGithub title='View on GitHub' />,
    itch: <FaItchIo title='View on Itch.io' />,
    web: <FaGlobe title='View website' />
};

//Single project function
const Project = ({ name, description, site, languages, platforms }) => {
    return (
        <div className='projectCard'>
            <h2>{name}</h2>
            <p>{description}</p>
            <span>Used language(s):</span>
            <div className='projectLanguagesContainer'>
            {languages.map((language) => (
                <div className='projectLanguages'>
                    {iconsMap[language] || language}
                </div>
            ))}
            </div>
            <span>Platform(s):</span>
            <div className='projectPlatformsContainer'>
            {platforms.map((platform, index) => (
                <a rel="noopener" className='projectPlatforms' href={site[index]} target='_blank'>
                    {iconsMap[platform] || platform}
                </a>
            ))}
            </div>
        </div>
    );
}

//Projects list function
const Projects = () => {
    return(
        <div id='projects-container'>
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    name={project.name} 
                    description={project.description} 
                    site={project.site} 
                    languages={project.languages} 
                    platforms={project.platforms} 
                />
            ))}
        </div>
    );
}
export default Projects;