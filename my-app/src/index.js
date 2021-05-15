import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import withBackground from './hoc/Hoc';
import withMouse from './renderProp/renderProp';
import Dog from './renderProp/renderProp1';
import Bird from './renderProp/renderProp2';
import ApplicationComponent from './hooks/hook';
import reportWebVitals from './reportWebVitals';

function Component() {
  return (
    <h1>Hello world!</h1>
  );
}

const AppWithBackground = withBackground(Component);
const DogWithMouse = withMouse(Dog);
const BirdWithMouse = withMouse(Bird);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/hoc">hoc</Link>
          </li>
          <li>
            <Link to="/renderProp">renderProp</Link>
          </li>
          <li>
            <Link to="/hooks">hooks</Link>
          </li>
        </ul>
        
        <Switch>
          <Route path="/hoc">
            <AppWithBackground />
          </Route>
          <Route path="/renderProp">
            <DogWithMouse />
            <BirdWithMouse />
          </Route>
          <Route path="/hooks">
            <ApplicationComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
