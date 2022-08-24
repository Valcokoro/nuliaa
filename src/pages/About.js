import React from 'react';
import '../styles/About.css';
import anuli2 from '../assets/anuli2.jpeg';



const About = () => {
    return (
        <section className='about-nuliaa'>
            <img src={anuli2} className='about-pics' />
            <div className='p-statement'>
            <p className='statement'>
                I am a data anaylst with experience using large data sets, along with analytical scripting tools and 
                <br/>visualization platforms to produce actionable insights for clients. My abilities include data cleansing, 
                <br/>transformation, and modeling in order to produce a clear story that is easily comprehended <br/>by non-technical audiences. 
                <br/>
                I am very teachable, resourceful, organized, and work very well with people by bringing the enthusiasm, positive attitude, and focus needed to accomplish any task.
                <br/>
                I look forward to connecting with you!
            </p>
            </div>
        </section>
    )
}

export default About;