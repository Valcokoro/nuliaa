import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/projects' exact component={Projects}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
