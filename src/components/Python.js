import React from 'react';
import '../styles/Projects.css';
import pythonpics1 from '../assets/pythonpics1.png';
import pythonpics2 from '../assets/pythonpics2.png';
import pythonpics3 from '../assets/pythonpics3.png';
import pythonpics5 from '../assets/pythonpics5.png';
import pythonpics6 from '../assets/pythonpics6.png';
import pythonpics7 from '../assets/pythonpics7.png';
import pythonpics8 from '../assets/pythonpics8.png';
import pythonpics9 from '../assets/pythonpics9.png';
import pythonpics10 from '../assets/pythonpics10.png';
import pythonpics11 from '../assets/pythonpics11.png';
import pythonpics12 from '../assets/pythonpics12.png';
import pythonpics13 from '../assets/pythonpics13.png';
import pythonpics14 from '../assets/pythonpics14.png';






const Python = () => {
    return (
        <div className='flex-container'>
                <div className='python-item'>
                    <h2 className='r-project'>Python</h2>
                    <h3 className='r-project1'>NETWORK  AND  TEXT  ANALYSES  IN PYTHON  USING  A  TRADE  DATA.</h3>
                    <img src={pythonpics1} className='r-pics1' alt='python result'/>
                    <img src={pythonpics2} className='r-pics2' alt='python result' />
                    <img src={pythonpics3} className='r-pics3' alt='python result'/>
                    <div className='python_project2'>
                    <h3 className='r-project2'>DATA VISUALIZATION OF  THE  HR DATA IN PYTHON.</h3>
                    <img src={pythonpics5} className='r-pics7' alt='python result'/>
                    <img src={pythonpics6} className='r-pics8' alt='python result'/>
                    <h4 className='hd_model'>Code for Plot 2</h4>
                    <img src={pythonpics7} className='r-pics9' alt='python result'/>
                    <h4 className='rpart-plot'>Plot 2</h4>
                    <img src={pythonpics8} className='r-pics10' alt='python result'/>
                    <h4 className='rpart-rules'>Code for Plot 3</h4>
                    <img src={pythonpics9} className='r-pics11' alt='python result'/>
                    <h4 className='hd_model2'>Plot 3</h4>
                    <img src={pythonpics10} className='r-pics12'  alt='python result'/>
                    <h4 className='rpart-plot2'>Code for Plot 4</h4>
                    <img src={pythonpics11} className='r-pics13' alt='python result'/>
                    <h4 className='hd_pred'>Plot 4</h4>
                    <img src={pythonpics12} className='r-pics14' alt='python result'/>
                    <h4 className='plotcp'>Code for Plot 5</h4>
                    <img src={pythonpics13} className='r-pics15' alt='python result'/>
                    <h4 className='plotcp'>Plot 5</h4>
                    <img src={pythonpics14} className='r-pics15' alt='python result'/>

                    </div>
                </div>
            </div>

    )
}


export default Python;