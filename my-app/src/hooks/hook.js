import React, {useState} from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ButtonUseContext from '../components/useContext';
import CountUseCallbackUseMemo from '../components/useCallbackUseMemo';
import Example from '../components/useStateUseEffect';
import Counter from '../components/useReducer';

function useCustomTimeHooks() {
  function getCurrentTime() {
    let date = new Date().toLocaleTimeString();
    return date;
  }
  
  let [time, setTime] = useState(getCurrentTime());
  
  setTimeout(() => {
    setTime(getCurrentTime());
  }, 1000);
  
  return [time];
}

function ApplicationComponent() {
  const [time] = useCustomTimeHooks();
  let match = useRouteMatch();

  return (
    <div>
      <h1>Текущее время: {time}</h1>

      <ul>
        <li>
        <Link to={`${match.url}/context`}>context</Link>
        </li>
        <li>
          <Link to={`${match.url}/state-effect`}>state-effect</Link>
        </li>
        <li>
          <Link to={`${match.url}/callback-memo`}>callback-memo</Link>
        </li>
        <li>
          <Link to={`${match.url}/reducer`}>reducer</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/context`}>
          <ButtonUseContext />
        </Route>
        <Route path={`${match.path}/state-effect`}>
          <Example />
        </Route>
        <Route path={`${match.path}/callback-memo`}>
          <CountUseCallbackUseMemo />
        </Route>
        <Route path={`${match.path}/reducer`}>
          <Counter />
        </Route>
      </Switch>
    </div>
  );
}

export default ApplicationComponent;