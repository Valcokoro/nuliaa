import React from 'react';
import '../styles/Projects.css';
import pbi1 from '../assets/pbi1.png';
import pbi2 from '../assets/pbi2.png';
import pbi3 from '../assets/pbi3.png';


const PowerBI = () => {
    return (
            <div className='flex-container'>
                <div className='item'>
                    <h2 className='bi-project'>Microsoft Power BI</h2>
                    <h3 className='bi-project1'>SALES DASHBOARD USING MICROSFT POWER BI</h3>
                    <img src={pbi1} className='pbi-pics1' alt='Power BI result'/>
                    <img src={pbi2} className='pbi-pics2' alt='Power BI result'/>
                    <img src={pbi3} className='pbi-pics2' alt='Power BI result'/>
                    
                </div>
            </div>
    )
}


export default PowerBI;