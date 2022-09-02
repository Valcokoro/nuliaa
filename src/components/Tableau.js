import React from 'react';
import '../styles/Projects.css';
import tabl from '../assets/tabl.png';



const Tableau = () => {
    return (
            <div className='flex-container'>
                <div className='item'>
                    <h2 className='bi-project'>TABLEAU</h2>
                    <h3 className='bi-project1'>SALES DASHBOARD USING TABLEAU</h3>
                    <img src={tabl} className='pbi-pics1' alt='Tableau result'/>
                    
                </div>
            </div>
    )
}


export default Tableau;