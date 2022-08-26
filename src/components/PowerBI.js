import React from 'react';
import '../styles/Projects.css';
import pbi1 from '../assets/pbi1.png';
import pbi2 from '../assets/pbi2.png';


const PowerBI = () => {
    return (
            <div className='flex-container'>
                <div className='item'>
                    <h2 className='bi-project'>Microsoft Power BI</h2>
                    <h3 className='bi-project1'>SALES PERFORMANCE FOR A 5-MONTH PERIOD USING THE MICROSOFT POWER BI</h3>
                    <img src={pbi1} className='pbi-pics1' alt='Power BI result'/>
                    <img src={pbi2} className='pbi-pics2' alt='Power BI result'/>
                    <p className='bi-description'>
                    The above is the data visualization of the sales data for 5-month period; January to May,2021. 
                    I employed the Microsoft Power BI in the analysis and visualization of data. 
                    The company realizes a profit of $44.37M and a total cost of $31.69M. the total population is 110M and a land area of 75bn.
                     The median income is $20m as seen by the gauge visuals. The top 5 profit by state is shown in the line graph. 
                     The order number by total cost, revenue and total profit is seen in the table in the first graph.
                      The order quantity by the four sales channel is seen in the line graph.
                       Online sale channel is seen to have the highest order quantity with wholesale channel as the least. 
                       The stacked bar chart showing the total profit by region reveals the western region to be highest and the north-east as the least profitable region. 
                       The pie chart reveals the order quantity by product name. The second dashboard further shows the sales channel and sales date slicer. 
                       The name card shows the values for the count of state code, sales team, and product name. The clustered bar chart shows the land area by households.
                        The sale of blanket is seen to have the highest revenue from the line chart. The map shows the location of the sales which is mostly in North America. 
                        Lastly, the total sales by team as seen in the pie chart reveals Anthony Berry and Carlos Miller as top salesmen. 
                       In conclusion, the data visualization reveals that the company made profit for the 5 months period considered in this study.
                    </p>
                </div>
            </div>
    )
}


export default PowerBI;