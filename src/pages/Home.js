import React from 'react';
import '../styles/Home.css';
import anuli from '../assets/anuli.jpeg';




const Home = () => {
    return (
        <section className='intro'>
            <img src={anuli} className='anuli-pics' />
            <h1 className='name'>Anulika Azubike</h1>
            <h2 className='role'>Data Analyst</h2>
            <div className='skills'>
               <table className='power-bi'>
                   <tr>
                      <td id='power-bi1'> Microsoft Power BI </td> 
                      <td id='power-bi2'> </td>
                      <td id='power-bi3'> 90%</td>
                    </tr>
               </table>
               <table className='r-studio'>
                   <tr>
                      <td id='r-studio1'>R-Studio</td> 
                      <td id='r-studio2'> </td>
                      <td id='r-studio3'> 90%</td>
                    </tr>
               </table>
               <table className='python'>
                   <tr>
                      <td id='python1'> Python </td> 
                      <td id='python2'> </td>
                      <td id='python3'> 80%</td>
                    </tr>
               </table>
               <table className='tableau'>
                   <tr>
                      <td id='tableau1'> Tableau </td> 
                      <td id='tableau2'> </td>
                      <td id='tableau3'> 80%</td>
                    </tr>
               </table>
               <table className='sql'>
                   <tr>
                      <td id='sql1'> SQL </td> 
                      <td id='sql2'> </td>
                      <td id='sql3'> 80%</td>
                    </tr>
               </table>
            </div>
        </section>
    )
}


export default Home;