import React,{useState} from 'react';
import '../styles/Projects.css';
import PowerBI from '../components/PowerBI';
import Rstudio from '../components/Rstudio';



const Projects = () => {
        const [projects, setProjects] = useState();
        const onClickBI = () => setProjects(<PowerBI/>)
        const onClickR = () => setProjects(<Rstudio/>)
    return (
        <section className='projects-page'>
            <h1 className='projects-head'>PROJECTS</h1>
            <h3 className='click-btn'>Click button to view projects</h3>
                    <button onClick={onClickBI} className='pbi-btn'>Power BI Projects</button>
                     <button onClick={onClickR} className='rstudio-btn'>R-Studio Projects</button>
            <div>{projects}</div>
            
        </section>
    )
}

export default Projects;