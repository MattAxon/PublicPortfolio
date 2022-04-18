import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/contact';
import Projects from './pages/projects';
import MyNavbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import Email from './pages/email'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <MyNavbar />
    <Switch>
    <Route exact path="/" component={Home} />
      <Route path='/home' component={Home}/>
      <Route path='/email' component={Email}/>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
