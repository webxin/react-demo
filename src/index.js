import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Todo from './containers/index.js';
import Two from './containers/Two.js';
import store from './reducers/combine.js';
import {Provider} from 'react-redux';

ReactDOM.render(
	  (
	  	<Provider store={store}>
				<Router>
				  		<div>
					  		<ul>
					        <li><Link to="/">Home</Link></li>
					        <li><Link to="/about">About</Link></li>
				      	</ul>
					  		<Route path="/" exact  component={Todo}/>
					  		<Route path="/about"  component={Two}/>
			        </div>
			  </Router>
		  </Provider>
      )
	,document.getElementById('root'));
registerServiceWorker();
