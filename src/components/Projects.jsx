import { useState, useEffect } from 'react';
import './Projects.css';
import { SiItchdotio, SiGithub } from "react-icons/si";
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypeJson, BsFiletypeJsx, BsFiletypePy } from "react-icons/bs";

const iconMap = {
    Html: <BsFiletypeHtml />,
    Css: <BsFiletypeCss />,
    Js: <BsFiletypeJs />,
    Json: <BsFiletypeJson />,
    Jsx: <BsFiletypeJsx />,
    Py: <BsFiletypePy />
}

//Fetch and turn to JSON with error handling
const fetchProjects = async url => {
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            alert("Sorry, an error occured");
            console.error(`HTTP Error: ${response.status}`);
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
            <a className='projectLink' href={site}>Visit</a>
            <div className='projectLanguages'>
            {languages.map((language, index) => (
                <div>
                    {iconMap[language] || language}
                </div>
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