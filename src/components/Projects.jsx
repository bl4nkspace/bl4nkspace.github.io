import { data } from 'react-router-dom';
import './Projects.css';
import { SiItchdotio, SiGithub } from "react-icons/si";

//Fetch and turn to JSON with error handling
const fetchProjects = async url => {
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            alert("Sorry, an error occured");
            console.error(`HTTP Error: ${response.status}`);
        }
        const fetchedData = await response.json();
        return fetchedData;

    } catch (error) {
        console.error("Error :", error.message);
    }
}
console.log(await fetchProjects("./src/data/projects.json"))
const Project = (name, description, site, languages, platforms) => {
    return ;
}

const Projects = () => {
    return(
        <div className='project'>
            <p>gvgvj</p>
        </div>
    );
}
export default Projects;