import { useState, useEffect } from 'react';
import './Projects.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGithub, FaItchIo, FaGlobe } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

const iconsMap = {
    //languages
    html: <FaHtml5 color='red' title='Html' />,
    css: <FaCss3Alt color='blue' title='Css' />,
    js: <FaJsSquare color='#F7DF1E' title='JavaScript' />,
    react: <FaReact color='#58c4dc' title='React' />,
    python: <FaPython color='#346C99' title='Python' />,
    godot: <SiGodotengine color='#4487B9' title='Godot Engine' />,
    //platforms
    github: <FaGithub title='View on GitHub' />,
    itch: <FaItchIo title='View on Itch.io' />,
    web: <FaGlobe title='View website' />
};


//Fetch and turn to JSON with error handling
const fetchProjects = async url => {
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            throw new Error();
        }
        const data = await response.json();
        return data;

    } catch (error) {
        alert("Sorry, an error occured");
        console.error("Error :", error.message);
    }
}

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
                <a className='projectPlatforms' href={site[index]} target='_blank'>
                    {iconsMap[platform] || platform}
                </a>
            ))}
            </div>
        </div>
    );
}

//Projects list function
const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchProjects('src/data/projects.json');
            setProjectsData(data)
        };

        loadData()
    }, []);

    return(
        <div id='projects'>
            {projectsData.map((project, index) => (
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