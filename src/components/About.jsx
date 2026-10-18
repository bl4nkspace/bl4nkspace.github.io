import './About.css';
import KnownLanguages from './KnownLanguages';
import { MdOpenInNew } from 'react-icons/md';

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='aboutElement'>
                <h2 className='center'>Who am I ?</h2>
                <div className="aboutBio">
                    <strong>Hi, I'm Bl4nk_Space 👋</strong>
                    <p>I'm a self-taught developer who builds web apps, tools and games, like a drawing editor for calculators or a procedural voxel world in python. I started coding at 9 on Scratch, and what I enjoy the most is learning by turning ideas into something useful in everyday life.</p>
                    <p>Right now I'm learning Chineese and working on a 2d game.</p>
                    <p>Outside of code, I love physics, maths and logic.</p>
                </div>
                <a href='mailto:lepcquiparle@gmail.com'  className='aboutMail'>
                    Get in touch ! 
                    <MdOpenInNew 
                        size='1.2em' 
                        style={{transform: "translateY(0.25em)"}} 
                    />
                </a>
            </div>
            
            <div className='aboutElement'>
                <h2 className='center'>Skills</h2>
                <KnownLanguages />
            </div>
        </div>
    );
}

export default About;