import { useState, useEffect } from 'react';
import './Projects.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGithub, FaItchIo, FaGlobe } from "react-icons/fa";

const iconsMap = {
    //languages
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <FaJsSquare />,
    react: <FaReact />,
    python: <FaPython />,
    //platforms
    github: <FaGithub />,
    itch: <FaItchIo />,
    web: <FaGlobe />
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
                <a className='projectPlatforms' href={site[index]}>
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