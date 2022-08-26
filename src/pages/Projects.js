import React from 'react';
import '../styles/Projects.css';
import pbi1 from '../assets/pbi1.png';
import pbi2 from '../assets/pbi2.png';
import rpics1 from '../assets/rpics1.png';
import rpics2 from '../assets/rpics2.png';
import rpics3 from '../assets/rpics3.png';
import rpics4 from '../assets/rpics4.png';
import rpics5 from '../assets/rpics5.png';
import rpics6 from '../assets/rpics6.png';
import rpics7 from '../assets/rpics7.png';
import rpics8 from '../assets/rpics8.png';
import rpics9 from '../assets/rpics9.png';
import rpics10 from '../assets/rpics10.png';
import rpics11 from '../assets/rpics11.png';
import rpics12 from '../assets/rpics12.png';
import rpics13 from '../assets/rpics13.png';
import rpics14 from '../assets/rpics14.png';
import rpics15 from '../assets/rpics15.png';




const Projects = () => {
    return (
        <section className='projects-page'>
            <h1 className='projects-head'>PROJECTS</h1>
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
                <div className='flex-item'>
                    <h2 className='r-project'>R-Studio</h2>
                    <h3 className='r-project1'>Project 1 : <span className='cancer-diagnosis'>ANALYSIS OF CANCER DIAGNOSIS USING THE R STUDIO.</span></h3>
                    <p className='r-description1'>
                        Using the cancer data from CDC website, I tried to predict cancer diagnosis using the features related to the shape and size of the cancer nuclei. 
                        The summary steps and results of this project are seen below. First, I tried to normalize all predictor variables using the diagnosis as a target/class 
                        variable and other variables as predictors. I randomly split the data into training and test sets, with 80% observation in training sets and the 20% in test set. 
                        I created four(4) dataframes ; the first one relating to the training set predictors, the second is the test set predictors, the last two are the training and test set class variables respectively.
                         Using the KNN algorithm, I predicted the class variables for the training set. Lastly, to evaluate the model performance, I used the confusionn matrix and the specifity result reveals that 100% had benign cancer disease and 95% of these were malignant.
                    </p>
                    <h3 className='r-result1'>Results</h3>
                    <h4 className='cancer-data'>summary(cancer_data)</h4>
                    <img src={rpics1} className='r-pics1' alt='cancer data'/>
                    <h4 className='cancer-data_boxplot'>boxplot(cancer_data_n$texture_mean)</h4>
                    <img src={rpics2} className='r-pics2' alt='cancer data boxplot' />
                    <h4 className='cancer-data_histogram'>histogram(cancer_data_n$texture_mean)</h4>
                    <img src={rpics3} className='r-pics3' alt='cancer data histogram' />
                    <h4 className='set-seed'>
                        set.seed(1)<br/>
                        {`subset_int <- sample(nrow(cancer_data_n), floor(nrow(cancer_data_n)*0.8))`}<br/>
                        (subset_int)
                    </h4>
                    <img src={rpics4} className='r-pics4' alt='result'/>
                    <h4 className='cd_test'>{`cd_test_pred<-knn(train=cd_train, test=cd_test, cl=cd_train_labels, k=24)`}<br/>
                        (cd_test_pred)<br/>
                        cd-cancer disease
                    </h4>
                    <img src={rpics5} className='r-pics5' />
                    <h4 className='cancer-data_confusionMatrix'>confusionMatrix(cd_test_pred,cd_test_labels)</h4>
                    <img src={rpics6} className='r-pics6' alt='confusionMatrix'/>

                    <div className='r-studio_project2'>
                    <h3 className='r-project2'>Project 2 : <span className='heart-disease'>DATA ANALYSIS OF THE HEART DISEASE USING R-SUDIO.</span></h3>
                    <p className='r-description2'>In this project, I used the dataset on heart diseases to examine records of patients in training set and the use the information to predict whether patients in 
                    test are likely to suffer from heart disease without performing any invasive procedures. I called up the data path using the read.csv() function, I dropped all missing values using {`df<-na.omit`} (df). 
                    I randomly split my data into training and test sets, with 80% observation in training set and 20% in test set. I also built a simple decision tree using training set with heart disease as the class variable and age $cholestrol as predictors.
                     I also plotted the decsions trees, displayed classification associated with the decision tree. In addition, I rebuilt a full decision tree to predict patient’s health disease diagnosis in the test set. A confusion matrix was also employed to evaluate the model.
                      The complexity parameter for the decision treee and table were employed. 
                    </p>
                    <h4 className='hd'>summary(hd)</h4>
                    <img src={rpics7} className='r-pics7' alt='summary'/>
                    <h4 className='hd_train'>set.seed(1)<br/>
                        {`train_index<-sample(nrow(hd), floor(0.8*nrow(hd)))`}<br/>
                        {`hd_train<-hd[train_index, ]`}<br/>
                        {`hd_test<-hd[-train_index, ]`}<br/>
                        hd_test
                    </h4>
                    <img src={rpics8} className='r-pics8' alt='train index'/>
                    <h4 className='hd_model'>{`hd_model<-rpart(heartDisease~age+cholesterol,data=hd_train,cp=0.01)`}</h4>
                    <img src={rpics9} className='r-pics9' alt='hd model'/>
                    <h4 className='rpart-plot'>rpart.plot(hd_model)</h4>
                    <img src={rpics10} className='r-pics10' alt='rpart plot'/>
                    <h4 className='rpart-rules'>rpart.rules(hd_model)</h4>
                    <img src={rpics11} className='r-pics11' alt='rpart rules'/>
                    <h4 className='hd_model2'>{`hd_model2<-rpart(heartDisease~.,data=hd_train,cp=0.01)`}</h4>
                    <img src={rpics12} className='r-pics12'  alt='hd model 2'/>
                    <h4 className='rpart-plot2'>rpart.plot(hd_model2)</h4>
                    <img src={rpics13} className='r-pics13' alt='rpart plot 2'/>
                    <h4 className='hd_pred'>confusionMatrix(hd_pred,hd_test$heartDisease)</h4>
                    <img src={rpics14} className='r-pics14' alt='confusionMatrix'/>
                    <h4 className='plotcp'>plotcp(hd_model2)</h4>
                    <img src={rpics15} className='r-pics15' alt='plotcp'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;