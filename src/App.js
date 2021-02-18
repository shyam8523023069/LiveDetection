import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 import VisualDetection from './components/VisualDetection';
import Home from './components/Home';
import Navigation from './components/Navigation';
import "./App.css";
 
class App extends Component {
  render() {
    return (      
      //  <BrowserRouter>
      //   <div>
      //     <Navigation />
      //       <Switch>

      //        <Route path="/" component={Home} exact/>
      //        <Route path="/visualdetectiont" component={VisualDetection}/>
      //        <VisualDetection />
             
            
      //      </Switch>
      //   </div> 
      // </BrowserRouter>
      <BrowserRouter>
      <Navigation />
            <Switch>
            
<div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">
      

				
					<div id="header">
						<Route path="/" component={Home} exact/>
						
						<nav>
							<ul>
								<li><Route path="/visualdetectiont" component={VisualDetection}/></li>
								
							</ul>
						</nav>
					</div>
			
			
      
		</div>
    </div>
    <VisualDetection />
           </Switch>
    </BrowserRouter>
    );
  }
}
 
export default App;
